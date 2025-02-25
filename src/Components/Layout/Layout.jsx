import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function Layout() {
  return (
    <>
      <Nav />
      <div className="min-h-screen mt-20">
        <Outlet></Outlet>
      </div>
    </>
  );
}
