export interface ICard {
  children: React.ReactNode;
  title?: string;
  onBack?: () => void;
}
