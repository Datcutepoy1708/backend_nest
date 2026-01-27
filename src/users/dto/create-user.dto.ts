import { Type } from "class-transformer";
import { IsEmail, IsMongoId, IsNotEmpty, IsNotEmptyObject, IsObject, ValidateNested,IsString } from "class-validator";
import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

class Company {
    @IsNotEmpty()
    _id: mongoose.Schema.Types.ObjectId

    @IsNotEmpty()
    name: string
}
export class CreateUserDto {
    @IsEmail({}, {})
    @IsNotEmpty({ message: 'Email không được để trông' })
    email: string;

    @IsNotEmpty({ message: 'Password không được để trống' })
    password: string;

    @IsNotEmpty({ message: 'Name không được để trống' })
    name: string;

    @IsNotEmpty({ message: 'Tuổi không được để trống' })
    age: number

    @IsNotEmpty({ message: 'Địa chỉ không được để trống' })
    address: string

    @IsNotEmpty({ message: "Role không được để trống" })
    @IsMongoId({ message: 'Role có định dạng là mongo id' })
    role: string
    @IsNotEmpty({ message: "Giới tính không được để trônga" })
    gender: string

    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => Company)
    company: Company
}

export class RegisterUserDto {
    @IsEmail({}, {})
    @IsNotEmpty({ message: 'Email không được để trông' })
    email: string;

    @IsNotEmpty({ message: 'Password không được để trống' })
    password: string;

    @IsNotEmpty({ message: 'Name không được để trống' })
    name: string;

    @IsNotEmpty({ message: 'Tuổi không được để trống' })
    age: number

    @IsNotEmpty({ message: 'Địa chỉ không được để trống' })
    address: string

    @IsNotEmpty({ message: 'Giới tính không được để trống' })
    gender: string
}
export class UserLoginDto {
    @IsString() @IsNotEmpty()
    @ApiProperty({ example: 'datcutepoy', description: 'username' }) readonly
    username: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: '123456',
        description: 'password',
    })
    readonly password: string;
}

