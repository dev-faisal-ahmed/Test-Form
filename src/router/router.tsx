import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { GlobalLayout } from "../layout/global-layout";
import { BasicInfoPage } from "../pages/add-employee/basic-info/basic-info-page";
import { StudentInfoPage } from "../pages/add-employee/student-info/student-info-page";
import { JobInfoPage } from "../pages/add-employee/job-info/job-info-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-employee",
        element: <Outlet />,
        children: [
          { path: "basic-info", element: <BasicInfoPage /> },
          { path: "student-info", element: <StudentInfoPage /> },
          { path: "job-info", element: <JobInfoPage /> },
        ],
      },
    ],
  },
]);
