import React from "react";
import aboutus from "../../assets/image/aboutus.png";
export default function AboutUs() {
  return (
    <section className="m-5">
      <div id="aboutus" className="w-full flex justify-center">
        <h1 className="text-xl sm:text-3xl font-bold text-white underline uppercase">
          Apa itu eggSys?
        </h1>
      </div>
      <div className="flex mt-10 justify-evenly flex-col md:flex-row">
        <div className="w-full sm:w-[650px] h-auto flex items-center justify-center">
          <p className="text-sm sm:text-xl text-white">
            EggSys adalah sekumpulan mahasiswa Sistem Informasi angkatan 2022
            yang Berjumlah 18 orang yang bersatu membuat sebuah acara seminar.
            Acara seminar yang dibuat EggSys merupakan seminar yang akan
            membahas salah satu peminatan Sistem Informasi, yakni Enterpris
            Resource Planning (ERP). Acara seminar ini diadakan sebagai
            salahsatu syarat untuk memenuhi tugas pada mata kuliah seminar
            information system.
          </p>
        </div>
        <div className="w-full flex justify-center rounded-t-full md:w-[560px] bg-primary">
          <img src={aboutus} className="" alt="" />
        </div>
      </div>
    </section>
  );
}
