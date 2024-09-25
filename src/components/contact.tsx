import React from "react";
import Container from "./ui/Container";
import { Instagram, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Container className="py-24 w-screen lg:h-screen">
      <div id="iletisim">
        <h1 className="text-4xl text-black font-semibold text-center pb-6">
          İletişim
        </h1>
        <p className="text-center text-black/50 text-md lg:text-2xl mx-auto lg:w-1/2 leading-relaxed">
          Motorsiklet tamiri ve bakım hizmetlerimiz için bize ulaşın
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12 py-24">
          <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.01186295056164!2d32.91546976023653!3d40.0608987020611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408209e9887f2a5f%3A0x820c8c9fee2acb5e!2sDR%20MOTO%20REPA%C4%B0R!5e0!3m2!1str!2str!4v1727302804134!5m2!1str!2str"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-8 lg:space-y-16">
            <div>
              <h3 className="mb-5 font-semibold text-black">Adres</h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <MapPin />

                  <div className="grow">
                    <p className="text-sm text-black/70">Pursaklar,Ankara</p>
                    <address className="mt-1 text-black/70">
                      Saray Fatih Mah. Ertuğrul Gazi Cad.
                      <br />
                      Çetin Sok. No:29/C
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 font-semibold text-black ">Bize Ulaşın</h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex flex-col gap-6">
                  <a
                    className="text-black flex flex-row items-center gap-3"
                    href="tel:905069963201"
                  >
                    <Phone /> +90 506 996 32 01
                  </a>
                  <a
                    className="flex flex-row gap-4"
                    href="https://www.instagram.com/dr.moto_ankara/"
                  >
                    <Instagram /> dr.moto_ankara
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
