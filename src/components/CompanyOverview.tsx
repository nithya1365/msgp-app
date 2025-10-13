import { Button } from "@/components/ui/button";
import companyImage from "@/assets/company-overview.jpg";

const CompanyOverview = () => {
  return (
    <section id="know-us" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <img
              src={companyImage}
              alt="MSGP Facility"
              className="relative rounded-2xl shadow-[var(--shadow-3d)] w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-4xl font-bold text-foreground">
              Company Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MSGP (Material Solutions for Green Planet) is a pioneering waste management company 
              committed to creating sustainable solutions for environmental challenges. We specialize 
              in comprehensive waste processing, recycling, and organic waste conversion.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With state-of-the-art facilities and innovative technologies, we transform waste into 
              valuable resources, contributing to a cleaner, greener planet. Our mission is to lead 
              the circular economy revolution while empowering communities through awareness and 
              sustainable practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From industrial waste management to community composting programs, MSGP delivers 
              end-to-end solutions that make environmental responsibility accessible and achievable 
              for everyone.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-soft)]"
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
