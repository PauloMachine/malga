export interface IColumn<T> {
  key: string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

export interface ITable<T> {
  columns: IColumn<T>[];
  data: T[];
  isLoading: boolean;
  onRowClick?: (row: T) => void;
}

export interface IRowSkeleton<T> {
  columns: IColumn<T>[];
}
