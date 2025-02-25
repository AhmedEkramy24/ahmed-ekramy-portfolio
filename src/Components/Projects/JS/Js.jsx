import React from "react";
import weather from "../../../assets/projects/weather.png";
import TODO from "../../../assets/projects/TODO.png";
import XO from "../../../assets/projects/XO.png";
import marker from "../../../assets/projects/marker.png";
import html from "../../../assets/skills/html.png";
import css from "../../../assets/skills/css.png";
import js from "../../../assets/skills/js.png";

export default function Js() {
  return (
    <>
      <div>
        <h2 className=" mt-10 text-3xl font-bold flex gap-3 items-center">
          <i className="fa-solid fa-circle-arrow-right text-blue-700 me-3"></i>
          HTML + CSS + JS
          <img src={html} alt="html" className="w-[40px]" />
          <img src={css} alt="html" className="w-[40px]" />
          <img src={js} alt="html" className="w-[40px]" />
        </h2>
        <div className="flex mt-5 flex-wrap items-center">
          <div className="lg:w-1/3 p-4">
            <a
              href="https://ahmedekramy24.github.io/Weather-App/"
              target="_blank"
            >
              <div className=" overflow-hidden rounded-lg border relative group border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={weather} alt="freshCart" className="w-full" />
                <div className="p-2 border-t border-slate-300">
                  <h3 className="text-blue-700 font-bold">Weather app</h3>
                  <p className="text-slate-700">Using weather API</p>
                </div>
                <span className="size-7 -bottom-5 -right-5 opacity-0 group-hover:bottom-1 duration-300 group-hover:right-1 group-hover:opacity-100 grou rounded-md bg-blue-700 text-white flex justify-center items-center absolute">
                  <i className="fa-solid fa-link"></i>
                </span>
              </div>
            </a>
          </div>

          <div className="lg:w-1/3 p-4 ">
            <a
              href="https://ahmedekramy24.github.io/To-do-app-with-login/index.html"
              target="_blank"
            >
              <div className="overflow-hidden relative group rounded-lg border border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={TODO} alt="freshCart" className="w-full" />
                <div className="p-2 border-slate-300">
                  <h3 className="text-blue-700 font-bold">
                    Smart Login and TODO app{" "}
                  </h3>
                  <p className="text-slate-700">
                    Smart login with <span className="font-bold"> JS</span>
                    then store the user data in localStorage, TODO app with
                    using API
                  </p>
                </div>
                <span className="size-7 -bottom-5 -right-5 opacity-0 group-hover:bottom-1 duration-300 group-hover:right-1 group-hover:opacity-100 grou rounded-md bg-blue-700 text-white flex justify-center items-center absolute">
                  <i className="fa-solid fa-link"></i>
                </span>
              </div>
            </a>
          </div>

          <div className="lg:w-1/3 p-4">
            <a href="https://ahmedekramy24.github.io/X-O-Game/" target="_blank">
              <div className=" overflow-hidden relative group rounded-lg border border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={XO} alt="freshCart" className="w-full" />
                <div className="p-2">
                  <h3 className="text-blue-700 font-bold">XO Game</h3>
                  <p className="text-slate-700">
                    Game logic with<span className="font-bold"> JS</span>
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
              href="https://ahmedekramy24.github.io/Book-Marker/"
              target="_blank"
            >
              <div className=" overflow-hidden relative group rounded-lg border border-slate-300 hover:border-blue-500 cursor-pointer">
                <img src={marker} alt="freshCart" className="w-full" />
                <div className="p-2">
                  <h3 className="text-blue-700 font-bold">Book Marker</h3>
                  <p className="text-slate-700">
                    Create Add Delete with
                    <span className="font-bold"> JS</span>
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
