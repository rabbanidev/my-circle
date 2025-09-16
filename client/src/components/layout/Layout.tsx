import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout(): React.ReactElement {
  return (
    <>
      <Sidebar />
      <div className="max-w-6xl mx-auto w-full py-10">
        <Outlet />
      </div>
    </>
  );
}
