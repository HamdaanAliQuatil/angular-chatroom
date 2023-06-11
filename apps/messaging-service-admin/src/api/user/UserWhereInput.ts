import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  alias?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  username?: StringFilter;
};
