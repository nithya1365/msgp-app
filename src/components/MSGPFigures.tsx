import { useEffect, useState, useRef } from "react";
import { Trash2, BarChart3, Package, Calendar } from "lucide-react";

const stats = [
  { icon: Trash2, label: "Total Waste Handled", value: 50000, suffix: " tons" },
  { icon: BarChart3, label: "Processed Waste", value: 45000, suffix: " tons" },
  { icon: Package, label: "Compost in Stock", value: 12000, suffix: " tons" },
  { icon: Calendar, label: "Days of Operation", value: 1825, suffix: " days" },
];

const MSGPFigures = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

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
    <section
      ref={sectionRef}
      id="facilities"
      className="py-20 bg-[#142c14] text-[#e4eb9c] relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - (i * 5), 2) + 
            Math.pow(mousePosition.y - (i * 5), 2)
          );
          const scale = Math.max(0.5, 1 - distance / 200);
          
          return (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full transition-transform duration-300"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${((i * 7) % 100)}%`,
                transform: `scale(${scale})`,
                animation: `float-random-${i % 5} ${15 + (i % 10)}s ease-in-out infinite`,
              }}
            />
          );
        })}
      </div>
      
      <style>{`
        @keyframes float-random-0 {
          0%, 100% { transform: translate(0, 0) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 0, 2) + Math.pow(mousePosition.y - 0, 2)) / 200)}); }
          25% { transform: translate(15px, -20px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 0, 2) + Math.pow(mousePosition.y - 0, 2)) / 200)}); }
          50% { transform: translate(-10px, 15px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 0, 2) + Math.pow(mousePosition.y - 0, 2)) / 200)}); }
          75% { transform: translate(20px, 10px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 0, 2) + Math.pow(mousePosition.y - 0, 2)) / 200)}); }
        }
        @keyframes float-random-1 {
          0%, 100% { transform: translate(0, 0) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 5, 2) + Math.pow(mousePosition.y - 7, 2)) / 200)}); }
          25% { transform: translate(-18px, 12px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 5, 2) + Math.pow(mousePosition.y - 7, 2)) / 200)}); }
          50% { transform: translate(22px, -15px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 5, 2) + Math.pow(mousePosition.y - 7, 2)) / 200)}); }
          75% { transform: translate(-8px, -18px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 5, 2) + Math.pow(mousePosition.y - 7, 2)) / 200)}); }
        }
        @keyframes float-random-2 {
          0%, 100% { transform: translate(0, 0) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 10, 2) + Math.pow(mousePosition.y - 14, 2)) / 200)}); }
          25% { transform: translate(12px, 18px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 10, 2) + Math.pow(mousePosition.y - 14, 2)) / 200)}); }
          50% { transform: translate(-20px, -10px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 10, 2) + Math.pow(mousePosition.y - 14, 2)) / 200)}); }
          75% { transform: translate(15px, -22px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 10, 2) + Math.pow(mousePosition.y - 14, 2)) / 200)}); }
        }
        @keyframes float-random-3 {
          0%, 100% { transform: translate(0, 0) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 15, 2) + Math.pow(mousePosition.y - 21, 2)) / 200)}); }
          25% { transform: translate(-15px, -16px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 15, 2) + Math.pow(mousePosition.y - 21, 2)) / 200)}); }
          50% { transform: translate(18px, 20px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 15, 2) + Math.pow(mousePosition.y - 21, 2)) / 200)}); }
          75% { transform: translate(-12px, 8px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 15, 2) + Math.pow(mousePosition.y - 21, 2)) / 200)}); }
        }
        @keyframes float-random-4 {
          0%, 100% { transform: translate(0, 0) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 20, 2) + Math.pow(mousePosition.y - 28, 2)) / 200)}); }
          25% { transform: translate(20px, -12px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 20, 2) + Math.pow(mousePosition.y - 28, 2)) / 200)}); }
          50% { transform: translate(-14px, 16px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 20, 2) + Math.pow(mousePosition.y - 28, 2)) / 200)}); }
          75% { transform: translate(10px, -20px) scale(${Math.max(0.5, 1 - Math.sqrt(Math.pow(mousePosition.x - 20, 2) + Math.pow(mousePosition.y - 28, 2)) / 200)}); }
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">
          MSGP Figures
        </h2>
        <div className="w-24 h-1 bg-[#e4eb9c] mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              className="text-center group animate-scale-in cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
<div className="bg-background/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 min-h-[370px]">
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
                      stroke="#E2F0A8"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - (hasAnimated ? 1 : 0))}`}
                      className="transition-all duration-2000"
                      style={{ filter: 'drop-shadow(0 0 8px #E2F0A8)' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <stat.icon 
                       size={40} 
                       className="text-[#E2F0A8] group-hover:scale-110 transition-transform duration-300" 
                     />
                  </div>
                </div>
                <div className="text-5xl font-bold mb-2 text-[#E2F0A8] animate-count-up group-hover:scale-110 transition-transform duration-300">
                  {counts[index].toLocaleString()}{stat.suffix}
                </div>
<div className={`text-lg font-medium opacity-90 ${index === 3 ? 'mt-20' : 'mt-9'}`}>
                  {stat.label}
                </div>                
                {/* Expanded content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedCard === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-primary/30 text-sm">
                    <p className="text-muted-foreground">
                      {index === 0 && "Total accumulated waste processed since operations began"}
                      {index === 1 && "Successfully treated and converted waste material"}
                      {index === 2 && "High-quality compost available for distribution"}
                      {index === 3 && "Continuous operation maintaining environmental standards"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MSGPFigures;