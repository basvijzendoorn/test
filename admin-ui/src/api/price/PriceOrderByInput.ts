import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
