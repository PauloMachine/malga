import { Skeleton } from "@mui/material";
import type { IRowSkeleton } from "./table.types";

const RowSkeleton = <T,>({ columns = [] }: IRowSkeleton<T>) => {
  return Array.from({ length: 5 }).map((arr, index) => (
    <tr key={`rowSkeleton${index}`} className="h-[50px] bg-white">
      {columns.map((column, index) => (
        <td key={index} className="w-[300px] px-4 py-2">
          <Skeleton variant="rectangular" height={20} />
        </td>
      ))}
    </tr>
  ));
};

export default RowSkeleton;
