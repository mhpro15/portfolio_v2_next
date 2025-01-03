"use client";
import { createContext, useState, ReactNode } from "react";

interface TabContextType {
  currentTab: string;
  setCurrentTab: (newValue: string) => void;
}
export const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentTab, setCurrentTab] = useState<string>("experience");
  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
};
