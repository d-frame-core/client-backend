import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop({required: true})
  publicAddress: string;

  @Prop()
  company_name: string;

  @Prop()
  company_address: string;

  @Prop()
  company_type: string;

  @Prop()
  company_email: string;

  @Prop({type: mongoose.Schema.Types.Decimal128})
  balance;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);