"use client";
import { hourglass } from "ldrs";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      hourglass.register();
    }
  }, []);

  const [delay, setDelay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="bg-slate-950 flex flex-col gap-12 w-screen h-screen justify-center items-center">
      <l-hourglass
        size="120"
        bg-opacity="0.1"
        speed="1.75"
        color="white"
      ></l-hourglass>
    </main>
  );
}
