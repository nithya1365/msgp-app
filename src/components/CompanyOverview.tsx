import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import dustbin from "@/assets/dustbin.gif";
import dustbinStatic from "@/assets/dustbin-static.png";
import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Zap, TrendingUp } from "lucide-react";
import hero from "@/assets/company-overview.jpg";

const CompanyOverview: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gifRef = useRef<HTMLImageElement>(null);
  const dustbinContainerRef = useRef<HTMLDivElement>(null);  // <-- Added this line
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const stats = [
    { number: "750+", label: "Metric Tons", sublabel: "Processed Daily" },
    { number: "5000+", label: "Tons Generated", sublabel: "By Bengaluru Daily" },
    { number: "1st", label: "In India", sublabel: "Waste Tech Park" }
  ];

  const highlights = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Resource Recovery",
      text: "Recovery from both mixed and segregated waste"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Composting",
      text: "Converting solid waste into nutrient-rich compost"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Sustainable Energy",
      text: "Producing renewable energy from waste materials"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Plastic Recycling",
      text: "Transforming plastic into usable products"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Log section dimensions for debugging
    const sectionRect = sectionRef.current.getBoundingClientRect();
    console.log('Section dimensions:', {
      width: sectionRect.width,
      height: sectionRect.height,
      top: sectionRect.top,
      left: sectionRect.left
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationPlayed) {
            setAnimationPlayed(true);

            // Start animation after 2 seconds
            setTimeout(() => {
              // Animate circle expanding from circle to full screen
              if (circleRef.current && sectionRef.current) {
                const timeline = gsap.timeline();
                
                // Get section dimensions
                const sectionRect = sectionRef.current.getBoundingClientRect();
                console.log('Animating to section size:', sectionRect.width, sectionRect.height);
                
                // First: Expand to circle shape
                timeline.fromTo(
                  circleRef.current,
                  { scale: 0.2, opacity: 0, transformOrigin: "left top" },
                  { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
                );
                
                // Then: Expand to cover entire section and fade out dustbin
                timeline.to(circleRef.current, {
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0",
                  duration: 1.5,
                  ease: "power3.inOut"
                }, "-=0.5");
                
                // Fade out dustbin container at the same time
                if (dustbinContainerRef.current) {
                  timeline.to(dustbinContainerRef.current, {
                    opacity: 0,
                    duration: 1.5,
                    ease: "power2.inOut"
                  }, "-=1.5");
                }
              }

              // Stop GIF after 0.5 seconds
              setTimeout(() => {
                if (gifRef.current) {
                  gifRef.current.src = dustbinStatic;
                }
              }, 500);
            }, 2000);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animationPlayed]);

  return (
    <section
  ref={sectionRef}
  className="relative flex items-start justify-start min-h-[80vh] bg-[#CFBB99] overflow-hidden px-20 py-16"
>

      {/* Left: Dustbin GIF */}
      <div className="relative flex justify-center w-[35%]">
        <img
          ref={gifRef}
          src={dustbin}
          alt="Dustbin Animation"
          className="w-72 h-72 object-contain"
        />
      </div>

      {/* Expanding Large Dark Brown Circle */}
      <div
        ref={circleRef}
        className="absolute left-[30%] top-[2%] w-[40rem] h-[40rem] bg-[#4E342E]/95 rounded-full flex flex-col justify-start shadow-2xl opacity-0 scale-0 p-10 overflow-auto"
      >
        {/* Original Content Inside Circle */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-[#D7CCC8] mb-2">Company Overview</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#6D4C41] to-[#8D6E63] rounded-full"></div>
          </div>

          <p className="text-lg text-[#D7CCC8] leading-relaxed">
            <span className="font-semibold text-[#FFF8E1]">MSGP Infra Tech Pvt. Ltd</span> meets the Solid Waste Management (SWM) needs of urban Bengaluru. The first in India to set up a <span className="font-semibold text-[#FFF8E1]">WASTE TECH PARK</span>, equipped with state-of-the-art technology and a large facility to recycle waste into useful products.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 py-4">
            {stats.map((stat, i) => (
              <Card key={i} className="p-4 text-center border-[#6D4C41] bg-[#5D4037] hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#D7CCC8]">{stat.number}</div>
                <div className="text-sm font-semibold text-[#FFF8E1] mt-1">{stat.label}</div>
                <div className="text-xs text-[#FFF8E1]">{stat.sublabel}</div>
              </Card>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#6D4C41]/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#795548] flex items-center justify-center text-[#D7CCC8]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[#FFF8E1] text-sm">{item.title}</h4>
                  <p className="text-xs text-[#FFF8E1] mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="px-8 py-3 bg-gradient-to-r from-[#6D4C41] to-[#4E342E] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
