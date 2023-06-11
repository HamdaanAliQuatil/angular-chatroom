import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  alias?: string | null;
  message?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
