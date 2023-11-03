import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/image/logo.png";

const RootLayout = () => {
  let Links = [
    { name: "HOME", link: "#home" },
    { name: "GALLERY", link: "/" },
    { name: "EVENT", link: "/" },
    { name: "ATTENDANCE", link: "/" },
    { name: "ABOUT US", link: "" },
  ];
  let [open, setOpen] = useState(false);
  // hamburger?.addEventListener("click", (e) => {
  //   e.hamburger.classList.add("hamburger-active");
  // });
  return (
    <>
      <div className="w-full top-0 left-0 fixed z-50 overflow-hidden bg-indigo-950">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl my-2 cursor-pointer flex items-center font-[Poppins] 
      text-white"
          >
            <span className="text-white mr-1 pt-2">
              <img
                src={logo}
                className="w-[20px] top-0 mt-[-20px]"
                alt="logo EggSys"
              />
            </span>
            EggSys
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer block md:hidden"
          >
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 fixed md:static md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 bg-white text-black" : "top-[-490px] text-white"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-lg  md:my-0 my-7">
                <a
                  href={link.link}
                  className="hover:text-slate-300 hover:underline no-underline hover:decoration-white duration-500 "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
      <footer className="w-full bottom-0 left-0 bg-black">
        <div className="flex justify-center text-white">
          <span>
          <img
                src={logo}
                className="w-[20px] "
                alt="logo EggSys"
              />
          </span>
          EggSys
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
