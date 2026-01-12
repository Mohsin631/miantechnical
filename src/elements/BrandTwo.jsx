import React from "react";

import brand1 from "../assets/images/brand/brand-1.png";
import brand2 from "../assets/images/brand/brand-2.png";
import brand3 from "../assets/images/brand/brand-3.png";
import brand4 from "../assets/images/brand/brand-4.png";
import brand5 from "../assets/images/brand/brand-5.png";
import brand6 from "../assets/images/brand/brand-6.png";
import brand7 from "../assets/images/brand/brand-7.png";
import brand8 from "../assets/images/brand/brand-8.png";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
];

const BrandTwo = () => {
  return (
    <div className="relative overflow-hidden py-12">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full " />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full " />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* duplicate list for seamless loop */}
        {[...brands, ...brands].map((logo, i) => (
          <div
            key={i}
            className="mx-10 flex items-center justify-center"
          >
            <img
              src={logo}
              alt="Brand logo"
              className="h-14 w-auto object-contain opacity-80 transition hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandTwo;
