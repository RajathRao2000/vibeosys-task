export type productType = {
  id: number;
  nameOfProduct: string;
  category: "Finished" | "Semi-Finished" | "Raw";
  expiryDate: string;
  cost: number;
};
