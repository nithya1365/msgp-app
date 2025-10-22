import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, Mail, Facebook, Instagram, Linkedin,Youtube, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const rightIconsRef = useRef<HTMLDivElement | null>(null);
  const truckRef = useRef<HTMLImageElement | null>(null);
  const iconRefs = useRef<HTMLAnchorElement[]>([]);
  iconRefs.current = [];

  const addIconRef = (el: HTMLAnchorElement | null) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    if (!rightIconsRef.current || !truckRef.current) return;

    const container = rightIconsRef.current;
    const truck = truckRef.current;
    const icons = iconRefs.current;

    const ctx = gsap.context(() => {
      // Truck starts from far right, moves slowly to its final position
      gsap.set(truck, { x: 200, opacity: 1 }); // Start from far right
      gsap.set(icons, { opacity: 0, y: -10 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(truck, { x: 0, duration: 2.5 }) // Slow movement
        .to(
          icons,
          { opacity: 1, y: 0, stagger: 0.2, duration: 0.4 },
          "-=0.8" // Icons appear after truck has passed
        );
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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-white text-gray-900 py-2 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-4 items-center">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} />
              <span className="hidden md:inline">+080-22266769</span>
            </a>
            <a href="mailto:info@msgp.co.in" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />
              <span className="hidden md:inline">info@msgp.co.in</span>
            </a>
          </div>
          <div ref={rightIconsRef} className="flex items-center gap-3 min-w-[220px] justify-end">
            {/* Truck */}
            <img
              ref={truckRef}
              src="src/assets/truck.jpeg"
              alt="Truck"
              className="h-6 w-auto select-none pointer-events-none"
            />

            {/* Social Icons */}
            <a ref={addIconRef} href="https://www.facebook.com/people/MSGP-Infra-Tech-Pvt-Ltd/100079226423204/" className="hover:text-secondary transition-colors">
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
      <nav
        className={`transition-all duration-300 bg-green-600 text-white ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a
  href="#home"
  className="text-2xl font-bold text-primary transition-transform hover:scale-105"
>
  <img src="src/assets/logo.png" alt="MSGP Logo" className="h-10 w-auto inline-block" />
</a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white hover:text-white transition-all duration-300 font-medium group hover:text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 animate-slide-in">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-white hover:text-white transition-all duration-300 hover:text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
