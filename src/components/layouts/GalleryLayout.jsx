import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../data/data";
export default function GalleryLayout() {
  const images = data.map(({ link }) => link);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <section className="bg-image-polkadot-carousel py-40">
      <h1 className="text-center text-3xl font-bold underline text-violet-950 mb-9 hover:decoration-violet-500">
        TERIMAKASIH KEPADA
      </h1>
      <div>
        <Carousel responsive={responsive}>
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-full"
            >
              <img src={image} className="w-64" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
