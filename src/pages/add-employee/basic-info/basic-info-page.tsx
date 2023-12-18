import React from "react";
import { twMerge } from "tailwind-merge";
import { FormField, Input, Label } from "../../../components/input";
import { Option, Select } from "../../../components/select";
import { useEmployeeContext } from "../../../hooks/useEmployeeContext";
import { ProfessionType, StackType } from "../../../utils/types";
import { useNavigate } from "react-router-dom";

export function BasicInfoPage() {
  const { updateBasicInfo } = useEmployeeContext();
  const route = useNavigate();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
                required
              />
            </FormField>
          </div>

          <div className="flex gap-5">
            <FormField>
              <Label htmlFor="first-name">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Enter Your Email" required />
            </FormField>

            <FormField>
              <Label htmlFor="last-name">Phone Number</Label>
              <Input
                id="phone-number"
                name="phoneNumber"
                type="number"
                placeholder="Enter Your Phone Number"
                required
              />
            </FormField>
          </div>
          <div className="flex gap-5">
            <FormField>
              <Label htmlFor="stack">FontEnd / BackEnd?</Label>
              <Select name="stack" id="stack">
                <Option value="frontEnd">FrontEnd</Option>
                <Option value="backEnd">BackEnd</Option>
                <Option value="fullStack">FullStack</Option>
              </Select>
            </FormField>

            <FormField>
              <Label htmlFor="profession">What's Your Profession?</Label>
              <Select name="profession" id="profession">
                <Option value="student">Student</Option>
                <Option value="jobHolder">Job Holder</Option>
              </Select>
            </FormField>
          </div>
        </div>

        <button className={twMerge("button", "block ml-auto")}>Next {"-->"}</button>
      </form>
    </>
  );
}
