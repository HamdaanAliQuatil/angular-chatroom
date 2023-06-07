import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  message?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
