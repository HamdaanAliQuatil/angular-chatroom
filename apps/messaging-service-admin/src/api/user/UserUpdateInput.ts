import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  alias?: string | null;
  message?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
