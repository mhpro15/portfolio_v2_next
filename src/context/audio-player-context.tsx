"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  RefObject,
  useRef,
} from "react";

import { tracks } from "../data/tracks";
import { StaticImageData } from "next/image";

export interface Track {
  title: string;
  src: string;
  author: string;
  thumbnail?: StaticImageData;
}

interface AudioPlayerContextType {
  currentTrack: Track;
  setCurrentTrack: Dispatch<SetStateAction<Track>>;
  timeProgress: number;
  setTimeProgress: Dispatch<SetStateAction<number>>;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
  setTrackIndex: Dispatch<SetStateAction<number>>;
  audioRef: RefObject<HTMLAudioElement | null>;
  progressBarRef: RefObject<HTMLInputElement | null>;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [trackIndex, setTrackIndex] = useState<number>(0);

  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);

  const contextValue = {
    currentTrack,
    setCurrentTrack,
    audioRef,
    progressBarRef,
    timeProgress,
    setTimeProgress,
    duration,
    setDuration,
    setTrackIndex,
    isPlaying,
    setIsPlaying,
  };

  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = (): AudioPlayerContextType => {
  const context = useContext(AudioPlayerContext);

  if (context === undefined) {
    throw new Error(
      "useAudioPlayerContext must be used within an AudioPlayerProvider"
    );
  }

  return context;
};
