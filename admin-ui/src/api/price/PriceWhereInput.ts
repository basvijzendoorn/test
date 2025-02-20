import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

interface PriceRangeFilter {
  min?: number;
  max?: number;
  exact?: number;
}

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
  priceRange?: PriceRangeFilter;
  tier?: PriceTierFilter;
  region?: string[];
  seasonalDiscount?: boolean;
  validUntil?: DateTimeFilter;
  tags?: string[];
};





