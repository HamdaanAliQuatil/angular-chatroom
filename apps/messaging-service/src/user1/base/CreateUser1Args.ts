/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { User1CreateInput } from "./User1CreateInput";

@ArgsType()
class CreateUser1Args {
  @Field(() => User1CreateInput, { nullable: false })
  data!: User1CreateInput;
}

export { CreateUser1Args as CreateUser1Args };
