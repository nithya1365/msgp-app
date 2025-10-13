import { useState, useEffect } from "react";
import { Phone, Mail, Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className="bg-accent text-accent-foreground py-2 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-4 items-center">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">+91 (123) 456-7890</span>
            </a>
            <a href="mailto:info@msgp.co.in" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />
              <span className="hidden md:inline">info@msgp.co.in</span>
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-secondary transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--glass-bg)] backdrop-blur-lg border-b border-[var(--glass-border)] shadow-lg"
            : "bg-card"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold text-primary transition-transform hover:scale-105"
            >
              MSGP
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-foreground hover:text-primary transition-colors font-medium group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
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
                  className="block py-2 text-foreground hover:text-primary transition-colors"
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
