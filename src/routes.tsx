// import { AboutPage } from "./pages/about/AboutPage";
import { MainPage } from "./pages/main/MainPage";

export const routes = [
  {
    path: "/",
    element: <MainPage></MainPage>,
    text: "Home",
  },
  // {
  //   path: "/about",
  //   element: <AboutPage></AboutPage>,
  //   text: "About project",
  // },
  {
    path: "/media",
    element: <MainPage></MainPage>,
    text: "Media",
  },
  {
    path: "/features",
    element: <MainPage></MainPage>,
    text: "Features",
  },
  {
    path: "/license",
    element: <MainPage></MainPage>,
    text: "License",
  },
]