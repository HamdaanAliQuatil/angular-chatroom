import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { User1ServiceBase } from "./base/user1.service.base";

@Injectable()
export class User1Service extends User1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
