import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-20 w-full hidden lg:block">
      <Container className="flex items-center justify-between text-white font-semibold py-12">
        <Link className="hover:opacity-60" href="/#hakkimizda">
          Hakkımızda
        </Link>
        <Link className="hover:opacity-60" href="/#starter">
          Başlıca Dr.Moto
        </Link>
        <Link href="/" content="home">
          <Image src="/logo.webp" alt="logo" width={320} height={200} />
        </Link>
        <Link className="hover:opacity-60" href="/#hizmetler">
          Hizmetlerimiz
        </Link>
        <Link className="hover:opacity-60" href="/#iletisim">
          İletişim
        </Link>
      </Container>
    </header>
  );
};

export default Header;
