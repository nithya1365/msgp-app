import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-accent text-accent-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 border-2 border-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-6 text-primary">About MSGP</h3>
            <p className="leading-relaxed opacity-90 mb-4">
              Material Solutions for Green Planet is committed to revolutionizing waste management 
              through innovative recycling solutions and sustainable practices.
            </p>
            <p className="leading-relaxed opacity-90">
              We believe in creating a cleaner, greener future for our planet through responsible 
              waste processing and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Know Us", "Facilities", "Awareness", "Gallery", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-primary transition-colors inline-block hover:translate-x-2 duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="opacity-90">
                  123 Green Street, Eco City,<br />
                  Environmental Zone 456789
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors opacity-90">
                  +91 (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <a href="mailto:info@msgp.co.in" className="hover:text-primary transition-colors opacity-90">
                  info@msgp.co.in
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/20 text-center opacity-75">
          <p>&copy; {new Date().getFullYear()} MSGP - Material Solutions for Green Planet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
