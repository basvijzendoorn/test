import { PriceWhereUniqueInput } from "./PriceWhereUniqueInput";
import { PriceUpdateInput } from "./PriceUpdateInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type UpdatePriceArgs = {
  where: PriceWhereUniqueInput;
  data: PriceUpdateInput;

  
};


interface PriceTierFilter {
  tier: "BASIC" | "PREMIUM" | "ENTERPRISE";
  discountPercentage?: number;
}

export type PriceWhereInput = {
  id?: StringFilter;
  amount?: FloatFilter;
  currency?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  description?: StringFilter;
  isActive?: boolean;
  tier?: PriceTierFilter;
  region?: string[];
  seasonalDiscount?: boolean;
  validUntil?: DateTimeFilter;
  tags?: string[];}