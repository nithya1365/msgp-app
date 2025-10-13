import { useEffect, useState } from "react";
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
  const [offset, setOffset] = useState(0);

  // Partner logos
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

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % (partners.length * 200));
    }, 3000);
    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Partners</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-1000"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-card rounded-xl shadow-lg flex items-center justify-center hover:brightness-110 transition-all duration-300 hover:scale-105 border border-border"
              >
                <div className="text-center px-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="mx-auto max-h-16 max-w-[140px] object-contain"
                  />
                  {partner.id > 10 && (
                    <p className="mt-2 text-xs font-semibold text-muted-foreground truncate">{partner.name}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
