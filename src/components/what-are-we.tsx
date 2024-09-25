import React from "react";
import Container from "./ui/Container";
import Image from "next/image";

const WhatAreWe = () => {
  return (
    <section className="bg-white">
      <Container className="py-24">
        <h1 className="text-4xl text-black font-semibold text-center pb-6">
          Başlıca Dr.Moto
        </h1>
        <p className="text-center text-black/50 text-2xl mx-auto w-1/2 leading-relaxed">
          Kaliteli işçilik ve müşteri memnuniyetini ön planda tutarak,
          motosikletinizin her türlü bakım ve onarım işini profesyonelce
          yapıyoruz.
        </p>
        <div className="grid grid-cols-2 gap-24 pt-24">
          <div>
            <Image
              src="https://picsum.photos/1920/1080"
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
              src="https://picsum.photos/1920/1080"
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
              src="https://picsum.photos/1920/1080"
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
              src="https://picsum.photos/1920/1080"
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
        </div>
      </Container>
    </section>
  );
};

export default WhatAreWe;
