"use client";
import { hourglass } from "ldrs";
import { useEffect, useState } from "react";

export default function Transition() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      hourglass.register();
    }
  }, []);
  const [isDone, setIsDone] = useState(false);
  setTimeout(() => {
    setIsDone(true);
  }, 1500);
  return (
    <main
      className={`bg-black/70 backdrop-blur-lg flex flex-col gap-12 w-screen h-screen justify-center items-center fixed top-0 left-0 z-30 duration-300 ${
        isDone && "opacity-0"
      }`}
    >
      <l-hourglass
        size="120"
        bg-opacity="0.1"
        speed="1.75"
        color="white"
      ></l-hourglass>
    </main>
  );
}
