import { Field, Int, InputType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';
import {
  IsBoolean, IsInt, IsObject, IsOptional, IsString,
} from 'class-validator';
import { Whisp } from './whisp.entity';

@InputType({ description: 'New whisp data' })
export class WhispInputType implements Partial<Whisp> {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  _id: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readableID: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  type: string;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  severity: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  description: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  closed: boolean;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  applicationID: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  plantID: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  locationID: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  manual: boolean;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  openedBy: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  openedById: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  closedBy: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  closedById: string;

  @Field(() => Date, { nullable: true })
  @IsString()
  @IsOptional()
  timestamp: string;

  @Field(() => Date, { nullable: true })
  @IsString()
  @IsOptional()
  updated: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  @IsObject()
  @IsOptional()
  data: any;
}
