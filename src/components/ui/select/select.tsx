import type { ISelect } from "./select.types";

const Select = ({
  id,
  name,
  label,
  options,
  error,
  required = false,
  defaultValue,
  value,
  ...rest
}: ISelect) => {
  return (
    <fieldset className="relative text-left w-full">
      <select
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue}
        value={value || ""}
        className={`
          block px-3 py-4 w-full rounded-lg appearance-none border 
          focus:outline-none focus:ring-0 peer text-sm text-black bg-white ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-black"
          }`}
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

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

export default Select;
