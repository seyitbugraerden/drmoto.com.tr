import "./globals.css";
import "ldrs/ring";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Dr. Moto, motosikletlerinizin bakım ve onarımlarında uzmanlaşmış profesyonel bir hizmet sunar. Kaliteli işçilik ve hızlı çözüm garantisiyle motosikletinizin performansını artırın. Güvenilir ve deneyimli teknisyenlerimizle hizmetinizdeyiz."
        />
        <title>Dr Moto Repair</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
