import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from './user.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @ResponseMessage("Create a new user")
  async create(@Body() createUserDto: CreateUserDto, @User() user:IUser) {
      let newUser= await this.usersService.create(createUserDto,user);
      return {
        _id: newUser?._id,
        createdAt:newUser?.createdAt
      }
  }
   



  @ResponseMessage("Update a User")
  @Patch()
  async update(@Body() updateUserDto:UpdateUserDto, @User() user:IUser) {
    let updatedUser= await this.usersService.update(updateUserDto,user);
    return updatedUser;
  }

  @Public()
  @Get(':id')
  @ResponseMessage("Fetch user by id")
  async findOne(@Param() id:string) {
    const foundUser= await this.usersService.findOne(id);
    return foundUser;
  }

   @Get()
    @ResponseMessage("Fetch List User ")
    findAll(@Query("current") currentPage:string, //const currentPage:string=req.query.page
            @Query("pageSize") limit:string,
            @Query() qs:string
   ) {
      return this.usersService.findAll(+currentPage,+limit,qs);
    }
  
  @Delete(':id')
  @ResponseMessage("Delete a User")
  remove(@Param('id') id: string ,@User() user:IUser) {
    return this.usersService.remove(id,user);
  }
}
