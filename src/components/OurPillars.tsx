"use client";
import { ourPillars } from "@/libs/ourPillars";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function OurPillars() {

  return (
    <div className="bg-primary z-20">
      <div className="pt-[80px] pb-[120px]">
        <div>
          <h1 className="mb-[90px] text-center text-[120px] leading-[.99em]">
            Our Pillars
          </h1>
        </div>
        <div className="relative bg-secondary">
          <div className="flex h-[40px] items-center absolute right-0 bottom-0 mb-[20px] gap-[8px] pr-[20px]">
            <div className="flex gap-[30px]">
              <Image
                src="/images/left-arrow.svg"
                alt="Left Arrow"
                width={11}
                height={22}
                className="transform-[scaleX(-1)] z-40"
              />
              <Image
                src="/images/right-arrow.svg"
                alt="Right Arrow"
                width={11}
                height={22}
                className="z-40"
              />
            </div>
          </div>
          <div className=" relative overflow-hidden p-0 z-40 block">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView="auto"
              className="mx-auto relative overflow-hidden p-0 z-40 block"
            >
              {ourPillars.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-auto !m-0 !p-0 flex justify-center"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={490}
                    height={200}
                    className="mx-auto"
                  />
                  <span className="absolute top-5 right-3 text-white text-6xl font-bold px-2 py-1 rounded">
                    {index + 1}
                  </span>

                  {/* Text center */}
                  <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-normal">
                    {item.title}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPillars;
