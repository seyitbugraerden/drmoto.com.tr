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
          content="Dr. Moto'da motosikletiniz için kaliteli yağ ve bakım işlemleri sunuyoruz. Uzman ekibimizle güvenli ve sorunsuz sürüş deneyimi elde edin!"
        />
        <title>Dr. Moto - Yağ ve Bakım İşlemleri | Ankara</title>
      </head>
      <>
        <div className="w-screen h-[30dvh] bg-black/90"></div>
        <section className="bg-[#dedede] h-full  xl:h-screen">
          <Container className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-24 h-full">
            <div id="hakkimizda" className="place-content-center">
              <h2 className="text-4xl font-semibold pb-6">
                Yağ ve Bakım İşlemleri
              </h2>
              <p className="text-justify text-black/50">
                Motorun sağlıklı ve uzun ömürlü çalışması için düzenli yağ ve
                bakım işlemleri büyük önem taşır. Dr. Moto olarak, motor yağının
                değiştirilmesi, hava filtresi kontrolü, buji değişimi, soğutma
                sıvısı seviyelerinin kontrolü gibi tüm bakım işlemlerini
                profesyonelce gerçekleştiriyoruz. Bu işlemler sayesinde
                motorunuzun performansı artar, yakıt tasarrufu sağlanır ve
                beklenmedik arızaların önüne geçilir.
              </p>
              <ul className="list-disc mt-2">
                <li className="text-black/50">Motor Yağı Değişimi</li>
                <li className="text-black/50">Yağ Filtresi Değişimi</li>
                <li className="text-black/50">
                  Hava Filtresi Kontrolü ve Değişimi
                </li>
                <li className="text-black/50">Yağ Kaçaklarının Kontrolü</li>
                <li className="text-black/50">
                  Zincir Yağlama ve Gerginlik Ayarı
                </li>
                <li className="text-black/50">
                  Soğutma Suyu Kontrolü ve Doldurulması
                </li>
                <li className="text-black/50">
                  Fren Hidroliği Kontrolü ve Doldurulması
                </li>
                <li className="text-black/50">
                  Lastik Basıncı ve Durumu Kontrolü
                </li>
                <li className="text-black/50">Akü Kontrolü</li>
                <li className="text-black/50">
                  Genel Vida ve Bağlantı Kontrolleri
                </li>
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
