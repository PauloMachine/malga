import RowSkeleton from "./table.skeleton";
import type { IColumn, ITable } from "./table.types";

const Table = <T,>({ columns, data, isLoading, onRowClick }: ITable<T>) => {
  return (
    <div className="max-w-[250px] overflow-x-auto sm:max-w-full">
      <table className="min-w-full border-x-2 border-white">
        <thead className="h-[50px] bg-white">
          <tr>
            {columns.map((column: IColumn<T>) => (
              <th
                key={column.key}
                className="whitespace-nowrap border-t-2 border-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-700"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <RowSkeleton columns={columns} />
          ) : data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="h-[50px] cursor-pointer bg-white hover:bg-gray-50"
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="whitespace-nowrap border-t-2 border-gray-100 px-4 py-2 text-sm text-gray-800 md:w-[850px]"
                  >
                    {column.render
                      ? column.render(row)
                      : String(
                          (row as Record<string, unknown>)[column.key] ?? "-",
                        )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-2 text-center text-gray-500"
              >
                Nenhum dado disponível
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
