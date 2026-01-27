import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Resume, ResumeDocument } from './schemas/resume.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/user.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class ResumesService {
  constructor(@InjectModel(Resume.name) private resumeModel:SoftDeleteModel<ResumeDocument>){}
  async create(createResumeDto: CreateResumeDto,user:IUser) {
    const {url,companyId,jobId}=createResumeDto;
    const {email,_id}=user;
    let newCV= await this.resumeModel.create({
      url,companyId,jobId,
      userId:_id,
      status:"PENDING",
      createdBy:{_id,email},
      history: [
        {
          status:"PENDING",
          updatedAt:new Date,
          updatedBy: {
            _id:user._id,
            email:user.email
          }
        }
      ]
    })
    return {
      _id:newCV?._id,
      createdAt:newCV?.createdAt
    }
  }

  async findByUsers(user:IUser) {
    return await this.resumeModel.find({
      userId:user._id
    }).sort("-createdAt")
    .populate([
      {
        path:"companyId",
        select:{name:1}
      },
      {
        path:"jobId",
        select:{name:1}
      }
    ])
  }

  async findAll(currentPage:number,limit:number,qs:string) {
    const {filter,sort,projection,population}=aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    let offset= (+currentPage-1)*(+limit);
    let defaultLimit=+limit ? +limit:10;
    const totalItems=(await this.resumeModel.find(filter)).length;
    const totalPage=Math.ceil(totalItems/defaultLimit);
    const result= await this.resumeModel.find(filter)
    .skip(offset)
    .limit(defaultLimit)
    .sort(sort as any)
    .populate(population)
    .select(projection as any)
    .exec

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

  async findOne(id: string) {
    return  await this.resumeModel.findById(id);
  }

  async update(_id: string,status:string,user:IUser) {
    if(!mongoose.Types.ObjectId.isValid(_id)){
        throw new BadRequestException("not found resume");
    }
    const updated=await this.resumeModel.updateOne(
      {_id:_id},
      {
        status,
        updatedBy: {
          _id:user._id,
          email:user.email
        },
        $push: {
          history: {
            status:status,
            updatedAt:new Date,
            updatedBy: {
              _id:user._id,
              email:user.email
            }
          }
        }
      }
    )
    return updated;
  }

  async remove(id: number,user:IUser) {
    await this.resumeModel.updateOne(
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
    return this.resumeModel.softDelete({
      _id:id
    })
  }
}
