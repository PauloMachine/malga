import type { IButton } from "./button.types";

const Button = ({ children, onClick, disabled }: IButton) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-md bg-black px-4 py-3 uppercase text-white disabled:bg-gray-300 md:w-[200px]"
    >
      {children}
    </button>
  );
};

export default Button;
