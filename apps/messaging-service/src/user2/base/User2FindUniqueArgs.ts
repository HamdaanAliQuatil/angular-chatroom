/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { User2WhereUniqueInput } from "./User2WhereUniqueInput";

@ArgsType()
class User2FindUniqueArgs {
  @Field(() => User2WhereUniqueInput, { nullable: false })
  where!: User2WhereUniqueInput;
}

export { User2FindUniqueArgs as User2FindUniqueArgs };