import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gambar1 from "../../assets/image/abumida.png";
import gambar2 from "../../assets/image/putrihomecooking.jpg";
import gambar3 from "../../assets/image/jambi.png";
import gambar4 from "../../assets/image/timtelur.png";
import gambar5 from "../../assets/image/umnjuice.png";
export default function GalleryLayout() {
  const image = {};
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 525, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="flex flex-col bg-image-polkadot-carousel">
      <h1 className="text-center text-3xl font-bold underline text-violet-950 mb-9 hover:decoration-violet-500">TERIMAKASIH KEPADA</h1>
      <div>
        <Carousel responsive={responsive}>
          <div className="flex items-center h-full">
            <img src={gambar1} />
          </div>
          <div className="flex items-center h-full">
            <img src={gambar2} className="w-80" />
          </div>
          <div className="flex items-center h-full">
            <img src={gambar3} />
          </div>
          <div className="flex items-center h-full">
            <img src={gambar4} />
          </div>
          <div className="flex items-center h-full">
            <img src={gambar5} />
          </div>
          
        
        </Carousel>
      </div>
    </section>
  );
}
