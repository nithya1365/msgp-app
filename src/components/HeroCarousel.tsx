import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    image: hero1,
    quote: "Let's turn waste into worth.",
  },
  {
    image: hero2,
    quote: "Recycling today for a greener tomorrow.",
  },
  {
    image: hero3,
    quote: "Sustainability starts with responsibility.",
  },
  {
    image: hero4,
    quote: "Together, we build a cleaner planet.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 animate-slide-in">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                {slide.quote}
              </h2>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)] animate-glow"
              >
                Read More
              </Button>
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
