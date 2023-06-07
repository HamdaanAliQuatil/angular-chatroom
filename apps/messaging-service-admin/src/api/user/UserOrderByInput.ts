import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  message?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
