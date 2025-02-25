import React from "react";
import bootstrap from "../../../assets/projects/bootstrap.png";
import bootstrapL from "../../../assets/skills/bootstrap .png";

export default function Bootstrap() {
  return (
    <>
      <div>
        <h2 className=" mt-10 text-3xl font-bold flex gap-3 items-center">
          <i className="fa-solid fa-circle-arrow-right text-blue-700 me-3"></i>
          Bootstrap
          <img src={bootstrapL} alt="bootstrap" className="w-10"/>
        </h2>
        <div className="flex mt-5 flex-wrap items-center">
          <div className="lg:w-1/3 p-4">
            <a
              href="https://ahmedekramy24.github.io/Daniels-Bootstrap/"
              target="_blank"
            >
              <div className=" overflow-hidden rounded-lg border relative group border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={bootstrap} alt="freshCart" className="w-full" />
                <div className="p-2 border-t border-slate-300">
                  <h3 className="text-blue-700 font-bold">Daniels</h3>
                  <p className="text-slate-700">Using bootstrap components</p>
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
