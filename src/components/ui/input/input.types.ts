export interface IInput {
  id: string;
  name?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
