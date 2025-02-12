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
          content="Dr. Moto, motor revizyon işlemlerinde uzman ekibiyle motosikletinizin performansını yeniden kazanmasına yardımcı olur. Güvenilir ve etkili çözümler için bize danışın!"
        />
        <title>Dr. Moto - Motor Revizyon İşlemleri | Ankara</title>
      </head>
      <>
        <div className="w-screen h-[30dvh] bg-black/90"></div>
        <section className="bg-[#dedede] h-full  xl:h-screen">
          <Container className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-24 h-full">
            <div id="hakkimizda" className="place-content-center">
              <h2 className="text-4xl font-semibold pb-6">
                Motor Revizyon İşlemleri
              </h2>
              <p className="text-justify text-black/50">
                Motor revizyonu, motosikletinizin motor ömrünü uzatmanın ve
                performansını en üst düzeyde tutmanın en etkili yoludur. Dr.
                Moto’da, motorun tamamen sökülüp incelenmesi, aşınmış parçaların
                yenilenmesi ve motorun tekrar bir araya getirilmesi işlemleri
                titizlikle gerçekleştirilir. Bu sayede motorunuz fabrika çıkışı
                standartlarına uygun hale gelir ve ilk günkü gücüne kavuşur.
              </p>
              <ul className="list-disc mt-4">
                <li className="text-black/50">
                  Motorun Sökülmesi ve Parçaların Temizlenmesi
                </li>
                <li className="text-black/50">Silindir Kapak Revizyonu</li>
                <li className="text-black/50">Piston ve Segman Kontrolü</li>
                <li className="text-black/50">Yağ Kaçaklarının Kontrolü</li>
                <li className="text-black/50">
                  Krank Mili ve Yataklarının Kontrolü
                </li>
                <li className="text-black/50">Biyel Kolu ve Pimi Kontrolü</li>
                <li className="text-black/50">
                  Triger Zinciri ve Dişli Kontrolü
                </li>
                <li className="text-black/50">
                  Yağ Pompası ve Yağ Kanallarının Kontrolü
                </li>
                <li className="text-black/50">Silindir ve Segman Ölçümleri</li>
                <li className="text-black/50">Debriyaj ve Volan Kontrolü</li>
                <li className="text-black/50">
                  Motor Montajı ve Test Edilmesi
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
