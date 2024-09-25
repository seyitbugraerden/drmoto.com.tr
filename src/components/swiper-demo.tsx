"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SwiperDemo = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      typeof swiperRef.current.params.navigation === "object" &&
      prevRef.current &&
      nextRef.current
    ) {
      const navigation = swiperRef.current.params.navigation;
      if (navigation) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, []);

  return (
    <div className="relative w-screen h-[70dvh] lg:h-screen overflow-hidden border-b-4 border-b-black/70">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }} // navigation ayarı burada yapılıyor
        effect="fade"
        className="w-full h-full"
      >
        <SwiperSlide className="relative">
          <Image
            src="/bg1.webp"
            alt="Slider One"
            width={1920}
            height={1080}
            className="brightness-50 w-screen h-full lg:h-screen object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/10 -translate-y-1/2 z-20 text-white origin-center p-12">
            <h1 className="text-xl lg:text-5xl text-center font-semibold pb-8 leading-relaxed">
              Her Soruna Bir Çözüm, Her Sürüşe Güven
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/10 -translate-y-1/2 z-20 text-white origin-center p-12">
            <h1 className="text-xl lg:text-5xl text-center font-semibold pb-8 leading-relaxed">
              Her Yolda Güvenli Sürüş İçin Uzman Bakım
            </h1>
          </div>
          <Image
            src="/bg2.webp"
            alt="Slider Two"
            width={1920}
            height={1080}
            className="brightness-50 w-screen h-full lg:h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/10 -translate-y-1/2 z-20 text-white origin-center p-12">
            <h1 className="text-xl lg:text-5xl text-center font-semibold pb-8 leading-relaxed">
              Tüm Bakım ve Onarım İhtiyaçlarınız İçin Tek Adres
            </h1>
          </div>
          <Image
            src="/bg3.webp"
            alt="Slider Three"
            width={1920}
            height={1080}
            className="brightness-50 w-screen h-full lg:h-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <button
        name="left swiper"
        ref={prevRef}
        className="absolute top-1/2 left-12 transform -translate-y-1/2 bg-white rounded-full text-black z-10 p-2 cursor-pointer"
      >
        <ArrowLeft size={16} />
      </button>
      <button
        name="right swiper"
        ref={nextRef}
        className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-white rounded-full text-black z-10 p-2 cursor-pointer"
      >
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default SwiperDemo;
