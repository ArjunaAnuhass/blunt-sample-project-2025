"use client";
import { animated, useTrail } from "@react-spring/web";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HeroImage() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    // Trigger animation on mount (after refresh or navigation)
    setPlay(true);
  }, []);

  const text = "Sustainable by design".split("");
  const trail = useTrail(text.length, {
    from: { opacity: 0, y: 50 },
    to: { opacity: play ? 1 : 0, y: play ? 0 : 50 },
    config: { tension: 200, friction: 18 },
    reverse: false,
  });

  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/Untitled_design_8.webp"
        alt="Blunt Logo"
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl lg:text-[140px] md:text-[65px] font-bold text-primary max-w-[900px] leading-[0.99em] flex flex-wrap justify-center">
          {trail.map((style, index) => (
            <animated.span
              key={index}
              style={{
                opacity: style.opacity,
                transform: style.y.to((y) => `translateY(${y}px)`),
                display: "inline-block",
              }}
            >
              {text[index] === " " ? "\u00A0" : text[index]}
            </animated.span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default HeroImage;
