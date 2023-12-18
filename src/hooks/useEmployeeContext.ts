import { useContext } from "react";
import { EmployeeContext } from "../context-api/employee-provider";

export function useEmployeeContext() {
  const employeeContext = useContext(EmployeeContext);
  if (!employeeContext)
    throw new Error("You are trying to use a employee context outside of aEmployeeContext");

  return employeeContext;
}
