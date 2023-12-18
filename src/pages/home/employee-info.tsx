import { EmployeeType } from "../../utils/types";

export function EmployeeInfo({ basicInfo, studentInfo, jobInfo }: EmployeeType) {
  return (
    <div className="border-2 rounded-md p-5 shadow-lg">
      <h1 className="text-xl font-bold">{basicInfo.name}</h1>
      <p className="capitalize text-gray-500 text-sm">{basicInfo.stack} Developer</p>

      {studentInfo ? (
        <div className="mt-2">
          <p className="flex items-center justify-between">
            <span className="font-semibold uppercase">Institute :</span>
            <span>{studentInfo.instituteName}</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="font-semibold uppercase">Degree :</span>
            <span>{studentInfo.degreeName}</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="font-semibold uppercase">Dept :</span>
            <span>{studentInfo.dept}</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="font-semibold uppercase">Grade :</span>
            <span>{studentInfo.result}</span>
          </p>
        </div>
      ) : null}

      {jobInfo ? (
        <div className="mt-2">
          <p className="flex items-center justify-between">
            <span className="font-semibold uppercase">Company :</span>
            <span className="truncate">{jobInfo.companyName}</span>
          </p>
          <p className="flex items-center justify-between gap-2">
            <span className="font-semibold uppercase whitespace-nowrap">Designation :</span>
            <span className="truncate">{jobInfo.designation}</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="font-semibold uppercase">Experience :</span>
            <span>
              {jobInfo.experience} Year{jobInfo.experience > 1 ? "s" : ""}
            </span>
          </p>
        </div>
      ) : null}
    </div>
  );
}
