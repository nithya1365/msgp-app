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
              MSGP Infra Tech Pvt. Ltd, meets the Solid Waste Management (SWM) needs of urban Bengaluru. The first in India to set up a WASTE TECH PARK, MSGP is equipped with the state-of-the-art technology and a large facility to recycle waste into useful products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MSGP stays invested in resource recovery out of both mixed and segregated waste that Bengaluru city churns out. MSGP WASTE TECH PARK produces compost out of Solid Waste. The PARK includes capability to produce sustainable energy out of waste and to recycle plastic into usable products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MSGP receives and processes over 750 metric tons of garbage per day from out of over 5000 tons that Bengaluru’s population generates every single day.
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
