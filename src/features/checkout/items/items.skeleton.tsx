import Skeleton from "@mui/material/Skeleton";

const ItemsSkeleton = () => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={`skeleton-item-${index}`}
          className="border-gray flex flex-col gap-2 border-solid p-5 md:flex-row md:justify-between"
        >
          <Skeleton variant="text" width={200} height={30} />
          <div className="flex justify-between md:gap-5">
            <Skeleton variant="text" width={20} height={30} />
            <Skeleton variant="text" width={70} height={30} />
          </div>
        </div>
      ))}

      <div className="mt-5 flex justify-between gap-10 rounded-md bg-gray-100 p-5">
        <Skeleton variant="text" width={100} height={30} />
        <Skeleton variant="text" width={100} height={30} />
      </div>
    </div>
  );
};

export default ItemsSkeleton;
