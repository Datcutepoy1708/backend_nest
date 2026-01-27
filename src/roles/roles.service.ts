import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role, RolesDocument } from './schemas/role.schema';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/user.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private rolesModel: SoftDeleteModel<RolesDocument>,
  ) {}

  /**
   * Tạo role mới
   */
  async create(createRoleDto: CreateRoleDto, user: IUser) {
    const { name, description, isActive, permissions } = createRoleDto;

    // ✅ SỬA: if (!isExist) → if (isExist)
    const isExist = await this.rolesModel.findOne({ name });
    if (isExist) {
      throw new BadRequestException(`Role ${name} đã tồn tại`);
    }

    const newRole = await this.rolesModel.create({
      name,
      description,
      isActive,
      permissions,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });

    return {
      _id: newRole?._id,
      createdAt: newRole?.createdAt,
    };
  }

  /**
   * 🔥 Lấy tất cả roles với permissions
   */
  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.rolesModel.find(filter)).length;
    const totalPage = Math.ceil(totalItems / defaultLimit);

    const result = await this.rolesModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate({
        path: 'permissions',
        select: '_id apiPath name method module',
      })
      .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPage,
        total: totalItems,
      },
      result,
    };
  }

  /**
   * 🔥 Lấy role theo ID với permissions (QUAN TRỌNG)
   */
  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Role ID không hợp lệ');
    }

    // ✅ SỬA: Thêm .exec() hoặc .lean() để return kết quả
    const role = await this.rolesModel
      .findById(id)
      .populate({
        path: 'permissions',
        select: '_id apiPath name method module',
      })
      .lean() // ✅ Thêm .lean() để trả về plain object
      .exec(); // ✅ Thêm .exec() để execute query

    if (!role) {
      throw new BadRequestException('Role không tìm thấy');
    }

    return role;
  }

  /**
   * 🔥 Lấy role theo name (dùng cho register)
   */
  async findByName(name: string) {
    const role = await this.rolesModel
      .findOne({ name })
      .populate({
        path: 'permissions',
        select: '_id apiPath name method module',
      })
      .lean()
      .exec();

    if (!role) {
      throw new BadRequestException(`Role ${name} không tìm thấy`);
    }

    return role;
  }

  /**
   * Cập nhật role
   */
  async update(_id: string, updateRoleDto: UpdateRoleDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new BadRequestException('Role ID không hợp lệ');
    }

    const { name, description, isActive, permissions } = updateRoleDto;

    // ✅ SỬA: Kiểm tra tên mới có trùng không (trừ role hiện tại)
    if (name) {
      const existRole = await this.rolesModel.findOne({
        name,
        _id: { $ne: _id },
      });
      if (existRole) {
        throw new BadRequestException(`Role ${name} đã tồn tại`);
      }
    }

    const updated = await this.rolesModel
      .findByIdAndUpdate(
        _id,
        {
          name,
          description,
          isActive,
          permissions,
          updatedBy: {
            _id: user._id,
            email: user.email,
          },
        },
        { new: true },
      )
      .populate({
        path: 'permissions',
        select: '_id apiPath name method module',
      })
      .lean()
      .exec();

    if (!updated) {
      throw new BadRequestException('Role không tìm thấy');
    }

    return updated;
  }

  /**
   * Xóa role (soft delete)
   */
  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Role ID không hợp lệ');
    }

    const foundRole = await this.rolesModel.findById(id);

    if (!foundRole) {
      throw new BadRequestException('Role không tìm thấy');
    }

    // ✅ SỬA: Protect ADMIN role
    if (foundRole.name === 'ADMIN') {
      throw new BadRequestException('Không thể xóa role ADMIN');
    }

    await this.rolesModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
        isDeleted: true,
        deletedAt: new Date(),
      },
    );

    return this.rolesModel.softDelete({
      _id: id,
    });
  }

  /**
   * 🔥 Gán quyền cho role
   */
  async assignPermissions(
    roleId: string,
    permissionIds: string[],
    user: IUser,
  ) {
    if (!mongoose.Types.ObjectId.isValid(roleId)) {
      throw new BadRequestException('Role ID không hợp lệ');
    }

    // Validate tất cả permission IDs
    const validIds = permissionIds.filter((id) =>
      mongoose.Types.ObjectId.isValid(id),
    );

    if (validIds.length !== permissionIds.length) {
      throw new BadRequestException('Một số Permission ID không hợp lệ');
    }

    const updated = await this.rolesModel
      .findByIdAndUpdate(
        roleId,
        {
          permissions: validIds,
          updatedBy: {
            _id: user._id,
            email: user.email,
          },
        },
        { new: true },
      )
      .populate({
        path: 'permissions',
        select: '_id apiPath name method module',
      })
      .lean()
      .exec();

    if (!updated) {
      throw new BadRequestException('Role không tìm thấy');
    }

    return updated;
  }
}