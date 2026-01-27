import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-job.dto';
import { IsArray, IsEmail, IsNotEmpty, ValidateNested } from 'class-validator';
import { Types } from 'mongoose';
import { Type } from 'class-transformer';
class UpdatedBy {
    @IsNotEmpty()
    _id:Types.ObjectId

    @IsNotEmpty()
    @IsEmail()
    email:string
}
class History {
    @IsNotEmpty()
    status:string

    @IsNotEmpty()
    updatedAt:Date

    @ValidateNested()
    @IsNotEmpty()
    @Type(()=>UpdatedBy)
    updatedBy:UpdatedBy

}
export class UpdateJobDto extends PartialType(CreateJobDto) {
    @IsNotEmpty({message:'history không được để trống'})
    @IsArray({message:'history có định dạng là array'})
    @ValidateNested()
    @Type(()=>History)
    history:History[]
}
