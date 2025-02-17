export interface ISelect {
  id: string;
  name: string;
  label?: string;
  options: (string | number)[];
  placeholder?: string;
  error?: string;
  required?: boolean;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
}
