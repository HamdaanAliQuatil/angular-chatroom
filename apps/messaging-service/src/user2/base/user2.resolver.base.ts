/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateUser2Args } from "./CreateUser2Args";
import { UpdateUser2Args } from "./UpdateUser2Args";
import { DeleteUser2Args } from "./DeleteUser2Args";
import { User2FindManyArgs } from "./User2FindManyArgs";
import { User2FindUniqueArgs } from "./User2FindUniqueArgs";
import { User2 } from "./User2";
import { User2Service } from "../user2.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => User2)
export class User2ResolverBase {
  constructor(
    protected readonly service: User2Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "read",
    possession: "any",
  })
  async _user2sMeta(
    @graphql.Args() args: User2FindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [User2])
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "read",
    possession: "any",
  })
  async user2s(@graphql.Args() args: User2FindManyArgs): Promise<User2[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User2, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "read",
    possession: "own",
  })
  async user2(
    @graphql.Args() args: User2FindUniqueArgs
  ): Promise<User2 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User2)
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "create",
    possession: "any",
  })
  async createUser2(@graphql.Args() args: CreateUser2Args): Promise<User2> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User2)
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "update",
    possession: "any",
  })
  async updateUser2(
    @graphql.Args() args: UpdateUser2Args
  ): Promise<User2 | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => User2)
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "delete",
    possession: "any",
  })
  async deleteUser2(
    @graphql.Args() args: DeleteUser2Args
  ): Promise<User2 | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
