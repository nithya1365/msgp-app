import { useEffect, useState } from "react";

const PartnersCarousel = () => {
  const [offset, setOffset] = useState(0);

  // Placeholder partner logos
  const partners = [
    { id: 1, name: "Partner 1" },
    { id: 2, name: "Partner 2" },
    { id: 3, name: "Partner 3" },
    { id: 4, name: "Partner 4" },
    { id: 5, name: "Partner 5" },
    { id: 6, name: "Partner 6" },
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
                <div className="text-center">
                  <div className="text-4xl mb-2">🤝</div>
                  <p className="text-sm font-semibold text-muted-foreground">{partner.name}</p>
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
