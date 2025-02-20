import React, { forwardRef } from "react";
import type { ISelect } from "./select.types";

const Select = forwardRef<HTMLSelectElement, ISelect>(
  (
    { id, name, label, options, error, required = false, value, ...rest },
    ref,
  ) => {
    return (
      <fieldset className="relative w-full text-left">
        <select
          ref={ref}
          id={id}
          name={name}
          required={required}
          value={value}
          className={`peer block w-full appearance-none rounded-lg border bg-white px-3 py-3 text-sm text-black focus:outline-none focus:ring-0 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-black"
          }`}
          {...rest}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label
          htmlFor={id}
          className={`absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 ${
            error
              ? "text-red-500 peer-focus:text-red-500"
              : "text-gray-500 peer-focus:text-black"
          }`}
        >
          {label}
        </label>

        {error && (
          <small className="absolute px-2 text-xs text-red-500">{error}</small>
        )}
      </fieldset>
    );
  },
);

Select.displayName = "Select";
export default Select;
