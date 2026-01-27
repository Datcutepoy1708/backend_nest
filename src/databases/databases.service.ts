import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Permission, PermissionDocument } from 'src/permissions/schemas/permission.schema';
import { Role, RolesDocument } from 'src/roles/schemas/role.schema';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { ADMIN_ROLE, INIT_PERMISSIONS, USER_ROLE } from './sample';

@Injectable()
export class DatabasesService implements OnModuleInit {
  private readonly logger = new Logger(DatabasesService.name);

  constructor(
    @InjectModel(User.name)
    private userModel: SoftDeleteModel<UserDocument>,
    
    @InjectModel(Permission.name)
    private permissionsModel: SoftDeleteModel<PermissionDocument>,
    
    @InjectModel(Role.name)
    private roleModel: SoftDeleteModel<RolesDocument>,

    private configService: ConfigService,
    private userService: UsersService
  ) { }

  async onModuleInit() {
    const isInit = this.configService.get<string>("SHOULD_INIT");
    
    if (Boolean(isInit)) {
      const countUser = await this.userModel.count({});
      const countRole = await this.roleModel.count({});
      const countPermission = await this.permissionsModel.count({});

      // 1. Create permissions
      if (countPermission === 0) {
        await this.permissionsModel.insertMany(INIT_PERMISSIONS);
        this.logger.log('>>> INIT PERMISSIONS SUCCESS <<<');
      }

      // 2. Create roles
      if (countRole === 0) {
        const permissions = await this.permissionsModel.find({}).select("_id");
        
        await this.roleModel.insertMany([
          {
            name: ADMIN_ROLE,
            description: "Admin thì full quyền",
            isActive: true,
            permissions: permissions  // ✅ SỬA: permission → permissions
          },
          {
            name: USER_ROLE,
            description: "Người dùng/ứng viên hệ thống",
            isActive: true,
            permissions: []  // ✅ SỬA: permission → permissions
          }
        ]);
        
        this.logger.log('>>> INIT ROLES SUCCESS <<<');
      }

      // 3. Create users
      if (countUser === 0) {
        const adminRole = await this.roleModel.findOne({ name: ADMIN_ROLE });
        const userRole = await this.roleModel.findOne({ name: USER_ROLE });
        
        await this.userModel.insertMany([
          {
            name: "I'm admin",
            email: "datcutepoy@gmail.com",
            password: this.userService.getHashPassword(
              this.configService.get<string>("INIT_PASSWORD")
            ),
            age: 69,
            gender: "MALE",  // ✅ SỬA: Thống nhất chữ hoa
            address: "Vietnam",
            role: adminRole?._id
          },
          {
            name: "I'm datcutepoy",
            email: "dtcutepoy1708@gmail.com",
            password: this.userService.getHashPassword(
              this.configService.get<string>("INIT_PASSWORD")
            ),
            age: 96,
            gender: "MALE",  // ✅ SỬA: Male → MALE
            address: "Vietnam",
            role: adminRole?._id
          },
          {
            name: "I'm a normal user",
            email: "dt17082005@gmail.com",
            password: this.userService.getHashPassword(
              this.configService.get<string>("INIT_PASSWORD")
            ),
            age: 19,
            gender: "MALE",  // ✅ SỬA: Male → MALE
            address: "Vietnam",
            role: userRole?._id
          }
        ]);
        
        this.logger.log('>>> INIT USERS SUCCESS <<<');
      }

      if (countUser > 0 && countRole > 0 && countPermission > 0) {
        this.logger.log('>>> ALREADY INIT SAMPLE DATA <<<');
      }
    }
  }

  // Các methods khác...
  create(createDatabaseDto: any) {
    return 'This action adds a new database';
  }

  findAll() {
    return `This action returns all databases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} database`;
  }

  update(id: number, updateDatabaseDto: any) {
    return `This action updates a #${id} database`;
  }

  remove(id: number) {
    return `This action removes a #${id} database`;
  }
}