import React, { forwardRef } from "react";
import type { IInput } from "./input.types";

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      id,
      name,
      type = "text",
      placeholder = "",
      label,
      error,
      required = false,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <fieldset className="relative w-full text-left">
        <input
          ref={ref}
          id={id}
          placeholder={placeholder}
          className={`peer block w-full appearance-none rounded-lg border bg-white px-3 py-3 text-sm text-black focus:outline-none focus:ring-0 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          type={type}
          name={name}
          value={value || ""}
          required={required}
          onChange={onChange}
          {...props}
        />
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

Input.displayName = "Input";
export default Input;
