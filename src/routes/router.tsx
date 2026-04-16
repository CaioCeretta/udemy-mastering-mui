import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Section1Lessons from "../pages/Lessons/SectionOne/SectionOne";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
      path: "section-1",
      element: <Section1Lessons />
      }

    ]
  }
])

