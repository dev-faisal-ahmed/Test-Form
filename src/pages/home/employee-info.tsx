import { BsFillTrash2Fill } from "react-icons/bs";
import { EmployeeType } from "../../utils/types";
import { useEmployeeContext } from "../../hooks/useEmployeeContext";
import toast from "react-hot-toast";

export function EmployeeInfo({ basicInfo, studentInfo, jobInfo }: EmployeeType) {
  const { removeEmployee } = useEmployeeContext();

  function handleRemove() {
    removeEmployee(basicInfo.email);
    toast.success("Employee Removed!");
  }

  return (
    <div className="border-2 rounded-md p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">{basicInfo.name}</h1>
          <p className="capitalize text-gray-500 text-sm">{basicInfo.stack} Developer</p>
        </div>
        <div
          onClick={handleRemove}
          className="rounded-full border-2 p-1 cursor-pointer border-red-600"
        >
          <BsFillTrash2Fill className="text-xl text-red-600" />
        </div>
      </div>

      {studentInfo ? (
        <div className="mt-2">
          <p className="flex items-center justify-between gap-4">
            <span className="font-semibold uppercase whitespace-nowrap">Email :</span>
            <span className="truncate">{basicInfo.email}</span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="font-semibold uppercase whitespace-nowrap">Institute :</span>
            <span className="truncate">{studentInfo.instituteName}</span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="font-semibold uppercase whitespace-nowrap">Degree :</span>
            <span className="truncate">{studentInfo.degreeName}</span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="font-semibold uppercase whitespace-nowrap">Dept :</span>
            <span className="truncate">{studentInfo.dept}</span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="font-semibold uppercase whitespace-nowrap">Grade :</span>
            <span className="truncate">{studentInfo.result}</span>
          </p>
        </div>
      ) : null}

      {jobInfo ? (
        <div className="mt-2">
          <p className="flex items-center justify-between gap-4">
            <span className="font-semibold uppercase whitespace-nowrap">Email :</span>
            <span className="truncate">{basicInfo.email}</span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="font-semibold uppercase whitespace-nowrap">Company :</span>
            <span className="truncate">{jobInfo.companyName}</span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="font-semibold uppercase whitespace-nowrap">Designation :</span>
            <span className="truncate">{jobInfo.designation}</span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="font-semibold uppercase whitespace-nowrap">Experience :</span>
            <span className="truncate">
              {jobInfo.experience} Year{jobInfo.experience > 1 ? "s" : ""}
            </span>
          </p>
        </div>
      ) : null}
    </div>
  );
}
