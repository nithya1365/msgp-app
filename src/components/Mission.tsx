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
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#053725', color: '#e6ebb2ff' } as React.CSSProperties}
    >
       {/* Animated organic background patterns */}
       <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#e6ebb2ff' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: '#e6ebb2ff' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse delay-500" style={{ backgroundColor: '#e6ebb2ff' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float opacity-20"
            style={{
              backgroundColor: i % 2 === 0 ? '#e4eb9c' : '#e2f0a8',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
             Mission MSGP
           </h2>
           <div className="w-24 h-1 mx-auto rounded-full animate-shimmer" style={{ backgroundColor: '#e2f0a8' }}></div>
         </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="relative group cursor-pointer h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card content */}
              <div className="relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl border h-full flex flex-col"
                   style={{ 
                     backgroundColor: 'rgba(228, 235, 156, 0.05)',
                     borderColor: 'rgba(228, 235, 156, 0.2)'
                   }}>
                
                {/* Icon container with animated gradient */}
                <div className="mb-6 relative">
                  <div className="inline-flex p-5 rounded-2xl relative overflow-hidden transition-all duration-500 group-hover:scale-110"
                       style={{ backgroundColor: 'rgba(228, 235, 156, 0.15)' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"
                         style={{ 
                           background: 'linear-gradient(45deg, rgba(228, 235, 156, 0.2), rgba(226, 240, 168, 0.2))'
                         }}></div>
                    <mission.icon
                      size={36}
                      className="relative z-10 transition-transform duration-500 group-hover:rotate-12"
                      style={{ color: '#e6ebb2ff' }}
                    />
                  </div>
                </div>
 
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300" 
                    style={{ color: '#e6ebb2ff' }}>
                  {mission.title}
                </h3>
                
                <p
                  className="leading-relaxed transition-colors duration-300 flex-grow"
                  style={{ color: '#e6ebb2ff', opacity: 0.85 }}
                >
                  {mission.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #e6ebb2ff, #E2F0A8, transparent)',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default Mission;
