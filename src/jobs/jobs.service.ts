import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { IUser } from 'src/users/user.interface';
import { Job, JobDocument } from './schemas/job.schema';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import aqp from 'api-query-params';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel:SoftDeleteModel<JobDocument>) {}
  async create(createJobDto: CreateJobDto,user:IUser) {
    const {
      name,skills,company,salary,quantity,level,description,startDate
      ,endDate,isActive,location
    }=createJobDto
    let newJob= await this.jobModel.create({
      name,skills,company,salary,quantity,level,description,startDate
      ,endDate,isActive,location,
      createdBy: {
        _id:user._id,
        email:user.email
      }
    })
    return {
      _id:newJob?._id,
    createdAt:newJob?.createdAt
    }
  }

  async findAll(currentPage:number,limit:number,qs:string) {
     const {filter,sort,projection,population}=aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    let offset = (+currentPage -1) * (+limit);
    let defaultLimit= +limit ? +limit : 10;

    const totalItems=(await this.jobModel.find(filter)).length;
    const totalPage=Math.ceil(totalItems/defaultLimit);
    
     const result= await this.jobModel.find(filter)
     .skip(offset)
     .limit(defaultLimit)
     .sort(sort as any)
     .populate(population)
     .exec()

     return{
      meta: {
        current:currentPage,
        pageSize:limit,
        pages:totalPage,
        total:totalItems
      },
      result
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} job`;
  }

  async update(id: number, updateJobDto: UpdateJobDto,user:IUser) {
    return await this.jobModel.updateOne({_id:id},{
      ...updateJobDto,
      updatedBy: {
        _id:user._id,
        email:user.email
      }
    })
  }

  async remove(id: string,user:IUser) {
    await this.jobModel.updateOne(
      {_id:id},
      {
        deletedBy: {
          _id:user._id,
          email:user.email
        },
        isDeleted:true,
        deletedAt:new Date()
      }
    )
    return this.jobModel.softDelete({
      _id:id
    })
  }
}
