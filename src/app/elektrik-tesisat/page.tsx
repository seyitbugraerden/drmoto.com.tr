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
          content="Dr. Moto, motosikletinizin elektrik ve tesisat sorunlarını profesyonelce çözümlerle giderir. Güç ve güvenlik için bizimle iletişime geçin!"
        />
        <title>Dr. Moto - Elektrik ve Tesisat Çözümleri | Ankara</title>
      </head>
      <>
        <div className="w-screen h-[30dvh] bg-black/90"></div>
        <section className="bg-[#dedede] h-full  xl:h-screen">
          <Container className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-24 h-full">
            <div id="hakkimizda" className="place-content-center">
              <h2 className="text-4xl font-semibold pb-6">
                Elektrik ve Tesisat Çözümleri
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
                <li className="text-black/50">Akü Kontrolü ve Şarj Durumu</li>
                <li className="text-black/50">Alternatör ve Statör Kontrolü</li>
                <li className="text-black/50">Sigorta ve Röle Kontrolleri</li>
                <li className="text-black/50">
                  Kısa Devre ve Kaçak Akım Kontrolü
                </li>
                <li className="text-black/50">
                  Farlar, Sinyaller ve Aydınlatma Kontrolü
                </li>
                <li className="text-black/50">Kablo Tesisatının Kontrolü</li>
                <li className="text-black/50">Ateşleme Sistemi Kontrolü</li>
                <li className="text-black/50">
                  Elektronik Kontrol Ünitesi (ECU) Testi
                </li>
                <li className="text-black/50">
                  Kontakt Anahtarı ve İmmobilizer Kontrolü
                </li>
                <li className="text-black/50">Debriyaj ve Volan Kontrolü</li>
                <li className="text-black/50">
                  Elektrikli Aksesuarların Kontrolü
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
