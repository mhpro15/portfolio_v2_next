import React from "react";
import { Navbar } from "./components/menu/Navbar";
import { Content } from "./components/content/Content";
import { AudioPlayer } from "./components/audio/AudioPlayer";
import { AudioPlayerProvider } from "../context/audio-player-context";

export default function Home() {
  return (
    <div className="glass min-h-[1000px] text-white w-[90%] 3xl:w-[70%] max-w-[1920px] mx-auto rounded-xl bg-[#000000] my-[2%] text-sm 2xl:text-lg">
      <AudioPlayerProvider>
        <Navbar />
        <Content />
        <br />
        <AudioPlayer />
      </AudioPlayerProvider>
    </div>
  );
}
