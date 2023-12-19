export type StackType = "frontEnd" | "backEnd" | "fullStack" | null;
export type ProfessionType = "student" | "jobHolder" | null;

export type BasicInfoType = {
  name: string;
  email: string;
  phoneNumber: string;
  stack: StackType;
  profession: ProfessionType;
};

export type StudentInfoType = {
  instituteName: string;
  degreeName: string;
  dept: string;
  result: number;
};

export type JobInfoType = {
  companyName: string;
  designation: string;
  experience: number;
};

export type EmployeeType = {
  basicInfo: BasicInfoType;
  studentInfo?: StudentInfoType;
  jobInfo?: JobInfoType;
};

export type EmployeeContextType = {
  employee: EmployeeType;
  employees: EmployeeType[];
  updateBasicInfo(payload: BasicInfoType): void;
  addNewEmployee(employee: EmployeeType): void;
  updateStudentInfo(payload: StudentInfoType): void;
  updateJobInfo(payload: JobInfoType): void;
  clearEmployeeInfo(): void;
  removeEmployee(email: string): void;
};
