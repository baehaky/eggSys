import React from "react";

export default function EventlLayout() {
  return (
    <section className="bg-primary/40 pb-10">
      <div id="ttl" className="flex justify-center py-5">
        <h1 className="text-xl sm:text-3xl font-bold text-white underline hover:decoration-transparent">
          WAKTU DAN TEMPAT KEGIATAN
        </h1>
      </div>
      <div className="flex justify-between items-center m-10">
        <div className="flex w-full md:flex-row flex-col">
          <div className="w-full flex flex-col justify-center gap-y-3 md:gap-y-16">
            <div className="flex w-full ">
              <span>
                <img
                  src="https://img.icons8.com/ios/50/calendar--v1.png"
                  alt="calendar--v1"
                  className="image-filter h-auto w-[20px] sm:w-[35px]"
                />
              </span>
              <h1 className="text-white text-sm md:text-xl lg:text-3xl uppercase">
                <span className="underline decoration-cyan-500 hover:decoration-cyan-800 ml-2 sm:ml-5">
                  Selasa
                </span>
                , 7 November 2023
              </h1>
            </div>
            <div className="flex w-full">
              <span>
                <img
                  src="https://img.icons8.com/ios/50/000000/time--v1.png"
                  alt="time--v1"
                  className="image-filter h-auto w-[20px] sm:w-[35px]"
                />
              </span>
              <h1 className="text-white text-sm md:text-xl lg:text-3xl uppercase">
                <span className="underline decoration-cyan-500 hover:decoration-cyan-800 ml-2 sm:ml-5">
                  14.00 - 17.00
                </span>{" "}
                WIB
              </h1>
            </div>
            <div className="flex w-full">
              <span>
                <img
                  src="https://img.icons8.com/ios/50/000000/marker--v1.png"
                  alt="marker--v1"
                  className="image-filter h-auto w-[20px] sm:w-[35px]"
                />
              </span>
              <h1 className="text-white text-sm md:text-xl lg:text-3xl uppercase">
                <span className="underline decoration-cyan-500 hover:decoration-cyan-800 ml-2 sm:ml-5">
                  Student Longue 2
                </span>
                , Gedung D Lt 15
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.228592009009!2d106.60010832342246!3d-6.2562021476332434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sMultimedia%20Nusantara%20University!5e0!3m2!1sen!2sid!4v1699157433863!5m2!1sen!2sid"
              className="h-[300px] w-[550px] lg:h-[400px] lg:w-[600px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
