import { Navigate, useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../../../hooks/useEmployeeContext";
import { FormEvent } from "react";
import { FormField, Input, Label } from "../../../components/input";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";

export function JobInfoPage() {
  const router = useNavigate();
  const { employee, updateJobInfo } = useEmployeeContext();

  if (employee.basicInfo.profession !== "jobHolder") {
    return <Navigate to={"/"} />;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      companyName: { value: string };
      designation: { value: string };
      experience: { value: string };
    };

    updateJobInfo({
      companyName: form.companyName.value.trim(),
      designation: form.designation.value.trim(),
      experience: Number(form.experience.value),
    });

    toast.success("Employee Added");
    router("/");
  }

  return (
    <>
      <div className="flex items-center gap-2 justify-center mb-10">
        <div className="h-[2px] bg-gray-600 w-20">&nbsp;</div>
        <h1 className="text-2xl font-bold mb-3 whitespace-nowrap uppercase">Job Info</h1>
        <div className="h-[2px] bg-gray-600 w-20">&nbsp;</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-5 mb-10">
          <div className="flex gap-5">
            <FormField>
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                id="company-name"
                name="companyName"
                type="text"
                placeholder="Enter Your Company Name"
                defaultValue={employee.jobInfo?.companyName}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                name="designation"
                type="text"
                placeholder="Enter Designation"
                defaultValue={employee.jobInfo?.designation}
                required
              />
            </FormField>
          </div>

          <FormField>
            <Label htmlFor="experience">Experience (Year)</Label>
            <Input
              id="experience"
              name="experience"
              type="number"
              placeholder="Enter Experience"
              defaultValue={employee.jobInfo?.experience}
              required
            />
          </FormField>
        </div>

        <div className="flex items-center">
          <div
            onClick={() => router("/add-employee/basic-info")}
            className={twMerge("button", "bg-red-600")}
          >
            Back
          </div>
          <button className={twMerge("button", "block ml-auto")}>Submit</button>
        </div>
      </form>
    </>
  );
}
