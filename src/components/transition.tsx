"use client";
import { hourglass } from "ldrs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Transition() {
  const router = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      hourglass.register();
    }
  }, []);
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setIsDone(false);
    if (router !== "/") {
      setTimeout(() => {
        setIsDone(true);
      }, 1500);
    }
    if (router === "/") {
      setTimeout(() => {
        setIsDone(true);
      }, 1500);
    }
  }, [router]);
  return (
    <main
      className={`bg-black/70 backdrop-blur-lg flex flex-col gap-12 w-screen h-screen justify-center items-center fixed top-0 left-0 z-[99] duration-300 ${
        isDone && "opacity-0 z-0 pointer-events-none"
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
