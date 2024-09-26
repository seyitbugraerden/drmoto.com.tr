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
          content="Dr. Moto, motosikletinizin fren ve süspansiyon sistemlerini titizlikle kontrol eder. Güvenli ve konforlu sürüş için uzman ekibimizle iletişime geçin!"
        />
        <title>Dr. Moto - Fren ve Süspansiyon Sistemleri | Ankara</title>
      </head>
      <>
        <div className="w-screen h-[30dvh] bg-black/90"></div>
        <section className="bg-[#dedede] h-full  xl:h-screen">
          <Container className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-24 h-full">
            <div id="hakkimizda" className="place-content-center">
              <h2 className="text-4xl font-semibold pb-6">
                Fren ve Süspansiyon Sistemleri
              </h2>
              <p className="text-justify text-black/50">
                <strong>Dr. Moto</strong>&apos;da motorunuzun uzun ömürlü ve
                güvenli bir şekilde çalışması için profesyonel yağ değişimi ve
                genel bakım hizmetleri sunuyoruz. Düzenli yağ değişimi, motor
                performansınızı en üst düzeyde tutarken aşınmayı en aza indirir.
                Ayrıca, genel bakım kapsamında frenlerden zincirlere,
                filtrelerden lastik basıncına kadar tüm kritik bileşenleri
                kontrol ederek sorunsuz bir sürüş deneyimi sağlamayı
                amaçlıyoruz. Motorunuzun sağlığını korumak ve her yolculukta
                maksimum verim alabilmek için, Dr. Moto&apos;da titizlikle
                gerçekleştirilen bu bakımları ihmal etmeyin.
              </p>
              <ul className="list-disc mt-2">
                <li className="text-black/50">Fren Sistemi Kontrolü</li>
                <li className="text-black/50">
                  Süspansiyon ve Amortisör Kontrolü
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
