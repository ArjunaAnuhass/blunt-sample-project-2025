import Image from "next/image";
import React from "react";

function HeroImage() {

  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/Untitled_design_8.webp"
        alt="Blunt Logo"
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl lg:text-[140px] font-bold text-primary max-w-[900px] text-center leading-[0.99em] md:text-[65px]">Sustainable by design</h1>
      </div>
    </div>
  );
}

export default HeroImage;
