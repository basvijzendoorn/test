import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type PriceWhereInput = {
  id?: StringFilter;
  amount?: FloatFilter;
  currency?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  description?: StringFilter;
  isActive?: boolean;
};

