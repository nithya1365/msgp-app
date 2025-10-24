import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BroomSweepBanner from "./BroomSweepBanner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const rightIconsRef = useRef<HTMLDivElement | null>(null);
  const truckRef = useRef<HTMLImageElement | null>(null);
  const iconRefs = useRef<HTMLAnchorElement[]>([]);
  iconRefs.current = [];

  const addIconRef = (el: HTMLAnchorElement | null) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Detect if scrolled past hero section (assuming hero is ~100vh or 600px)
      const heroHeight = window.innerHeight || 600;
      setIsPastHero(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for truck and social icons
  useLayoutEffect(() => {
    if (!rightIconsRef.current || !truckRef.current) return;

    const icons = iconRefs.current;
    const ctx = gsap.context(() => {
      gsap.set(truckRef.current, { x: 200, opacity: 1 });
      gsap.set(icons, { opacity: 0, y: -10 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(truckRef.current, { x: 0, duration: 2.5 })
        .to(icons, { opacity: 1, y: 0, stagger: 0.2, duration: 0.4 }, "-=0.8");
    }, rightIconsRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Know Us", href: "#know-us" },
    { name: "Facilities", href: "#facilities" },
    { name: "Awareness", href: "#awareness" },
    { name: "Gallery", href: "#gallery" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Banner on top */}
      <BroomSweepBanner />

      {/* Navbar container */}
      <header
        className={`fixed left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled ? "top-0" : "top-[40px]"
        }`}
      >
        {/* Top Bar */}
        <div className={`py-2 px-4 md:px-8 transition-colors duration-300 ${
          isPastHero ? "bg-white text-gray-900" : "bg-white text-gray-900"
        }`}>
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex gap-4 items-center">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone size={14} />
                <span className="hidden md:inline">+080-22266769</span>
              </a>
              <a
                href="mailto:info@msgp.co.in"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail size={14} />
                <span className="hidden md:inline">info@msgp.co.in</span>
              </a>
            </div>

            <div
              ref={rightIconsRef}
              className="flex items-center gap-3 min-w-[220px] justify-end"
            >
              <img
                ref={truckRef}
                src="src/assets/truck.jpeg"
                alt="Truck"
                className="h-6 w-auto select-none pointer-events-none"
              />
              <a ref={addIconRef} href="#" className="hover:text-secondary transition-colors">
                <Facebook size={16} />
              </a>
              <a ref={addIconRef} href="#" className="hover:text-secondary transition-colors">
                <Instagram size={16} />
              </a>
              <a ref={addIconRef} href="#" className="hover:text-secondary transition-colors">
                <Linkedin size={16} />
              </a>
              <a ref={addIconRef} href="#" className="hover:text-secondary transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`transition-all duration-300` }>
          <div className={`container mx-auto px-4 md:px-8 flex justify-center `}>
            {/* Rounded Navigation Bar */}
            <div
  className={`rounded-full px-10 py-2 mt-4 w-full max-w-4xl border transition-all duration-300 ${
    isPastHero
      ? "bg-[#F7F0E6] border-gray-200"
      : "bg-white/20 backdrop-blur-xl border-white/30"
  } ${isScrolled ? "shadow-lg" : ""}`}
>

              <div className="flex gap-8 items-center justify-center">
                {/* {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`transition-all duration-300 font-medium text-sm md:text-base ${
                      isPastHero
                        ? "text-gray-900 hover:text-gray-600"
                        : "text-white hover:text-white/80 drop-shadow-sm"
                    }`}
                  >
                    {link.name}
                  </a>
                ))} */}
                {navLinks.map((link) => (
  <a
    key={link.name}
    href={link.href}
    className={`transition-all duration-300 font-medium text-sm md:text-base px-3 py-1 rounded-full border-2 border-transparent ${
      isPastHero
        ? "text-gray-900 hover:text-[#414F30] hover:border-[#414F30]"
        : "text-white hover:text-white hover:border-white"
    }
    `}
  >
    {link.name}
  </a>
))}

              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                isPastHero ? "text-gray-900" : "text-gray-800"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className={`lg:hidden mx-4 mt-2 rounded-lg shadow-lg animate-slide-in border transition-all duration-300 ${
              isPastHero
                ? "bg-white border-gray-200"
                : "bg-white/20 backdrop-blur-xl border-white/30"
            }`}>
              <div className="px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block py-2 transition-all duration-300 ${
                      isPastHero
                        ? "text-gray-900 hover:text-gray-600"
                        : "text-white hover:text-white/80 drop-shadow-sm"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;