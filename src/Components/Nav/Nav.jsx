import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="bg-slate-100 border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
          {/* logo */}
          <Link to={""} className="flex items-center text-xl text-nowrap font-bold">
            <img src={logo} alt="logo" className="w-[30px] me-1 " />
            Ahmed Ekramy
          </Link>
          
          {/* links */}
          <div className="">
            <ul className="font-bold flex">
              
              <li>
                <NavLink
                  to={"/projects"}
                  className="block text-gray-900 md:px-2 md:py-1 px-1 py-0.5 rounded-lg md:me-2 me-1 border border-blue-700 md:border-0"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"skills"}
                  className="block text-gray-900 md:px-2 md:py-1 px-1 py-0.5 rounded-lg border border-blue-700 md:border-0"
                >
                  Skills
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
