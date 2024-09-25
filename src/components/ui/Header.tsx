import React from "react";
import Container from "./Container";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute z-20 w-full hidden lg:block">
      <Container className="flex items-center justify-between text-white font-semibold py-12">
        <a className="hover:opacity-60" href="/#hakkimizda">
          Hakkımızda
        </a>
        <a className="hover:opacity-60" href="/#starter">
          Başlıca Dr.Moto
        </a>
        <Image src="/logo.webp" alt="logo" width={320} height={200} />
        <a className="hover:opacity-60" href="/#hizmetler">
          Hizmetlerimiz
        </a>
        <a className="hover:opacity-60" href="/#iletisim">
          İletişim
        </a>
      </Container>
    </header>
  );
};

export default Header;
