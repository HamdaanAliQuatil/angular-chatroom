import { User1 as TUser1 } from "../api/user1/User1";

export const USER1_TITLE_FIELD = "alias";

export const User1Title = (record: TUser1): string => {
  return record.alias || String(record.id);
};
