export type PriceCreateInput = {
  price?: number | null;
  currency?: string | null;



  description?: string | null;
  isActive?: boolean | null;


  tier?:  | null;
  region?: string[] | null;

  seasonalDiscount?: boolean | null;
    tags?: string[] | null;
  amount?: number | null;
  

};
