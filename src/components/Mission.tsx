import { Target, Users, Lightbulb, Heart } from "lucide-react";

const missions = [
  {
    icon: Target,
    title: "Waste Collection & Processing",
    description: "Efficiently collect, segregate, and process MSW in Bengaluru, producing compost, vermi-compost, and RDF.",
  },
  {
    icon: Users,
    title: "Recycled Products & Market",
    description: "Serve farmers, agriculture departments, and fertilizer companies while promoting sustainable recycled products.",
  },
  {
    icon: Lightbulb,
    title: "Awareness & Education",
    description: "Educate communities, corporates, and schools on segregation, cleanliness, and responsible waste management.",
  },
  {
    icon: Heart,
    title: "Innovation & Pilot Projects",
    description: "Showcase recycling methods and provide proactive solutions at the MSGP Material Recovery Facility.",
  },
];


const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent via-accent/80 to-accent text-accent-foreground relative overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" className="animate-shimmer" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">Mission MSGP</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-card/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <mission.icon size={32} className="text-primary group-hover:animate-float" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{mission.title}</h3>
              <p className="text-accent-foreground/80 leading-relaxed">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
