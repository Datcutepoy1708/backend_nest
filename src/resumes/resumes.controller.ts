import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/user.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('resumes')
@Controller('resumes')
export class ResumesController {
  constructor(private readonly resumesService: ResumesService) {}

  @Post()
  create(@Body() createResumeDto: CreateResumeDto,@User() user:IUser) {
    return this.resumesService.create(createResumeDto,user);
  }
  
   @Post('by-user')
   @ResponseMessage("Get Resumes by User")
   getResumesByUser(@User() user:IUser){
    return this.resumesService.findByUsers(user);
   }

  @Get()
  @ResponseMessage("Fetch List Resumes")
  findAll(@Query("current") currentPage:string,
          @Query("pageSize") limit:string,
          @Query() qs:string

  ) {
    return this.resumesService.findAll(+currentPage,+limit,qs);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body("status") status:string, @User() user:IUser) {
    return this.resumesService.update(id,status,user);
  }

  remove(@Param('id') id: string,@User() user:IUser) {
    return this.resumesService.remove(+id,user);
  }
}
