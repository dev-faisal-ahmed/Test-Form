import { Outlet } from "react-router-dom";

export function GlobalLayout() {
  return (
    <main className="bg-gray-200 min-h-screen">
      <div className="h-16" />
      <div className="max-w-[900px] mx-auto bg-white text-gray-700 rounded-2xl shadow-md p-10">
        <Outlet />
      </div>
    </main>
  );
}
