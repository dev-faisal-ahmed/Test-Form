import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FormField, Input, Label } from "../../../components/input";
import { Option, Select } from "../../../components/select";
import { useEmployeeContext } from "../../../hooks/useEmployeeContext";
import { ProfessionType, StackType } from "../../../utils/types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function BasicInfoPage() {
  const { updateBasicInfo, employee, employees } = useEmployeeContext();
  const route = useNavigate();
  const [error, setError] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      firstName: { value: string };
      lastName: { value: string };
      email: { value: string };
      phoneNumber: { value: string };
      stack: { value: string };
      profession: { value: string };
    };

    const basicInfo = {
      name: form.firstName.value.trim() + " " + form.lastName.value.trim(),
      email: form.email.value.trim(),
      phoneNumber: form.phoneNumber.value.trim(),
      stack: form.stack.value as StackType,
      profession: form.profession.value as ProfessionType,
    };

    for (const emp of employees) {
      if (emp.basicInfo.email === basicInfo.email) {
        toast("❌ Employee already added! Use different email address");
        setError(true);
        return;
      }
    }

    updateBasicInfo(basicInfo);

    route(
      basicInfo.profession === "student" ? "/add-employee/student-info" : "/add-employee/job-info"
    );
  }
  return (
    <>
      <div className="flex items-center gap-2 justify-center mb-10">
        <div className="h-[2px] bg-gray-600 w-20">&nbsp;</div>
        <h1 className="text-2xl font-bold mb-3 whitespace-nowrap uppercase">Basic Info</h1>
        <div className="h-[2px] bg-gray-600 w-20">&nbsp;</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-5 mb-10">
          <div className="flex gap-5">
            <FormField>
              <Label htmlFor="first-name">First Name</Label>
              <Input
                id="first-name"
                name="firstName"
                type="text"
                placeholder="Enter Your First Name"
                defaultValue={employee.basicInfo.name.split(" ")[0]}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="last-name">Last Name</Label>
              <Input
                id="last-name"
                name="lastName"
                type="text"
                placeholder="Enter Your Last Name"
                defaultValue={employee.basicInfo.name.split(" ")[1]}
                required
              />
            </FormField>
          </div>

          <div className="flex gap-5">
            <FormField>
              <Label htmlFor="first-name">Email</Label>
              <Input
                className={error ? "border-red-600" : ""}
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                defaultValue={employee.basicInfo.email}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="last-name">Phone Number</Label>
              <Input
                id="phone-number"
                name="phoneNumber"
                type="number"
                placeholder="Enter Your Phone Number"
                defaultValue={employee.basicInfo.phoneNumber}
                required
              />
            </FormField>
          </div>
          <div className="flex gap-5">
            <FormField>
              <Label htmlFor="stack">FontEnd / BackEnd?</Label>
              <Select defaultValue={employee.basicInfo.stack || "frontEnd"} name="stack" id="stack">
                <Option value="frontEnd">FrontEnd</Option>
                <Option value="backEnd">BackEnd</Option>
                <Option value="fullStack">FullStack</Option>
              </Select>
            </FormField>

            <FormField>
              <Label htmlFor="profession">What's Your Profession?</Label>
              <Select
                defaultValue={employee.basicInfo.profession || "student"}
                name="profession"
                id="profession"
              >
                <Option value="student">Student</Option>
                <Option value="jobHolder">Job Holder</Option>
              </Select>
            </FormField>
          </div>
        </div>
        <div className="flex items-center">
          <div onClick={() => route("/")} className={twMerge("button", "bg-red-600")}>
            Back
          </div>
          <button className={twMerge("button", "block ml-auto")}>Next</button>
        </div>
      </form>
    </>
  );
}
