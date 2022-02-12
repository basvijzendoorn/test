import { Price as TPrice } from "../api/price/Price";

export const PRICE_TITLE_FIELD = "ticker";

export const PriceTitle = (record: TPrice): string => {
  return record.ticker || record.id;
};
