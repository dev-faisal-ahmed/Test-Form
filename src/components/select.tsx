import React from "react";
import { twMerge } from "tailwind-merge";

type SelectProps = {
  name: string;
  id: string;
  className?: string;
  defaultValue?: string;
  children: React.ReactNode;
};
export function Select({ id, name, className, defaultValue, children }: SelectProps) {
  return (
    <select
      defaultValue={defaultValue}
      className={twMerge("input", "appearance-none", className)}
      id={id}
      name={name}
    >
      {children}
    </select>
  );
}

type OptionProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};
export function Option({ value, children, className }: OptionProps) {
  return (
    <option className={twMerge("", className)} value={value}>
      {children}
    </option>
  );
}
