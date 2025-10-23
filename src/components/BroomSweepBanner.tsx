import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./BroomSweepBanner.css";

const BroomSweepBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const broomRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const banner = bannerRef.current;
    const broom = broomRef.current;
    const text = textRef.current;

    if (!banner || !broom || !text) return;

    // Split text into characters
    const textContent = text.textContent || "";
    text.innerHTML = textContent
      .split("")
      .map((char, i) => `<span class="char" data-index="${i}">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    const chars = text.querySelectorAll(".char");

    // Broom travels from extreme left to extreme right
    const broomStartX = -200;
    const broomEndX = window.innerWidth + 200;

    gsap.set(broom, { x: broomStartX, opacity: 1, display: "block" });

    const tl = gsap.timeline({ delay: 0.3 });

    // Broom sweeps across entire screen - FASTER
    tl.to(broom, {
      x: broomEndX,
      duration: 9, // Much faster - 3 seconds instead of 7
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = this.progress();
        const currentBroomX = broomStartX + (broomEndX - broomStartX) * progress;

        // Color characters only when broom passes over them
        chars.forEach((char) => {
          const charRect = (char as HTMLElement).getBoundingClientRect();
          const charCenter = charRect.left + charRect.width / 2;

          // If broom has passed this character, make it vibrant
          if (currentBroomX >= charCenter) {
            char.classList.add("vibrant");
          }
        });

        // Change background halfway through
        if (progress > 0.5) {
          banner.classList.add("vibrant");
        }
      },
    })
    .to(broom, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
    })
    // Start marquee immediately - NO WAIT
    tl.add(() => {
      text.classList.add("marquee-active");
    }, 6);

    return () => {
      tl.kill();
    };
  }, []);

  // Handle hover pause/resume
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    if (isHovered) {
      text.style.animationPlayState = "paused";
    } else {
      text.style.animationPlayState = "running";
    }
  }, [isHovered]);

  // Handle scroll to hide banner
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={bannerRef} 
      className={`banner-container ${isScrolled ? 'scrolled' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text that changes color character by character */}
      <div className="banner-content">
        <p ref={textRef} className="banner-text">
          Registrations Open Now! Click here to register!
        </p>
      </div>

      {/* Broom */}
      <div ref={broomRef} className="broom">
        <img
          src="/broom.png"
          alt="Broom"
          className="broom-img"
          onLoad={() => console.log("✅ Broom image loaded!")}
          onError={() => console.log("❌ Broom image failed to load")}
        />
      </div>
    </div>
  );
};

export default BroomSweepBanner;