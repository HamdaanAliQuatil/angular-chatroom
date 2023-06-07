import { Module } from "@nestjs/common";
import { User1ModuleBase } from "./base/user1.module.base";
import { User1Service } from "./user1.service";
import { User1Controller } from "./user1.controller";
import { User1Resolver } from "./user1.resolver";

@Module({
  imports: [User1ModuleBase],
  controllers: [User1Controller],
  providers: [User1Service, User1Resolver],
  exports: [User1Service],
})
export class User1Module {}
