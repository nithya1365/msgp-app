import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images - in production, these would be real facility photos
  const images = [
    { id: 1, category: "Facilities" },
    { id: 2, category: "Awareness" },
    { id: 3, category: "Products" },
    { id: 4, category: "Facilities" },
    { id: 5, category: "Products" },
    { id: 6, category: "Awareness" },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>

        {/* 3D Carousel */}
        <div className="relative h-96 perspective-1000">
          <div className="relative h-full flex items-center justify-center">
            {images.map((image, index) => {
              const offset = (index - currentIndex + images.length) % images.length;
              const isCenter = offset === 0;
              
              return (
                <div
                  key={image.id}
                  className={`absolute transition-all duration-500 cursor-pointer ${
                    isCenter ? "z-20 scale-110" : "z-10 scale-75 opacity-50"
                  }`}
                  style={{
                    transform: `translateX(${(offset - 1) * 300}px) rotateY(${(offset - 1) * 20}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="w-80 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl shadow-[var(--shadow-3d)] overflow-hidden group hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground group-hover:scale-110 transition-transform duration-300">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🖼️</div>
                        <p className="text-lg font-semibold">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30"
            onClick={prevSlide}
          >
            <ChevronLeft size={32} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30"
            onClick={nextSlide}
          >
            <ChevronRight size={32} />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
