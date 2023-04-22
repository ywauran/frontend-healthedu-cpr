import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div>
        <header className="absolute py-2 top-0 z-50 bg-transparent">
          <div className="flex justify-between py-2 px-4">
            <h1 className="text-blue-700 font-bold text-center text-3xl">
              Healthedu <span className="text-blue-800">Cpr</span>
            </h1>
          </div>
        </header>
        <main>
          <section className="hero bg-center h-screen bg-no-repeat bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <div className="backdrop-blur-xl">
                <h1 className="mb-4 text-3xl md:4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                  Selamatkan Nyawa: Mengenal Resusitasi Jantung Paru yang Vital
                  dalam penanganan gawat darurat sehari-hari
                </h1>
                <p className="mb-8 text-sm md:text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                  Pelajari Langkah-Langkah Penting dan Teknik yang Efektif dalam
                  Menyelamatkan Nyawa dengan Resusitasi Jantung Paru. Mari
                  Bergabung dalam Meningkatkan Kesiapan Menghadapi Keadaan Henti
                  jantung!
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                  to={"/main"}
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Mulai
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Hero;
