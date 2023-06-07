import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  message?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
