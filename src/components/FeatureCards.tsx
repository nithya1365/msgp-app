import { Recycle, Sprout, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Recycle,
    title: "Recycling",
    description: "Advanced recycling solutions transforming waste into valuable resources for a circular economy.",
  },
  {
    icon: Sprout,
    title: "Organic Solutions",
    description: "Converting organic waste into nutrient-rich compost, supporting sustainable agriculture.",
  },
  {
    icon: Globe,
    title: "Ecosystem",
    description: "Building a holistic ecosystem that connects waste management with environmental conservation.",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Core Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-[var(--shadow-3d)] cursor-pointer border-2 hover:border-primary/50 animate-scale-in bg-card"
              style={{
                animationDelay: `${index * 0.2}s`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="mb-6 inline-flex p-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <feature.icon size={48} className="text-primary group-hover:animate-float" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
