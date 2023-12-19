import { FormEvent } from "react";
import { FormField, Input, Label } from "../../../components/input";
import { twMerge } from "tailwind-merge";
import { Navigate, useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../../../hooks/useEmployeeContext";
import toast from "react-hot-toast";

export function StudentInfoPage() {
  const router = useNavigate();
  const { employee, updateStudentInfo } = useEmployeeContext();

  if (employee.basicInfo.profession !== "student") {
    return <Navigate to={"/"} />;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      instituteName: { value: string };
      degreeName: { value: string };
      dept: { value: string };
      result: { value: string };
    };

    updateStudentInfo({
      instituteName: form.instituteName.value.trim(),
      degreeName: form.degreeName.value.trim(),
      dept: form.dept.value.trim(),
      result: Number(form.result.value),
    });

    toast.success("Employee Added");
    router("/");
  }

  return (
    <>
      <div className="flex items-center gap-2 justify-center mb-10">
        <div className="h-[2px] bg-gray-600 w-20">&nbsp;</div>
        <h1 className="text-2xl font-bold mb-3 whitespace-nowrap uppercase">Student Info</h1>
        <div className="h-[2px] bg-gray-600 w-20">&nbsp;</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-5 mb-10">
          <div className="flex gap-5">
            <FormField>
              <Label htmlFor="institute-name">Institute Name</Label>
              <Input
                id="institute-name"
                name="instituteName"
                type="text"
                placeholder="Enter Your Institute Name"
                defaultValue={employee.studentInfo?.instituteName}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="degree-name">Degree Name</Label>
              <Input
                id="degree-name"
                name="degreeName"
                type="text"
                placeholder="Enter Your Degree Name"
                defaultValue={employee.studentInfo?.degreeName}
                required
              />
            </FormField>
          </div>

          <div className="flex gap-5">
            <FormField>
              <Label htmlFor="dept">Department</Label>
              <Input
                id="dept"
                name="dept"
                type="text"
                placeholder="Enter Your Department"
                defaultValue={employee.studentInfo?.dept}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="result">Result</Label>
              <Input
                id="result"
                name="result"
                type="number"
                placeholder="Enter Garde"
                defaultValue={employee.studentInfo?.result}
                step={0.01}
                required
              />
            </FormField>
          </div>
        </div>

        <div className="flex">
          <div
            onClick={() => router("/add-employee/basic-info")}
            className={twMerge("button", "bg-red-500")}
          >
            Back
          </div>
          <button className={twMerge("button", "block ml-auto")}>Submit</button>
        </div>
      </form>
    </>
  );
}
