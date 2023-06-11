import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  alias?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  username?: SortOrder;
};
