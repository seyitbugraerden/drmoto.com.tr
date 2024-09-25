import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <div>
      <div className="bg-[#dedede] px-2 py-24 lg:h-screen">
        <div id="hizmetlerimiz" className="mx-auto max-w-6xl">
          <h1 className="text-4xl text-black font-semibold text-center pb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-center text-black/50 text-md lg:text-2xl mx-auto lg:w-1/2 leading-relaxed">
            Kaliteli işçilik ve müşteri memnuniyetini ön planda tutarak,
            motosikletinizin her türlü bakım ve onarım işini profesyonelce
            yapıyoruz.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 py-12">
            <Link
              href="/yag-ve-genel-bakim"
              className="h-36 sm:h-56 flex flex-col justify-center border border-black/70 rounded-xl text-center p-4 md:p-5 hover:bg-black/70 group bg-white/30 cursor-pointer"
            >
              <div className="flex justify-center items-center size-12   rounded-lg mx-auto">
                <svg
                  className="shrink-0 size-7  text-black/70 group-hover:text-white !duration-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              </div>

              <div className="mt-3">
                <h3 className="text-sm sm:text-lg font-semibold  text-black/70 group-hover:text-white">
                  Yağ ve Bakım İşlemleri
                </h3>
              </div>
            </Link>
            <Link
              href="/motor-revizyon"
              className="h-36 sm:h-56 flex flex-col justify-center border border-black/70 rounded-xl text-center p-4 md:p-5 hover:bg-black/70 group bg-white/30 cursor-pointer"
            >
              <div className="flex justify-center items-center size-12   rounded-lg mx-auto">
                <svg
                  className="shrink-0 size-7 !duration-0 text-black/70 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              </div>

              <div className="mt-3">
                <h3 className="text-sm sm:text-lg font-semibold text-black/70 group-hover:text-white">
                  Motor Revizyon İşlemleri
                </h3>
              </div>
            </Link>
            <Link
              href="/elektrik-tesisat"
              className="h-36 sm:h-56 flex flex-col justify-center border border-black/70 rounded-xl text-center p-4 md:p-5 hover:bg-black/70 group bg-white/30 cursor-pointer"
            >
              <div className="flex justify-center items-center size-12   rounded-lg mx-auto">
                <svg
                  className="shrink-0 size-7 group-hover:text-white text-black/70 !duration-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              </div>

              <div className="mt-3">
                <h3 className="text-sm sm:text-lg font-semibold group-hover:text-white text-black/70 ">
                  Elektrik ve Tesisat Çözümleri
                </h3>
              </div>
            </Link>
            <Link
              href="/ariza-tespit"
              className="h-36 sm:h-56 flex flex-col justify-center border border-black/70 rounded-xl text-center p-4 md:p-5 hover:bg-black/70 group bg-white/30 cursor-pointer"
            >
              <div className="flex justify-center items-center size-12   rounded-lg mx-auto">
                <svg
                  className="shrink-0 size-7 group-hover:text-white text-black/70 !duration-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              </div>

              <div className="mt-3">
                <h3 className="text-sm sm:text-lg font-semibold group-hover:text-white text-black/70 ">
                  Arıza Tespit İşlemleri
                </h3>
              </div>
            </Link>
            <Link
              href="/fren-ve-suspansiyon"
              className="h-36 sm:h-56 flex flex-col justify-center border border-black/70 rounded-xl text-center p-4 md:p-5 hover:bg-black/70 group bg-white/30 cursor-pointer"
            >
              <div className="flex justify-center items-center size-12   rounded-lg mx-auto">
                <svg
                  className="shrink-0 size-7 group-hover:text-white text-black/70 !duration-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              </div>

              <div className="mt-3">
                <h3 className="text-sm sm:text-lg font-semibold group-hover:text-white text-black/70 ">
                  Fren ve Süspansiyon Sistemleri
                </h3>
              </div>
            </Link>
            <Link
              href="/yakit-ve-egzoz"
              className="h-36 sm:h-56 flex flex-col justify-center border border-black/70 rounded-xl text-center p-4 md:p-5 hover:bg-black/70 group bg-white/30 cursor-pointer"
            >
              <div className="flex justify-center items-center size-12   rounded-lg mx-auto">
                <svg
                  className="shrink-0 size-7 group-hover:text-white text-black/70 !duration-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              </div>

              <div className="mt-3">
                <h3 className="text-sm sm:text-lg font-semibold group-hover:text-white text-black/70 ">
                  Yakıt ve Egzoz Sistemleri
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
