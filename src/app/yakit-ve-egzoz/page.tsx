import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      {" "}
      <head>
        <meta
          name="keywords"
          content="motosiklet servisi, motosiklet tamiri, motosiklet bakımı, Ankara motosiklet servisi"
        />
        <meta
          name="description"
          content="Dr. Moto, motosikletinizin yakıt ve egzoz sistemlerini profesyonelce optimize eder. Performans artışı ve yakıt verimliliği için bize ulaşın!"
        />
        <title>Dr. Moto - Yakıt ve Egzoz Sistemleri | Ankara</title>
      </head>
      <>
        <div className="w-screen h-[30dvh] bg-black/90"></div>
        <section className="bg-[#dedede] h-full  xl:h-screen">
          <Container className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-24 h-full">
            <div id="hakkimizda" className="place-content-center">
              <h2 className="text-4xl font-semibold pb-6">
                Yakıt ve Egzoz Sistemleri
              </h2>
              <p className="text-justify text-black/50">
                Yakıt ve egzoz sistemleri, motosikletinizin performansını
                doğrudan etkileyen unsurlardır. Dr. Moto olarak, yakıt sistemi
                temizliği, enjektör bakımı ve egzoz kontrollerini özenle
                yapıyoruz. Bu işlemler, motorun verimli çalışmasını sağlarken,
                egzoz sistemindeki olası tıkanmalar ve sorunlar giderilerek
                çevreye zararlı emisyonların önüne geçilir ve motosikletinizin
                performansı maksimize edilir.
              </p>
              <ul className="list-disc mt-4">
                <li className="text-black/50">Yakıt Sistemi Kontrolü</li>
                <li className="text-black/50">Egzoz Kontrolü</li>
              </ul>
            </div>
            <div className="relative flex justify-center items-center">
              <Image
                src="/about__us.webp"
                alt="about-us"
                width={480}
                height={480}
                className="rounded-lg w-full origin-center scale-90 shadow-2xl shadow-black"
              />
            </div>
          </Container>
        </section>
      </>
    </>
  );
};

export default page;
