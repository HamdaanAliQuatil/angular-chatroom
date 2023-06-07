import { Module } from "@nestjs/common";
import { User2ModuleBase } from "./base/user2.module.base";
import { User2Service } from "./user2.service";
import { User2Controller } from "./user2.controller";
import { User2Resolver } from "./user2.resolver";

@Module({
  imports: [User2ModuleBase],
  controllers: [User2Controller],
  providers: [User2Service, User2Resolver],
  exports: [User2Service],
})
export class User2Module {}
