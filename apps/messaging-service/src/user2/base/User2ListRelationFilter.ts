/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { User2WhereInput } from "./User2WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class User2ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => User2WhereInput,
  })
  @ValidateNested()
  @Type(() => User2WhereInput)
  @IsOptional()
  @Field(() => User2WhereInput, {
    nullable: true,
  })
  every?: User2WhereInput;

  @ApiProperty({
    required: false,
    type: () => User2WhereInput,
  })
  @ValidateNested()
  @Type(() => User2WhereInput)
  @IsOptional()
  @Field(() => User2WhereInput, {
    nullable: true,
  })
  some?: User2WhereInput;

  @ApiProperty({
    required: false,
    type: () => User2WhereInput,
  })
  @ValidateNested()
  @Type(() => User2WhereInput)
  @IsOptional()
  @Field(() => User2WhereInput, {
    nullable: true,
  })
  none?: User2WhereInput;
}
export { User2ListRelationFilter as User2ListRelationFilter };
