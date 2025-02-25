import React from "react";
import freshCart from "../../../assets/projects/freshCart.png";
import SPA from "../../../assets/projects/SPA.png";
import note from "../../../assets/projects/note.png";
import react from "../../../assets/skills/react.png";

export default function ReactJs() {
  return (
    <>
      <div>
        <h2 className=" mt-10 text-3xl font-bold flex gap-3 items-center">
          <i className="fa-solid fa-circle-arrow-right text-blue-700 me-3"></i>
          react.js
          <img src={react} alt="react" className="w-10" />
        </h2>
        <div className="flex mt-5 justify-around  flex-wrap">
          <div className="lg:w-1/3 p-4">
            <a
              href="https://ahmedekramy24.github.io/FreshCart-E-commerce-app/"
              target="_blank"
            >
              <div className=" overflow-hidden rounded-lg border relative group border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={freshCart} alt="freshCart" className="w-full" />
                <div className="p-2 border-t border-slate-300">
                  <h3 className="text-blue-700 font-bold">
                    FreshCart E-commerce app
                  </h3>
                  <p className="text-slate-700">
                    Graduation project from route academy
                  </p>
                </div>
                <span className="size-7 -bottom-5 -right-5 opacity-0 group-hover:bottom-1 duration-300 group-hover:right-1 group-hover:opacity-100 grou rounded-md bg-blue-700 text-white flex justify-center items-center absolute">
                  <i className="fa-solid fa-link"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="lg:w-1/3 p-4 ">
            <a
              href="https://ahmedekramy24.github.io/Notes-App-Arabic/"
              target="_blank"
            >
              <div className="overflow-hidden relative group rounded-lg border border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={note} alt="freshCart" className="w-full" />
                <div className="p-2 border-slate-300">
                  <h3 className="text-blue-700 font-bold">Note app</h3>
                  <p className="text-slate-700">Note app with arabic (مهامي)</p>
                </div>
                <span className="size-7 -bottom-5 -right-5 opacity-0 group-hover:bottom-1 duration-300 group-hover:right-1 group-hover:opacity-100 grou rounded-md bg-blue-700 text-white flex justify-center items-center absolute">
                  <i className="fa-solid fa-link"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="lg:w-1/3 p-4">
            <a
              href="https://ahmedekramy24.github.io/Example-of-SPA/#/"
              target="_blank"
            >
              <div className=" overflow-hidden relative group rounded-lg border border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={SPA} alt="freshCart" className="w-full" />
                <div className="p-2">
                  <h3 className="text-blue-700 font-bold">Example of SPA</h3>
                  <p className="text-slate-700">
                    Example of single page application
                  </p>
                </div>
                <span className="size-7 -bottom-5 -right-5 opacity-0 group-hover:bottom-1 duration-300 group-hover:right-1 group-hover:opacity-100 grou rounded-md bg-blue-700 text-white flex justify-center items-center absolute">
                  <i className="fa-solid fa-link"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
