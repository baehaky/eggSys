import React from "react";
import image from "../../assets/image/confuse.png";
import GalleryLayout from "./GalleryLayout";
import AttendeceLayout from "./AttendenceLayout";

const IndexLayout = () => {
  return (
    <>
      <main id="home">
        <div className="flex justify-center w-full h-full bg-image-polkadot lg:py-80 sm:py-56 py-72">
          <h1 className="text-white font-bold lg:text-5xl sm:text-4xl text-2xl text-center">
            <span className="block font-mono lg:text-7xl underline hover:decoration-red-500 transition delay-150 ease-out">
              Welcome!
            </span>
            EGGSYS
          </h1>
        </div>
        <div className="px-16 mt-20">
          <div className="w-full flex flex-col sm:flex-row justify-between mx-auto">
            <div className="mt-10">
              <div className="flex items-center">
                <h1 className="text-white text-center font-extrabold sm:text-lg md:text-3xl lg:text-4xl text-xl sm:text-left transition-all ease sm:stretch-normal sm:letter-sm hover:stretch-wider hover:letter-wide">
                  Enterprise Resource Planning
                </h1>
              </div>
              <div className="bg-indigo-900 bg-opacity-50 md:w-full sm:w-60 mt-5 flex items-center">
                <p className="text-white">
                  <span className="underline decoration-white hover:decoration-teal-600">
                    EggSys
                  </span>{" "}
                  hadir untuk mengedukasi mahasiswa agar dapat memahami dan
                  mengetahui fungsi ERP dalam dunia kerja. eggSys memiliki satu
                  main event yaitu acara seminar, yang akan dilaksanakan secara
                  offline yang berlokasi di Universitas Multimedia Nusantara.
                  Seminar ini, berguna untuk memberikan highlight kepada
                  pengunjung untuk mengetahui apa itu ERP. Target pengunjung
                  sebanyak 200 orang.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <div className="sm:w-[360px] md:w-[420px] lg:w-[520px]">
                <img src={image} alt="image 1" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <GalleryLayout />
      <AttendeceLayout />
    </>
  );
};

export default IndexLayout;
