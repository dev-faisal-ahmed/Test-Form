import { ReactNode, createContext, useState } from "react";
import {
  BasicInfoType,
  EmployeeContextType,
  EmployeeType,
  JobInfoType,
  StudentInfoType,
} from "../utils/types";
import {
  getEmployeesFromLocalStorage,
  updateEmployeesToLocalStorage,
} from "../utils/local-storage-helper";

export const EmployeeContext = createContext<EmployeeContextType | null>(null);

export function EmployeeProvider({ children }: { children: ReactNode }) {
  const defaultEmployeeInfo: EmployeeType = {
    basicInfo: { name: "", email: "", phoneNumber: "", stack: null, profession: null },
  };

  const [employee, setEmployee] = useState<EmployeeType>(defaultEmployeeInfo);

  const [employees, setEmployees] = useState<EmployeeType[]>(getEmployeesFromLocalStorage() || []);

  function updateBasicInfo(payload: BasicInfoType) {
    setEmployee((prevState) => ({ ...prevState, basicInfo: payload }));
  }

  function updateStudentInfo(payload: StudentInfoType) {
    addNewEmployee({ ...employee, studentInfo: payload });
    clearEmployeeInfo();
  }

  function updateJobInfo(payload: JobInfoType) {
    addNewEmployee({ ...employee, jobInfo: payload });
    clearEmployeeInfo();
  }

  function addNewEmployee(payload: EmployeeType) {
    setEmployees((prevState) => [...prevState, payload]);
    updateEmployeesToLocalStorage([...employees, payload]);
  }

  function removeEmployee(email: string) {
    const newEmployees = employees.filter((emp) => emp.basicInfo.email !== email);
    setEmployees(newEmployees);
    updateEmployeesToLocalStorage(newEmployees);
  }

  function clearEmployeeInfo() {
    setEmployee(defaultEmployeeInfo);
  }

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        employees,
        updateBasicInfo,
        updateStudentInfo,
        updateJobInfo,
        addNewEmployee,
        removeEmployee,
        clearEmployeeInfo,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
