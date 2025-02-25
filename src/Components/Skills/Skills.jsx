import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import bootstrap from "../../assets/skills/bootstrap .png";
import react from "../../assets/skills/react.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";
import next from "../../assets/skills/next-js.svg";
import sass from "../../assets/skills/sass.png";
import typescript from "../../assets/skills/typescript.png";
import tailwind from "../../assets/skills/Tailwind CSS.png";

export default function Skills() {
  return (
    <>
      <h1 className="text-center mt-10 text-blue-700 md:text-5xl text-4xl font-bold">
        MY SKILLS
      </h1>
      <div className="container p-2 flex flex-wrap">
        <div className="html lg:w-1/3  md:w-1/2 p-4 w-full my-5">
          <h3 className="flex gap-3 my-2 font-bold text-lg items-center">
            HTML & CSS
            <img src={html} alt="html" className="w-[30px]" />
            <img src={css} alt="css" className="w-[30px]" />
          </h3>
          <div className="bg-slate-300 rounded-md ">
            <div className="py-3 bg-blue-700 w-[95%] relative rounded-md">
              <span className="num right-0 translate-x-4">95%</span>
            </div>
          </div>
        </div>

        <div className="bootstrap lg:w-1/3  md:w-1/2 p-4 w-full my-5">
          <h3 className="flex gap-3 my-2 font-bold text-lg items-center">
            BOOTSTRAP
            <img src={bootstrap} alt="js" className="w-[30px]" />
          </h3>
          <div className="bg-slate-300 rounded-md ">
            <div className="py-3 bg-blue-700 w-[95%] relative rounded-md">
              <span className="num right-0 translate-x-4">95%</span>
            </div>
          </div>
        </div>

        <div className="js lg:w-1/3  md:w-1/2 p-4 w-full my-5">
          <h3 className="flex gap-3 my-2 font-bold text-lg items-center">
            JAVASCRIPT
            <img src={js} alt="js" className="w-[30px]" />
          </h3>
          <div className="bg-slate-300 rounded-md ">
            <div className="py-3 bg-blue-700 w-[85%] relative rounded-md">
              <span className="num right-0 translate-x-4">85%</span>
            </div>
          </div>
        </div>

        <div className="git lg:w-1/3  md:w-1/2 p-4 w-full mb-5">
          <h3 className="flex gap-3 my-2 font-bold text-lg items-center">
            GIT & GITHUB
            <img src={git} alt="js" className="w-[30px]" />
            <img src={github} alt="js" className="w-[30px]" />
          </h3>
          <div className="bg-slate-300 rounded-md ">
            <div className="py-3 bg-blue-700 w-[80%] relative rounded-md">
              <span className="num right-0 translate-x-4">80%</span>
            </div>
          </div>
        </div>

        <div className="react lg:w-1/3  md:w-1/2 p-4 w-full mb-5">
          <h3 className="flex gap-3 my-2 font-bold text-lg items-center">
            REACT.JS
            <img src={react} alt="js" className="w-[30px]" />
          </h3>
          <div className="bg-slate-300 rounded-md ">
            <div className="py-3 bg-blue-700 w-[90%] relative rounded-md">
              <span className="num right-0 translate-x-4">90%</span>
            </div>
          </div>
        </div>

        <div className="sass lg:w-1/3  md:w-1/2 p-4 w-full mb-5">
          <h3 className="flex gap-3 my-2 font-bold text-lg items-center">
            SASS
            <img src={sass} alt="next" className="w-[30px]" />
          </h3>
          <div className="bg-slate-300 rounded-md ">
            <div className="py-3 bg-blue-700 w-[90%] relative rounded-md">
              <span className="num right-0 translate-x-4">90%</span>
            </div>
          </div>
        </div>

        <div className="tail lg:w-1/3  md:w-1/2 p-4 w-full mb-5">
          <h3 className="flex gap-3 my-2 font-bold text-lg items-center">
            TAILWIND CSS
            <img src={tailwind} alt="next" className="w-[30px]" />
          </h3>
          <div className="bg-slate-300 rounded-md ">
            <div className="py-3 bg-blue-700 w-[95%] relative rounded-md">
              <span className="num right-0 translate-x-4">95%</span>
            </div>
          </div>
        </div>

        <div className="type lg:w-1/3  md:w-1/2 p-4 w-full mb-5">
          <h3 className="flex gap-3 my-2 font-bold text-lg items-center">
            TYPESCRIPT
            <img src={typescript} alt="next" className="w-[30px]" />
          </h3>
          <div className="bg-slate-300 rounded-md ">
            <div className="py-3 bg-blue-700 w-[75%] relative rounded-md">
              <span className="num right-0 translate-x-4">75%</span>
            </div>
          </div>
        </div>

        <div className="next lg:w-1/3  md:w-1/2 p-4 w-full mb-5">
          <h3 className="flex gap-3 my-2 font-bold text-lg items-center">
            NEXT.JS
            <img src={next} alt="next" className="w-[30px]" />
          </h3>
          <div className="bg-slate-300 rounded-md ">
            <div className="py-3 bg-blue-700 w-[70%] relative rounded-md">
              <span className="num right-0 translate-x-4">70%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
