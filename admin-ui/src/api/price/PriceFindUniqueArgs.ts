import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { PriceWhereUniqueInput } from "./PriceWhereUniqueInput";

export type PriceFindUniqueArgs = {
  where: PriceWhereUniqueInput;


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

  