/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { User2WhereInput } from "./User2WhereInput";
import { Type } from "class-transformer";
import { User2OrderByInput } from "./User2OrderByInput";

@ArgsType()
class User2FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => User2WhereInput,
  })
  @Field(() => User2WhereInput, { nullable: true })
  @Type(() => User2WhereInput)
  where?: User2WhereInput;

  @ApiProperty({
    required: false,
    type: [User2OrderByInput],
  })
  @Field(() => [User2OrderByInput], { nullable: true })
  @Type(() => User2OrderByInput)
  orderBy?: Array<User2OrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { User2FindManyArgs as User2FindManyArgs };
