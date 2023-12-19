import React from "react";
import { twMerge } from "tailwind-merge";

type FormFieldProps = {
  children: React.ReactNode;
  className?: string;
};
export function FormField({ children, className }: FormFieldProps) {
  return <div className={twMerge("space-y-3 w-full", className)}>{children}</div>;
}

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
};

export function Label({ children, htmlFor, className }: LabelProps) {
  return (
    <label className={twMerge("font-semibold", className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

type InputProps = {
  placeholder: string;
  name: string;
  id: string;
  type: "text" | "number" | "email";
  className?: string;
  defaultValue?: string | number;
  required?: boolean;
  step?: number;
};

export function Input({
  id,
  placeholder,
  name,
  type,
  className,
  defaultValue,
  required,
  step,
}: InputProps) {
  return (
    <input
      className={twMerge("input", className)}
      id={id}
      type={type}
      step={step}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
    />
  );
}
