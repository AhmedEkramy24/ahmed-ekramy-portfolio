import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import NotFound from "./Components/NotFound/NotFound";
import ReactJs from "./Components/Projects/React/ReactJs";
import Js from "./Components/Projects/JS/Js";
import Bootstrap from "./Components/Projects/Bootstrap/Bootstrap";
import Style from "./Components/Projects/Style/Style";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "skills", element: <Skills /> },
      {
        path: "projects",
        element: <Projects />,
        children: [
          { path:"react", element: <ReactJs /> },
          { path: "js", element: <Js /> },
          { path: "bootstrap", element: <Bootstrap /> },
          { path: "htmlcss", element: <Style /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
