import type { ITag } from "./tag.types";

const Tag = ({ type, text }: ITag) => {
  return (
    <div
      className={`flex ${type === "success" ? "bg-green-500" : "bg-red-500"} h-[30px] w-[100px] items-center justify-center rounded-full p-2`}
    >
      <span className={`text-xs text-white`}>{text}</span>
    </div>
  );
};

export default Tag;
