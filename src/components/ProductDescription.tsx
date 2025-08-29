import Image from "next/image";
import React from "react";

function ProductDescription() {

  return (
    <div className="bg-[#f5f5f5] z-20">
      <div className="mx-[30px] pt-[80px] pb-[120px]">
        <h3 className="lg:text-[64px] lg:leading-[67px] font-semibold mb-[90px] text-5xl">
          Sustainability to us means having the ability to sustain a long
          lasting relationship with our products.
        </h3>
        <div className="block space-y-10 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-[386px] mt-auto">
            <p className="text-lg leading-[24px] tracking-normal">
              We stand for a different kind of consumption. One that values
              strong relationships between people and products, built on
              durability and repairability. When you love, keep, and repair your
              BLUNT products they will reward you with reliability, confidence
              and protection for years to come.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <Image
              src="/images/Sustainabilty_intro_image_Ocean_Blue.webp"
              alt="Sustainability"
              width={500}
              height={300}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
