import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout(): React.ReactElement {
  return (
    <div className="min-h-screen grid grid-cols-1">
      <Sidebar />
      <div className="max-w-6xl mx-auto w-full py-10 px-4 lg:ml-20">
        <Outlet />
      </div>
    </div>
  );
}
