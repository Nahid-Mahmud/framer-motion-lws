import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  //   scrool event change nav color
  const [scroll, setScroll] = useState(false);

  const NavIetems = [
    {
      id: 1,
      title: "ButtonTap",
      path: "/ButtonTap",
    },
    {
      id: 2,
      title: "Counter",
      path: "/Counter",
    },
    {
      id: 3,
      title: "Images",
      path: "/Images",
    },
    {
      id: 4,
      title: "Keyframe",
      path: "/Keyframe",
    },
    {
      id: 5,
      title: "ScrollRevel",
      path: "/ScrollRevel",
    },
    {
      id: 6,
      title: "Simple",
      path: "/Simple",
    },
    {
      id: 7,
      title: "Stagger",
      path: "/Stagger",
    },
  ];

  //   when scrool make nav sticky to top

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }),
    [];

  return (
    <div className={``}>
      <nav
        className={`flex justify-between transition-all duration-300 z-10 ${
          scroll ? "fixed w-full top-0" : "bg-gray-800 "
        } items-center p-5 bg-gray-900 text-slate-400`}
      >
        <h1 className="text-2xl font-bold">Framer Motion</h1>
        <ul className="flex space-x-5">
          {NavIetems.map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending text-slate-400" : isActive ? "active text-white" : ""
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
