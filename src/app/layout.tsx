import Header from "@/components/ui/Header";
import "./globals.css";
import "ldrs/ring";
import Transition from "@/components/transition";
import Contact from "@/components/contact";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" dir="ltr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="motosiklet servisi, motosiklet tamiri, motosiklet bakımı, Ankara motosiklet servisi"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Dr. Moto - Motosiklet Servisi" />
        <meta
          property="og:description"
          content="Motosiklet bakım, onarım ve tamir hizmetleri."
        />
        <meta
          property="og:image"
          content="https://www.drmoto.com.tr/favicon.ico"
        />
        <meta
          name="twitter:image"
          content="https://www.drmoto.com.tr/favicon.ico"
        />
        <meta property="og:url" content="https://www.drmoto.com.tr/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Moto - Motosiklet Servisi" />
        <meta
          name="twitter:description"
          content="Motosiklet bakım, onarım ve tamir hizmetleri."
        />
        <meta
          name="description"
          content="Dr. Moto, motosiklet bakım ve onarım hizmetlerinde uzman. Kaliteli işçilik ve güvenilir servis."
        />
        <title>Dr. Moto - Motosiklet Tamir ve Servis Hizmetleri | Ankara</title>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="max-w-screen overflow-x-hidden">
        <Analytics />
        <Header />
        <Transition />
        {children}
        <Contact />
      </body>
    </html>
  );
}
