import React from "react";
import solar from "../../../assets/projects/solar.png";
import shady from "../../../assets/projects/shady.png";
import meal from "../../../assets/projects/meal.png";
import kasper from "../../../assets/projects/kasper.png";
import leon from "../../../assets/projects/leon.png";
import html from "../../../assets/skills/html.png";
import css from "../../../assets/skills/css.png";

export default function Style() {
  return (
    <>
      <div>
        <h2 className=" mt-10 text-3xl font-bold flex gap-3 items-center">
          <i className="fa-solid fa-circle-arrow-right text-blue-700 me-3"></i>
          HTML + CSS 
          <img src={html} alt="html" className="w-[40px]"/>
          <img src={css} alt="css"   className="w-[40px]"/>
          
        </h2>
        <div className="flex mt-5 flex-wrap items-center">
          <div className="lg:w-1/3 p-4">
            <a
              href="https://ahmedekramy24.github.io/solar-system-design-with-css/"
              target="_blank"
            >
              <div className=" overflow-hidden rounded-lg border relative group border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={solar} alt="freshCart" className="w-full" />
                <div className="p-2 border-t border-slate-300">
                  <h3 className="text-blue-700 font-bold">Solar System</h3>
                  <p className="text-slate-700">Using CSS animation</p>
                </div>
                <span className="size-7 -bottom-5 -right-5 opacity-0 group-hover:bottom-1 duration-300 group-hover:right-1 group-hover:opacity-100 grou rounded-md bg-blue-700 text-white flex justify-center items-center absolute">
                  <i className="fa-solid fa-link"></i>
                </span>
              </div>
            </a>
          </div>

          <div className="lg:w-1/3 p-4 ">
            <a href=" https://ahmedekramy24.github.io/shady/" target="_blank">
              <div className="overflow-hidden relative group rounded-lg border border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={shady} alt="freshCart" className="w-full" />
                <div className="p-2 border-slate-300">
                  <h3 className="text-blue-700 font-bold">Shady</h3>
                  <p className="text-slate-700">Full design with CSS</p>
                </div>
                <span className="size-7 -bottom-5 -right-5 opacity-0 group-hover:bottom-1 duration-300 group-hover:right-1 group-hover:opacity-100 grou rounded-md bg-blue-700 text-white flex justify-center items-center absolute">
                  <i className="fa-solid fa-link"></i>
                </span>
              </div>
            </a>
          </div>

          <div className="lg:w-1/3 p-4">
            <a href="https://ahmedekramy24.github.io/mealify/" target="_blank">
              <div className=" overflow-hidden relative group rounded-lg border border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={meal} alt="freshCart" className="w-full" />
                <div className="p-2">
                  <h3 className="text-blue-700 font-bold">Mealify</h3>
                  <p className="text-slate-700">Full design with CSS</p>
                </div>
                <span className="size-7 -bottom-5 -right-5 opacity-0 group-hover:bottom-1 duration-300 group-hover:right-1 group-hover:opacity-100 grou rounded-md bg-blue-700 text-white flex justify-center items-center absolute">
                  <i className="fa-solid fa-link"></i>
                </span>
              </div>
            </a>
          </div>

          <div className="lg:w-1/3 p-4">
            <a
              href="https://ahmedekramy24.github.io/kasper_template/"
              target="_blank"
            >
              <div className=" overflow-hidden relative group rounded-lg border border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={kasper} alt="freshCart" className="w-full" />
                <div className="p-2">
                  <h3 className="text-blue-700 font-bold">Kasper</h3>
                  <p className="text-slate-700">
                    Full design with CSS
                  </p>
                </div>
                <span className="size-7 -bottom-5 -right-5 opacity-0 group-hover:bottom-1 duration-300 group-hover:right-1 group-hover:opacity-100 grou rounded-md bg-blue-700 text-white flex justify-center items-center absolute">
                  <i className="fa-solid fa-link"></i>
                </span>
              </div>
            </a>
          </div>

          <div className="lg:w-1/3 p-4">
            <a
              href="https://ahmedekramy24.github.io/leon-template/"
              target="_blank"
            >
              <div className=" overflow-hidden relative group rounded-lg border border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={leon} alt="freshCart" className="w-full" />
                <div className="p-2">
                  <h3 className="text-blue-700 font-bold">Leon</h3>
                  <p className="text-slate-700">
                    Full design with CSS
                    
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
