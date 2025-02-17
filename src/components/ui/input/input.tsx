import type { IInput } from "./input.types";

const Input = ({
  id,
  name,
  type = "text",
  placeholder = "",
  label,
  error,
  required = false,
  value,
  onChange,
}: IInput) => {
  return (
    <fieldset className="relative text-left w-full">
      <input
        id={id}
        placeholder={placeholder}
        className={`
          block px-3 py-4 w-full rounded-lg appearance-none border 
          focus:outline-none focus:ring-0 peer text-sm text-black bg-white 
          ${error ? "border-red-500" : "border-gray-300"}
        `}
        type={type}
        name={name}
        value={value || ""}
        required={required}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`
          absolute duration-300 transform -translate-y-4 scale-75 top-2 
          z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 
          peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 
          rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 text-sm bg-white ${
            error
              ? "text-red-500 peer-focus:text-red-500"
              : "text-gray-500 peer-focus:text-black"
          }`}
      >
        {label}
      </label>
      {error && (
        <small className="text-red-500 text-xs absolute px-2">{error}</small>
      )}
    </fieldset>
  );
};

export default Input;
