import React from "react";
import Container from "./Container";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute z-20 w-full">
      <Container className="flex items-center justify-between text-white font-semibold py-12">
        <a className="hover:opacity-60" href="/#hakkimizda">Hakkımızda</a>
        <a className="hover:opacity-60" href="#hakkimizda">Başlıca Dr.Moto</a>
        <Image src='https://static.tildacdn.info/tild3334-6261-4132-b963-316535646531/Yeni_Proje_2.png' alt='logo' width={320} height={200}/>
        <a className="hover:opacity-60" href="#hakkimizda">Hizmetlerimiz</a>
        <a className="hover:opacity-60" href="#hakkimizda">İletişim</a>
      </Container>
    </header>
  );
};

export default Header;
