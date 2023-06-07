import { User2WhereInput } from "./User2WhereInput";
import { User2OrderByInput } from "./User2OrderByInput";

export type User2FindManyArgs = {
  where?: User2WhereInput;
  orderBy?: Array<User2OrderByInput>;
  skip?: number;
  take?: number;
};
