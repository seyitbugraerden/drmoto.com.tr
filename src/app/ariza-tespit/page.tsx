import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <head>
        <meta
          name="keywords"
          content="motosiklet servisi, motosiklet tamiri, motosiklet bakımı, Ankara motosiklet servisi"
        />
        <meta
          name="description"
          content="Dr. Moto, motosikletinizdeki arızaları hızlı ve doğru bir şekilde tespit eder. Güvenilir analizler için uzman ekibimize başvurun!"
        />
        <title>Dr. Moto - Arıza Tespit İşlemler | Ankara</title>
      </head>
      <div className="w-screen h-[30dvh] bg-black/90"></div>
      <section className="bg-[#dedede] h-full  xl:h-screen">
        <Container className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-24 h-full">
          <div id="hakkimizda" className="place-content-center">
            <h2 className="text-4xl font-semibold pb-6">
              Arıza Tespit İşlemleri
            </h2>
            <p className="text-justify text-black/50">
              Motosikletinizde beklenmedik bir sorunla karşılaştığınızda, doğru
              ve hızlı arıza tespiti büyük önem taşır. Dr. Moto’da, gelişmiş
              arıza tespit cihazlarımız ve uzman teknisyenlerimizle motor,
              elektrik, süspansiyon ve diğer tüm sistemlerdeki sorunları hızlıca
              belirleyip çözüme kavuşturuyoruz. Böylece motosikletinizin
              sorunları hızlı bir şekilde giderilir ve güvenli bir sürüş
              deneyimi sunulur.
            </p>
            <ul className="list-disc mt-2">
              <li className="text-black/50">Görsel İnceleme</li>
              <li className="text-black/50">Ses ve Titreşim Kontrolü</li>
              <li className="text-black/50">Yakıt Sistemi Kontrolü</li>
              <li className="text-black/50">Egzoz Kontrolü</li>
              <li className="text-black/50">
                Şanzıman ve Debriyaj Sistemi Kontrolü
              </li>
              <li className="text-black/50">Soğutma Sistemi Kontrolü</li>
              <li className="text-black/50">Fren Sistemi Kontrolü</li>
              <li className="text-black/50">
                Süspansiyon ve Amortisör Kontrolü
              </li>
              <li className="text-black/50">Lastik ve Jant Kontrolü</li>
              <li className="text-black/50">Zincir ve Dişlilerin Kontrolü</li>
              <li className="text-black/50">Elektrik Sistemi Kontrolü</li>{" "}
              <li className="text-black/50">Test Sürüşü</li>
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
  );
};

export default page;
