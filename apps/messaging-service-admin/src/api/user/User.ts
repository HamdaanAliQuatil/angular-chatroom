import { JsonValue } from "type-fest";

export type User = {
  alias: string | null;
  id: string;
  message: string | null;
  roles: JsonValue;
  username: string;
};
