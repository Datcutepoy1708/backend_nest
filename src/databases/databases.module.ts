import { Module } from '@nestjs/common';
import { DatabasesService } from './databases.service';
import { DatabasesController } from './databases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/users/schemas/user.schema';
import { UserSchema } from 'src/users/schemas/user.schema';
import { Permission, PermissionSchema } from 'src/permissions/schemas/permission.schema';
import { Role, RolesSchema } from 'src/roles/schemas/role.schema';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [DatabasesController],
  providers: [DatabasesService],
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Permission.name, schema: PermissionSchema },
      { name: Role.name, schema: RolesSchema }
    ])
  ]
})
export class DatabasesModule { }
