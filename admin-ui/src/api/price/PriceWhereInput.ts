import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PriceWhereInput = {
  id?: StringFilter;
  ticker?: StringNullableFilter;
};
