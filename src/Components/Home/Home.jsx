import whatsapp from "../../assets/whatsapp.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import ahmed from "../../assets/ahmed.jpg";
import cv from "../../assets/💼 Front-end Developer CV – Ahmed Ekramy.pdf";

export default function Home() {
  return (
    <>
      <div className="container  flex gap-12 mt-16 items-center md:flex-row flex-col p-4 justify-center">
        <div className="img md:w-1/3 w-10/12 overflow-hidden rounded-full">
          <img src={ahmed} alt="ahmed's photo w-full" />
        </div>
        <div className="md:w-2/5   space-y-2 md:text-start text-center ">
          <h1 className="md:text-5xl text-2xl font-bold text-blue-700 ">
            Hello
          </h1>
          <h1 className="txtAnimation text-nowrap ">I AM </h1>
          <div className="icons w-fit space-x-3 mx-auto flex  md:mx-0">
            <a href="https://github.com/AhmedEkramy24" target="_blank">
              <img src={github} alt="github account" className="w-[40px] " />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-ekramy-12816b25a/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin account" className="w-[40px]" />
            </a>

            <a href="https://wa.me/+201147999625" target="_blank">
              <img src={whatsapp} alt="whatsapp account" className="w-[40px]" />
            </a>
            <a href="https://mailto:ekramya969@gmail.com" target="_blank">
              <img src={gmail} alt="whatsapp account" className="w-[40px]" />
            </a>
          </div>
          <a
            href={cv}
            download
            target="_blank"
            className="text-nowrap cursor-pointer text-xl px-4 py-3 hover:bg-blue-800 bg-blue-700 text-white rounded-lg block w-fit mx-auto md:mx-0 translate-y-3"
          >
            <i className="fa-solid fa-download me-2"></i>
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
