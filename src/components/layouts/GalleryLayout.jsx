import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gambar1 from "../../assets/image/abumida.png";
import gambar2 from "../../assets/image/putrihomecooking.png";
import gambar3 from "../../assets/image/jambi.png";
import gambar4 from "../../assets/image/timtelur.png";
import gambar5 from "../../assets/image/umnjuice.png";
import gambar6 from "../../assets/image/ad.png";
import gambar7 from "../../assets/image/himsi.png";
import gambar8 from "../../assets/image/pendidikan.png";
import gambar9 from "../../assets/image/pointkampus.png";
export default function GalleryLayout() {
  const image = {};
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    },
  };
  return (
    <section className="bg-image-polkadot-carousel py-40">
      <h1
        id="absen"
        className="text-center text-3xl font-bold underline text-violet-950 mb-9 hover:decoration-violet-500"
      >
        TERIMAKASIH KEPADA
      </h1>
      <div>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          className=""
          containerClass={`w-full`}
          customTransition="all 30s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
          transitionDuration={1000}
        >
          <div className="flex items-center justify-center h-full">
            <img src={gambar1} className="w-64" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={gambar2} className="w-64" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={gambar3} className="w-64" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={gambar4} className="w-64" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={gambar5} className="w-64" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={gambar6} className="w-64" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={gambar7} className="w-64" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={gambar8} className="w-64" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={gambar9} className="w-64" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
