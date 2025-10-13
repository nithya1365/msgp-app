import { useEffect, useState, useRef } from "react";
import { Trash2, BarChart3, Package, Calendar } from "lucide-react";

const stats = [
  { icon: Trash2, label: "Total Waste Handled", value: 50000, suffix: " tons" },
  { icon: BarChart3, label: "Processed Waste", value: 45000, suffix: " tons" },
  { icon: Package, label: "Compost in Stock", value: 12000, suffix: " tons" },
  { icon: Calendar, label: "Days of Operation", value: 1825, suffix: " days" },
];

const FacilityFacts = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const stepValue = stat.value / steps;
            let currentStep = 0;

            const interval = setInterval(() => {
              currentStep++;
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.min(Math.round(stepValue * currentStep), stat.value);
                return newCounts;
              });

              if (currentStep >= steps) {
                clearInterval(interval);
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="facilities" className="py-20 bg-accent text-accent-foreground relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">
          Facility Facts & MSGP Figures
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-block mb-6">
                {/* Circular progress ring */}
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="opacity-20"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - (hasAnimated ? 1 : 0))}`}
                    className="transition-all duration-2000"
                    style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary)))' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <stat.icon size={40} className="text-primary group-hover:animate-float" />
                </div>
              </div>
              <div className="text-5xl font-bold mb-2 text-primary animate-count-up">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityFacts;
