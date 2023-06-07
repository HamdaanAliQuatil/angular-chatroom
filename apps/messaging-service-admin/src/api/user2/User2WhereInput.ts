import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type User2WhereInput = {
  alias?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
};
