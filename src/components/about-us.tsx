import React from "react";
import Container from "./ui/Container";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-[#dedede] h-screen">
      <Container className="py-24  grid grid-cols-2 gap-x-24 h-full">
        <div id="hakkimizda" className="place-content-center">
          <h2 className="text-4xl font-semibold pb-6">Hakkımızda</h2>
          <p className="text-justify text-black/50">
            <strong>Dr. Moto</strong> , motosikletlerinizin bakım ve onarımında
            uzmanlaşmış, müşterilerine yüksek standartlarda profesyonel hizmet
            sunmayı ilke edinmiş bir kuruluştur. Motosiklet tutkunlarının
            güvenle tercih ettiği atölyemizde, her marka ve model motosikletin
            bakım ve onarımı, en güncel teknolojiler ve ekipmanlar kullanılarak
            gerçekleştirilmektedir. <strong>Dr. Moto</strong>, işçilikte
            gösterdiği özen ve kaliteli malzemelerle motosikletinizin
            performansını en üst seviyeye çıkarmayı hedefler. <br /> <br />
            Motosikletinizin günlük bakımından, kapsamlı motor revizyonuna kadar
            geniş bir yelpazede hizmet sunuyoruz. İster rutin bakımlar, ister
            acil onarımlar olsun, uzman teknisyenlerimiz her detayı titizlikle
            ele alarak motosikletinizi güvenle yollara döndürüyor. Ayrıca,
            performans artırıcı modifikasyonlar ve orijinal yedek parça değişimi
            konularında da size yardımcı oluyoruz. <br /> <br />
            <strong>Dr. Moto</strong>, işin her aşamasında müşterilerine şeffaf
            bir yaklaşım benimser. Bu nedenle, bakım ve onarım süreçleri
            hakkında size detaylı bilgi verir, önerilerde bulunur ve sürecin her
            adımında sizi bilgilendiririz. Amacımız, sadece motosikletinizi
            onarmak değil, aynı zamanda sürüş keyfinizi artırmak ve uzun yıllar
            sorunsuz bir kullanım sağlamaktır.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            src="https://picsum.photos/1080/1080"
            alt="about-us"
            width={480}
            height={480}
            className="rounded-lg w-full origin-center scale-90 shadow-2xl shadow-black"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
