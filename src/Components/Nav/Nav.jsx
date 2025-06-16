import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!openMenu) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <>
      <nav className="bg-slate-100 border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
          {/* logo */}
          <Link
            to={""}
            className="flex items-center text-xl text-nowrap font-bold uppercase"
          >
            <img src={logo} alt="logo" className="w-[30px] me-1 " />
            Ahmed Ekramy
          </Link>

          {/* links */}
          <div className="md:block hidden">
            <ul className="font-bold flex">
              <li>
                <NavLink
                  to={"/projects"}
                  className="block text-gray-900 uppercase md:px-2 md:py-1 px-1 py-0.5 rounded-lg me-1"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"skills"}
                  className="block text-gray-900 uppercase md:px-2 md:py-1 px-1 py-0.5 rounded-lg"
                >
                  Skills
                </NavLink>
              </li>
            </ul>
          </div>

          {/* bars icon */}

          <button
            className="md:hidden block"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <i className="fas fa-bars fa-xl"></i>
          </button>

          {/* mobile links */}
          <div
            ref={menuRef}
            className={`md:hidden fixed top-0 ${
              openMenu ? "right-0" : "-right-52"
            } duration-300 bg-slate-100 p-4 h-screen w-52`}
          >
            <button
              className="absolute top-3 right-3"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <i className="fas fa-xmark-circle fa-xl text-red-600"></i>
            </button>
            <ul className="font-bold flex flex-col space-y-5 pt-10">
              <li onClick={() => setOpenMenu(!openMenu)}>
                <NavLink
                  to={"/projects"}
                  className="block uppercase text-gray-900 md:px-2 md:py-1 px-1 py-0.5 rounded-lg me-1"
                >
                  Projects
                </NavLink>
              </li>
              <li onClick={() => setOpenMenu(!openMenu)}>
                <NavLink
                  to={"skills"}
                  className="block uppercase text-gray-900 md:px-2 md:py-1 px-1 py-0.5 rounded-lg"
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
