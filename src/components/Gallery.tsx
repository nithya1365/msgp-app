import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import overview from "@/assets/company-overview.jpg";

const slides = [hero1, hero2, hero3, hero4, overview];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white pt-16 pb-36 overflow-hidden flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-900 tracking-wide">
          Nature Gallery
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Discover the beauty of sustainability 🌿
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-[64rem] mx-auto flex flex-col items-center">
        {/* 3D Carousel Stage */}
        <div className="relative h-[26rem] sm:h-[30rem] w-full flex items-center justify-center perspective-[1200px] -mt-48 sm:-mt-56 -translate-x-[9rem] sm:-translate-x-[13rem]">
          <div className="relative h-full w-full">
            {slides.map((s, i) => {
              const n = slides.length;
              const raw = (i - current + n) % n;
              const half = Math.floor(n / 2);
              const offset = raw > half ? raw - n : raw;
              const abs = Math.abs(offset);
              const translateX = offset * 170;
              const rotateY = -22 * offset;
              const scale = abs === 0 ? 1 : abs === 1 ? 0.9 : abs === 2 ? 0.8 : 0.72;
              const opacity = abs === 0 ? 1 : abs === 1 ? 0.95 : abs === 2 ? 0.85 : 0.7;
              const zIndex = 100 - abs;

              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform transition-transform duration-700 ease-out origin-center"
                  style={{
                    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                    transformStyle: "preserve-3d",
                    zIndex,
                    opacity,
                  }}
                  onClick={() => setCurrent(i)}
                >
                  <div className="w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] rounded-2xl shadow-2xl overflow-hidden border border-emerald-100 bg-emerald-50/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-shadow">
                    <img src={s} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-6 sm:px-10 -translate-y-1/2 text-emerald-700 text-4xl">
          <button
            onClick={previousSlide}
            className="bg-white/90 p-2 rounded-full shadow-md hover:bg-emerald-100 hover:scale-110 transition-all duration-300"
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/90 p-2 rounded-full shadow-md hover:bg-emerald-100 hover:scale-110 transition-all duration-300"
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-5 h-5 bg-emerald-600 shadow-[0_0_12px_2px_rgba(16,185,129,0.6)]"
                  : "w-3.5 h-3.5 bg-emerald-200 hover:bg-emerald-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
