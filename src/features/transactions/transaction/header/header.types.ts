export interface IHeader {
  id: string;
  amount: number;
  status: "authorized" | "failed";
}
