import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Projects() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("./react");
  }, []);

  return (
    <>
      <div className="container p-2 mt-5">
        <h1 className="text-center mt-10 text-blue-700 md:text-5xl text-4xl font-bold">
          MY PROJECTS
        </h1>
        <ul className="flex my-7 justify-center gap-1 md:gap-6 text-sm md:text-xl font-semibold md:font-bold ">
          <li>
            <NavLink className="md:px-2 md:py-1 px-1 py-0.5" to={"react"}>
              REACT.JS
            </NavLink>
          </li>
          <li>
            <NavLink className="md:px-2 md:py-1 px-1 py-0.5" to={"js"}>
              HTML+CSS+JS
            </NavLink>
          </li>
          <li>
            <NavLink className="md:px-2 md:py-1 px-1 py-0.5" to={"bootstrap"}>
              BOOTSTRAP
            </NavLink>
          </li>
          <li>
            <NavLink className="md:px-2 md:py-1 px-1 py-0.5" to={"htmlcss"}>
              HTML+CSS
            </NavLink>
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
    </>
  );
}
