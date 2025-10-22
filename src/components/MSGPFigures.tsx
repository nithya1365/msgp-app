import { useEffect, useState, useRef } from "react";
import { Trash2, BarChart3, Package, Calendar, Zap, TrendingUp } from "lucide-react";

const stats = [
  { 
    icon: Trash2, 
    label: "Total Waste Handled", 
    value: 50000, 
    suffix: " tons",
    description: "Comprehensive waste collection from across the region",
    impact: "Equivalent to 10,000 garbage trucks",
    color: "from-emerald-400 to-green-600",
    particleColor: "#10b981"
  },
  { 
    icon: BarChart3, 
    label: "Processed Waste", 
    value: 45000, 
    suffix: " tons",
    description: "Successfully processed and converted to useful materials",
    impact: "90% processing efficiency rate",
    color: "from-green-400 to-emerald-600",
    particleColor: "#22c55e"
  },
  { 
    icon: Package, 
    label: "Compost in Stock", 
    value: 12000, 
    suffix: " tons",
    description: "High-quality organic compost ready for distribution",
    impact: "Can fertilize 6,000 acres of farmland",
    color: "from-lime-400 to-green-600",
    particleColor: "#84cc16"
  },
  { 
    icon: Calendar, 
    label: "Days of Operation", 
    value: 1825, 
    suffix: " days operated",
    description: "Continuous operation serving the community",
    impact: "5 years of uninterrupted service",
    color: "from-teal-400 to-emerald-600",
    particleColor: "#14b8a6"
  },
];

const MSGPFigures = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedStat, setSelectedStat] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Particle canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{x: number; y: number; vx: number; vy: number; size: number; color: string}> = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ['#10b981', '#22c55e', '#84cc16', '#14b8a6'][Math.floor(Math.random() * 4)]
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw connections
        particles.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section 
      ref={sectionRef} 
      id="facilities" 
      className="py-20 bg-white text-slate-900 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated canvas background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent">
              MSGP Figures
            </h2>
            
          </div>
          <p className="text-slate-600 mt-2 text-lg">Dive into our real-time waste management analytics!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const progress = hasAnimated ? (counts[index] / stat.value) * 100 : 0;
            const isHovered = hoveredIndex === index;
            const isSelected = selectedStat === index;
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isSelected ? 'scale-105 z-20' : hoveredIndex !== null && !isHovered ? 'scale-95 opacity-60' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedStat(isSelected ? null : index)}
              >
                {/* Holographic card */}
                <div 
                  className="relative bg-white rounded-3xl p-8 shadow-2xl border border-emerald-200/50 backdrop-blur-sm overflow-hidden"
                  style={{
                    transform: isHovered ? `perspective(1000px) rotateX(${(mousePos.y - 250) * 0.02}deg) rotateY(${(mousePos.x - 250) * 0.02}deg)` : 'none',
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`} />
                  
                  {/* Animated border glow */}
                  {isHovered && (
                    <div className="absolute inset-0 rounded-3xl">
                      <div className="absolute inset-0 rounded-3xl border-2 border-emerald-400 animate-pulse" />
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent animate-shimmer" />
                    </div>
                  )}

                  {/* Icon with 3D effect */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={`relative w-24 h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg transition-all duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                      <stat.icon 
                        size={40} 
                        className={`text-white transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`} 
                      />
                      {/* Particle burst effect */}
                      {isHovered && (
                        <>
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-ping"
                              style={{
                                top: '50%',
                                left: '50%',
                                transform: `rotate(${i * 45}deg) translateX(30px)`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-slate-500">
                      <span>0</span>
                      <span>{stat.value.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Counter with glitch effect */}
                  <div className={`text-5xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
                    {counts[index].toLocaleString()}{stat.suffix}
                  </div>
                  
                  <div className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    {stat.label}
                  </div>

                  {/* Trend indicator */}
                  <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
                    <TrendingUp size={14} />
                    <span>+{Math.round(progress)}% Complete</span>
                  </div>

                  {/* Expandable details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isSelected ? 'max-h-48 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`rounded-2xl p-4 bg-gradient-to-br ${stat.color} bg-opacity-10 border border-emerald-300/30 backdrop-blur-sm`}>
                      <p className="text-sm text-slate-700 mb-3 leading-relaxed">{stat.description}</p>
                      <div className="flex items-start gap-2">
                        <Zap size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs font-bold text-emerald-700">{stat.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Click indicator */}
                  <div className={`text-center mt-4 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <span className="text-xs text-emerald-600 font-semibold">
                      {isSelected ? '▲ TAP TO HIDE' : '▼ TAP FOR INSIGHTS'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default MSGPFigures;