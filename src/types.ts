export type productType = {
  id: number;
  name: string;
  category: "Finished" | "Semi-Finished" | "Raw";
  expiryDate: Date;
  cost: number;
};
