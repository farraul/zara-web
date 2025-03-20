"use client";

import React, { PropsWithChildren } from "react";
import Carousel from "react-multi-carousel";

const CarouselComponent = ({ children }: PropsWithChildren) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full relative mb-10">
      <Carousel
        responsive={responsive}
        swipeable
        arrows={false}
        showDots={false}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
