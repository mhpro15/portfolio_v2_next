"use client";

import { useContext } from "react";
import { TabContext } from "../../../context/nav-context";

export const Navbar = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Navbar must be used within a TabContextProvider");
  }

  const { currentTab, setCurrentTab } = context;
  return (
    <div className="p-5 mt-10 mb-20 xl:text-lg text-[1rem] max-[480px]:text-xs flex">
      <div className="flex flex-row gap-20 mx-auto justify-center">
        <a
          href="#experience"
          className={
            currentTab === "experience"
              ? "text-header-white border-b-2 "
              : "text-text-white "
          }
          onClick={() => setCurrentTab("experience")}
        >
          Experience
        </a>
        <a
          href="#about"
          className={
            currentTab === "about"
              ? "text-header-white border-b-2 "
              : "text-text-white "
          }
          onClick={() => setCurrentTab("about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={
            currentTab === "contact"
              ? "text-header-white border-b-2 "
              : "text-text-white "
          }
          onClick={() => setCurrentTab("contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
};
