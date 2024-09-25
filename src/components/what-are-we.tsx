import React from "react";
import Container from "./ui/Container";
import Image from "next/image";

const WhatAreWe = () => {
  return (
    <section className="bg-white" id="starter">
      <Container className="py-24">
        <h1 className="text-4xl text-black font-semibold text-center pb-6">
          Başlıca Dr.Moto
        </h1>
        <p className="text-center text-black/50 text-md lg:text-2xl mx-auto lg:w-1/2 leading-relaxed">
          Kaliteli işçilik ve müşteri memnuniyetini ön planda tutarak,
          motosikletinizin her türlü bakım ve onarım işini profesyonelce
          yapıyoruz.
        </p>
        <div className="grid lg:grid-cols-2 gap-24 pt-24">
          <div>
            <Image
              src="/kawasaki.webp"
              alt="Brand Image"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg shadow-black"
            />
            <h2 className="text-3xl font-semibold text-black pt-6 pb-2">
              Supersports Racing
            </h2>
            <p className="text-justify text-black/50 text-md mx-auto">
              <strong>Supersport Racing</strong> motosikletler yüksek
              performansları, hız odaklı yapıları ve hassas mekanik detaylarıyla
              öne çıkar. Dr. Moto olarak, bu tür motosikletlerin ihtiyaç duyduğu
              özel bakım ve onarım işlemlerini profesyonelce gerçekleştiriyoruz
            </p>
          </div>
          <div>
            <Image
              src="/naked.webp"
              alt="Brand Image"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg shadow-black"
            />
            <h2 className="text-3xl font-semibold text-black pt-6 pb-2">
              Naked
            </h2>
            <p className="text-justify text-black/50 text-md mx-auto">
              <strong>Naked motosikletler</strong> , minimal tasarımları ve açık
              motor yapılarına rağmen, yüksek performans ve günlük kullanıma
              uygunluklarıyla dikkat çeker. Dr. Moto olarak, Naked
              motosikletlerinize özel bakım ve onarımlarda profesyonel hizmet
              sunuyoruz.
            </p>
          </div>

          <div>
            <Image
              src="/scooter.webp"
              alt="Brand Image"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg shadow-black"
            />
            <h2 className="text-3xl font-semibold text-black pt-6 pb-2">
              Scooter
            </h2>
            <p className="text-justify text-black/50 text-md mx-auto">
              <strong>Scooter motosikletler</strong>,şehir içi kullanım, kolay
              park etme ve yakıt verimliliği ile öne çıkar. Dr. Moto olarak,
              Scooter motosikletlerinize özel bakım ve onarımlar konusunda uzman
              ekibimizle hizmet sunuyoruz.
            </p>
          </div>
          <div>
            <Image
              src="/atv.webp"
              alt="Brand Image"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg shadow-black"
            />
            <h2 className="text-3xl font-semibold text-black pt-6 pb-2">ATV</h2>
            <p className="text-justify text-black/50 text-md mx-auto">
              <strong>ATV motosikletler</strong> ,zorlu arazi koşullarında üstün
              performans gösteren ve macera dolu sürüşler sunan araçlardır. Dr.
              Moto olarak, ATV’lerinizin özel bakım ve onarımlarını profesyonel
              bir şekilde gerçekleştiriyoruz.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatAreWe;
