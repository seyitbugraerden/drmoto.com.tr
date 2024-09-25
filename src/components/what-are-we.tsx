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
        <p className="text-center text-black/50 text-md lg:text-2xl mx-auto lg:w-1/2 leading-relaxed">
          Kaliteli işçilik ve müşteri memnuniyetini ön planda tutarak,
          motosikletinizin her türlü bakım ve onarım işini profesyonelce
          yapıyoruz.
        </p>
        <div className="grid lg:grid-cols-2 gap-24 pt-24">
          <div>
            <Image
              src="https://www.advrider.com/wp-content/uploads/2023/02/2023-Kawasaki-ZX4RR-1-20-scaled.jpg"
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
              src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2022/12/resize_2023-ducati-streetfighter-v4.jpg"
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
              src="https://i.pinimg.com/originals/98/85/c6/9885c6b18db9a9b7fc28b33f285b5f9c.jpg"
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
              src="https://images5.1000ps.net/images_bikekat/2017/177-CF_MOTO/8905-CForce_800_V2_EFI_4%C3%974_XL_DLX/013.jpg"
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
