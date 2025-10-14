import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import partner1 from "@/assets/bbmp.jpg";
import partner2 from "@/assets/bial.jpg";
import partner3 from "@/assets/brigade.png";
import partner4 from "@/assets/hal.jpg";
import partner5 from "@/assets/Coromandel.jpg";
import partner6 from "@/assets/shobha.jpg";
import partner7 from "@/assets/department-of-agriculture_1.png";
import partner8 from "@/assets/lnt.jpg";
import partner9 from "@/assets/mcf.jpg";
import partner10 from "@/assets/rdf.jpg";

const PartnersCarousel = () => {
  const partners = [
    { id: 1, name: "Partner 1", image: partner1 },
    { id: 2, name: "Partner 2", image: partner2 },
    { id: 3, name: "Partner 3", image: partner3 },
    { id: 4, name: "Partner 4", image: partner4 },
    { id: 5, name: "Partner 5", image: partner5 },
    { id: 6, name: "Partner 6", image: partner6 },
    { id: 7, name: "Partner 7", image: partner7 },
    { id: 8, name: "Partner 8", image: partner8 },
    { id: 9, name: "Partner 9", image: partner9 },
    { id: 10, name: "Partner 10", image: partner10 },
  ];

  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const cardWidth = 200; // px (approx width + gap)
  const scrollSpeed = 1; // px per frame
  const intervalMs = 16; // ~60fps

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => {
        const totalWidth = partners.length * cardWidth;
        return (prev + scrollSpeed) % totalWidth;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [partners.length]);

  // Manual controls
  const scrollLeft = () => {
    setOffset((prev) => {
      const totalWidth = partners.length * cardWidth;
      return (prev - cardWidth + totalWidth) % totalWidth;
    });
  };

  const scrollRight = () => {
    setOffset((prev) => {
      const totalWidth = partners.length * cardWidth;
      return (prev + cardWidth) % totalWidth;
    });
  };

  return (
    <section className="py-20 bg-muted relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Partners
        </h2>
        <div className="relative overflow-hidden" ref={containerRef}>
          {/* Slides container */}
          <div
            className="flex gap-8 transition-transform ease-linear"
            style={{
              transform: `translateX(-${offset}px)`,
              width: `${partners.length * 2 * cardWidth}px`,
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-card rounded-xl shadow-lg flex items-center justify-center hover:brightness-110 transition-all duration-300 hover:scale-105 border border-border"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="mx-auto max-h-16 max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white shadow"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white shadow"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
