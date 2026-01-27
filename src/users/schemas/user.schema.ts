import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Role } from "src/roles/schemas/role.schema";

export type UserDocument = HydratedDocument<User>;


@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    password: string
    @Prop()
    name: string;
    @Prop()
    age: number
    @Prop({type:mongoose.Schema.Types.ObjectId, ref:Role.name})
    role:mongoose.Schema.Types.ObjectId

   

    @Prop()
    refreshToken:string;
    
    @Prop({ type: Object })
    company: {
        _id: mongoose.Schema.Types.ObjectId;
        email:string
    }
    @Prop()
    createdAt: Date
    @Prop({ type: Object })
    creteadBy: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }
    @Prop({ type: Object })
    updatedBy: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }
    @Prop({ type: Object })
    deletedBy: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }
    @Prop()
    address: string
    @Prop()
    isDeleted: boolean
    @Prop()
    gender: string
    @Prop()
    DeletedAt: Date
    @Prop()
    updatedAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User);