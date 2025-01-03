"use client";
import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import "../../../styles/customize-progress-bar.css";
import { TrackInfo } from "./TrackInfo";
import { Controls } from "./Controls";
import { ProgressBar } from "./ProgressBar";
import { VolumeControl } from "./VolumeControl";
import { PlayList } from "./PlayList";

export const AudioPlayer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <div className="min-h-6 lg:max-h-20 bg-[#2e2d2d] flex flex-col gap-9 lg:flex-row justify-between items-center text-header-white p-[0.5rem_10px] rounded-es-xl rounded-ee-xl ">
        <TrackInfo />
        <div className="w-full flex flex-col items-center gap-1 m-auto flex-1">
          <Controls />
          <ProgressBar />
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <VolumeControl />
          <button
            onClick={() => setOpenDrawer((prev) => !prev)}
            onBlur={() =>
              setTimeout(() => {
                setOpenDrawer(false);
              }, 200)
            }
          >
            <RiMenuAddLine />
          </button>
        </div>
      </div>

      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          openDrawer ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="bg-[#4c4848] text-white max-h-72 overflow-y-auto">
          <PlayList />
        </div>
      </div>
    </div>
  );
};
