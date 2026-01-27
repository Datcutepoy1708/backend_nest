import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { IUser } from 'src/users/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Permission, PermissionDocument } from './schemas/permission.schema';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class PermissionsService {
  constructor(@InjectModel(Permission.name) private permissionsModel: SoftDeleteModel<PermissionDocument>) { }
  async create(createPermissionDto: CreatePermissionDto, user: IUser) {
    const { name, apiPath, method, module } = createPermissionDto;
    const isExist = await this.permissionsModel.findOne({ apiPath, method });
    if (!isExist) {
      throw new BadRequestException(`lỗi api với ${apiPath} và ${method}`);
    }

    const newPermission = await this.permissionsModel.create({
      name, apiPath, method, module,
      createdBy: {
        _id: user?._id,
        email: user.email
      }
    })

    return {
      _id: newPermission?._id,
      createdAt: newPermission?.createdAt
    }
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.permissionsModel.find(filter)).length;
    const totalPage = Math.ceil(totalItems / defaultLimit);

    const result = await this.permissionsModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .exec()

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPage,
        total: totalItems
      },
      result
    }
  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException("not found exception");
    }
    return this.permissionsModel.findById(id);
  }

  async update(_id: string, updatePermissionDto: UpdatePermissionDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new BadRequestException("not found");
    }
    const { method, apiPath, module, name } = updatePermissionDto
    const updated = await this.permissionsModel.updateOne(
      { _id },
      {
        module, name, method, apiPath,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }
    )
    return updated;
  }

  async remove(id: string,user:IUser) {
    await this.permissionsModel.updateOne(
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
    return this.permissionsModel.softDelete({
      _id:id
    })
  }
}
