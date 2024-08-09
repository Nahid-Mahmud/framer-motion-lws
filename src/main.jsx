import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import ButtonTap from "./components/ButtonTap.jsx";
import Counter from "./components/Counter.jsx";
import Images from "./components/Images.jsx";
import Keyframe from "./components/Keyframe.jsx";
import ScrollRevel from "./components/ScrollRevel.jsx";
import Simple from "./components/Simple.jsx";
import Stagger from "./components/Stagger.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/ButtonTap",
        element: <ButtonTap />,
      },
      {
        path: "/Counter",
        element: <Counter />,
      },
      {
        path: "/Images",
        element: <Images />,
      },
      {
        path: "/Keyframe",
        element: <Keyframe />,
      },
      {
        path: "/ScrollRevel",
        element: <ScrollRevel />,
      },
      {
        path: "/Simple",
        element: <Simple />,
      },
      {
        path: "/Stagger",
        element: <Stagger />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
