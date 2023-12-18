import { EmployeeType } from "./types";

export function updateEmployeesToLocalStorage(data: EmployeeType[]) {
  localStorage.setItem("employees", JSON.stringify(data));
}

export function getEmployeesFromLocalStorage(): EmployeeType[] {
  return JSON.parse(localStorage.getItem("employees") as string) || [];
}
