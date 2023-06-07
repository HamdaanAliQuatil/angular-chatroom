import { JsonValue } from "type-fest";

export type User = {
  firstName: string | null;
  id: string;
  lastName: string | null;
  message: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
