import { MdArrowBack } from "react-icons/md";
import type { ICard } from "./card.types";

const Card = ({ title, children, onBack }: ICard) => {
  return (
    <div className="flex w-[95%] flex-col justify-center gap-10 rounded-md bg-white p-5 sm:min-w-[500px] md:min-w-[800px] md:max-w-[800px] md:p-10">
      {(title || onBack) && (
        <div className="flex items-center gap-5">
          {onBack && (
            <MdArrowBack
              onClick={onBack}
              size={24}
              className="cursor-pointer"
            />
          )}
          {title && (
            <span className="text-xl font-bold text-gray-700">{title}</span>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
