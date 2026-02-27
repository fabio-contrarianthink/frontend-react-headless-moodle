import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  value?: string;
  /** Input type, defaults to text */
  type?: string;
  required?: boolean;
  error?: string | boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, value, type = "text", required = false, ...props }, ref) => {
    return (
      <div>
        <label className="block text-xs text-gray-500 mb-1">
          {label} {required && "*"}
        </label>
        <input
          ref={ref}
          type={type}
          value={value}
          className={`w-full bg-gray-100 rounded-md px-3 py-2 text-gray-800 focus:outline-orange-500 ${
            props.error ? "border border-red-500" : ""
          }`}
          {...props}
        />
        {props.error && typeof props.error === "string" && (
          <p className="text-red-500 text-xs mt-1">{props.error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
