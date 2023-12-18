import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useEmployeeContext } from "../../hooks/useEmployeeContext";
import { EmployeeInfo } from "./employee-info";

export function Home() {
  const { employees } = useEmployeeContext();

  return (
    <>
      <Link to={"/add-employee/basic-info"} className={twMerge("button", "ml-auto block w-fit")}>
        Add an Employee
      </Link>
      <div className="grid grid-cols-2 gap-5 mt-8">
        {employees.map((employee, index) => (
          <EmployeeInfo key={index} {...employee} />
        ))}
      </div>
    </>
  );
}
