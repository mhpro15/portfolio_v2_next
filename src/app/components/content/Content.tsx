"use client";
import { Experienece } from "../profile/Experienece";
import { Info } from "../profile/Info";
import { ProfilePicture } from "../profile/ProfilePicture";
import { useContext } from "react";
import { TabContext } from "@/context/nav-context";
import { Contact } from "../contact/Contact";

export const Content = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Navbar must be used within a TabContextProvider");
  }

  const { currentTab } = context;
  return (
    <div>
      <div
        className={
          currentTab !== "about"
            ? "flex flex-col md:flex-row mx-3 min-h-[900px] duration-500 ease-out"
            : "min-h-[900px] duration-500 ease-in"
        }
      >
        <div
          className={
            currentTab !== "about"
              ? "flex flex-col w-full md:max-w-[30%] duration-500 ease-out"
              : "w-full md:max-w-[100%] duration-500 ease-in"
          }
        >
          <div className="flex flex-col gap-5  h-full">
            <ProfilePicture />
            <Info />
          </div>
        </div>
        <div className="flex flex-col w-full md:max-w-[70%]">
          {currentTab === "contact" && <Contact />}
          {currentTab === "experience" && <Experienece />}
        </div>
      </div>
    </div>
  );
};
