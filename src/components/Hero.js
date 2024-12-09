import React from 'react';
import bouquetImage from '../asset/image.png'; // Sesuaikan path gambar

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#F4BF97] to-white h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Text Section */}
        <div className="absolute top-[90px] left-30 z-20">
          <h1 className="text-6xl font-bold font-Judson text-black">
            AKO.DEFLEUR
          </h1>
        </div>
        <div className="absolute top-[122px] left-170 z-20">
          <h1 className="text-7xl font-bold font-Judson text-white">
            FLOWER BOUQUET
          </h1>
        </div>

        {/* Rectangle Box */}
        <div
          className="absolute w-[398px] h-[428px] left-[455px] top-[135px] bg-gradient-to-b from-transparent to-[#CE5A67] rounded-[55px] z-10"
        >
          {/* Image inside the box */}
          <img
            src={bouquetImage}
            alt="Flower Bouquet"
            className="w-[10000px] h-auto mx-auto mt-4 pt-10"
          />
        </div>

        {/* Description Section */}
        <div
          className="absolute w-[259px] h-[180px] left-[895px] top-[400px] font-Judson italic font-light text-[15px] leading-[18px] text-justify text-black z-20"
        >
          Imagine a cascading symphony of colors and scents, an elegant bouquet
          composed of vibrant red roses, delicate pink peonies, and cheerful yellow
          daisies, all intertwined with lush greenery. The roses, standing as the
          focal point, symbolize passion and love, while the peonies bring a touch
          of romance and the daisies add a playful charm.
        </div>
      </div>
    </div>
  );
};

export default Hero;
