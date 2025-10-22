import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import vidhan from "@/assets/vidhan.png";
import trash from "@/assets/trash.png";

const slides = [
  {
    image: vidhan,
    quote: "Meeting Solid Waste Management needs",
  },
  {
    image: trash,
    quote: "Turning life-threatening waste into enlivening",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const vidhanRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Removed automatic carousel timer - only manual navigation

  useEffect(() => {
    const currentImage = document.querySelector(`[data-slide="${currentSlide}"] img`);
    const currentText = document.querySelector(`[data-slide="${currentSlide}"] .slide-text`);
    
    if (currentImage && currentText) {
      // Reset positions
      gsap.set(currentImage, { y: "-100%", opacity: 1 });
      gsap.set(currentText, { y: "100%", opacity: 1 });

      // Animate current image sliding down from top
      gsap.to(currentImage, {
        y: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          // Text slides up from bottom after image is in position
          gsap.to(currentText, {
            y: 0,
            duration: 1.5,
            ease: "power2.out"
          });
        }
      });
    }
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-primary opacity-20 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
            size={40}
          />
        ))}
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          data-slide={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent/40" />
          
          {/* Image sliding down */}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`absolute left-1/2 -translate-x-1/2 object-cover z-10 ${
              index === 1 ? "w-1/2 h-0.7 top-15 bottom-20" : "w-3/4 h-full top-24"
            }`}
          />
          
          {/* Content emerging from behind (placed behind the image) */}
          <div className="slide-text absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
            <div className="text-center px-4 -mt-6 md:-mt-[210px]">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight font-serif uppercase tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                {slide.quote}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft size={32} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight size={32} />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
