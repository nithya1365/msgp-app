import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Recycling",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
    description:
      "Transforming waste into valuable resources through innovative recycling for a circular economy.",
  },
  {
    title: "Organic Solutions",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400",
    description:
      "Turning organic waste into nutrient-rich compost to sustain healthy agriculture.",
  },
  {
    title: "Ecosystem",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    description:
      "Connecting waste management, communities, and nature into one thriving, sustainable ecosystem.",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Core Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-12 justify-items-center">
          {features.map((f, i) => (
            <Card
              key={i}
              className="feature-card group relative w-[300px] h-[240px] cursor-pointer border border-border 
                         transition-all duration-500 ease-in-out hover:w-[320px] hover:h-[340px] p-6 flex flex-col items-center justify-center"
            >
              <div className="feature-border border-primary"></div>

              {/* Minimal initial view */}
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0">
                <h3 className="text-lg uppercase tracking-[6px] text-primary font-medium transition-all duration-300 group-hover:tracking-[2px]">
                  {f.title}
                </h3>
              </div>

              {/* Revealed content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 p-6">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-20 h-20 object-cover mb-4 rounded-full border border-primary/40"
                />
                <h4 className="text-xl font-semibold mb-2 text-primary">
                  {f.title}
                </h4>
                <p className="text-sm text-muted-foreground text-center px-4 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;