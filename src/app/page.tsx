import AboutUs from "@/components/about-us";
import Features from "@/components/features";
import SwiperDemo from "@/components/swiper-demo";
import Header from "@/components/ui/Header";
import WhatAreWe from "@/components/what-are-we";

export default function Home() {
  return (
    <main>
      <AboutUs />
      <WhatAreWe />
      <Features />
    </main>
  );
}
