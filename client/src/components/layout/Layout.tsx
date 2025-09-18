import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout(): React.ReactElement {
  return (
    <div className="min-h-screen grid grid-cols-1">
      <Sidebar />
      <div className="ml-0 px-6 py-6 lg:ml-[250px]">
        <Outlet />
      </div>
    </div>
  );
}
