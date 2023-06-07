import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { User2Service } from "./user2.service";
import { User2ControllerBase } from "./base/user2.controller.base";

@swagger.ApiTags("user2s")
@common.Controller("user2s")
export class User2Controller extends User2ControllerBase {
  constructor(
    protected readonly service: User2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
