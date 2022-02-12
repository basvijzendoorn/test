import { SortOrder } from "../../util/SortOrder";
import { Price } from "./Price";

export type PriceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  Price?: SortOrder;
  ticker?: SortOrder;
  updatedAt?: SortOrder;
};
