"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { sound } from "@/lib/soundService";

export interface LightingState {
  cabinLights: boolean;
  lanternLight: boolean;
  waterfallFlow: boolean;
  fireflies: boolean;
  chimneySmoke: boolean;
  twinklingStars: boolean;
  signTorches: boolean;
}

interface LightingContextType {
  lights: LightingState;
  toggleLight: (key: keyof LightingState) => void;
  setAllLights: (state: boolean) => void;
  setPreset: (preset: "all-on" | "night-stealth" | "cozy-cabin") => void;
  isAllOn: boolean;
}

const defaultLighting: LightingState = {
  cabinLights: true,
  lanternLight: true,
  waterfallFlow: true,
  fireflies: true,
  chimneySmoke: true,
  twinklingStars: true,
  signTorches: true,
};

const LightingContext = createContext<LightingContextType>({
  lights: defaultLighting,
  toggleLight: () => {},
  setAllLights: () => {},
  setPreset: () => {},
  isAllOn: true,
});

export function LightingProvider({ children }: { children: React.ReactNode }) {
  const [lights, setLights] = useState<LightingState>(defaultLighting);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mc_live_lighting");
      if (saved) {
        setLights(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("mc_live_lighting", JSON.stringify(lights));
      } catch {
        // ignore
      }
    }
  }, [lights, isLoaded]);

  const toggleLight = (key: keyof LightingState) => {
    setLights((prev) => {
      const nextVal = !prev[key];
      sound.playLeverClick(nextVal);
      return { ...prev, [key]: nextVal };
    });
  };

  const setAllLights = (state: boolean) => {
    sound.playLeverClick(state);
    setLights({
      cabinLights: state,
      lanternLight: state,
      waterfallFlow: state,
      fireflies: state,
      chimneySmoke: state,
      twinklingStars: state,
      signTorches: state,
    });
  };

  const setPreset = (preset: "all-on" | "night-stealth" | "cozy-cabin") => {
    sound.playLeverClick(true);
    if (preset === "all-on") {
      setLights({
        cabinLights: true,
        lanternLight: true,
        waterfallFlow: true,
        fireflies: true,
        chimneySmoke: true,
        twinklingStars: true,
        signTorches: true,
      });
    } else if (preset === "night-stealth") {
      setLights({
        cabinLights: false,
        lanternLight: false,
        waterfallFlow: false,
        fireflies: false,
        chimneySmoke: false,
        twinklingStars: true,
        signTorches: false,
      });
    } else if (preset === "cozy-cabin") {
      setLights({
        cabinLights: true,
        lanternLight: true,
        waterfallFlow: true,
        fireflies: true,
        chimneySmoke: true,
        twinklingStars: true,
        signTorches: false,
      });
    }
  };

  const isAllOn = Object.values(lights).every(Boolean);

  return (
    <LightingContext.Provider
      value={{ lights, toggleLight, setAllLights, setPreset, isAllOn }}
    >
      {children}
    </LightingContext.Provider>
  );
}

export function useLighting() {
  return useContext(LightingContext);
}
