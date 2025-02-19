export type TItem = {
  name: string;
  quantity: number;
  amount: number;
};

export interface IItem {
  items: TItem[];
  amount: number;
}
