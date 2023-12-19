import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { EmployeeProvider } from "./context-api/employee-provider";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EmployeeProvider>
      <Toaster />
      <RouterProvider router={router} />
    </EmployeeProvider>
  </React.StrictMode>
);
