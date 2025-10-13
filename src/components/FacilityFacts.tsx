import { Button } from "@/components/ui/button";
import hero2 from "@/assets/hero-2.jpg";

const FacilityFacts = () => {
  return (
    <section
      id="facility-facts"
      className="py-20"
      style={{ backgroundColor: "rgb(240, 245, 240)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <img
              src={hero2}
              alt="MSGP Waste Tech Park Facility"
              className="relative rounded-2xl shadow-[var(--shadow-3d)] w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-4xl font-bold text-foreground">
              FACILITY FACTS
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              MSGP employs modern technology to turn Municipal Solid Waste into
              useful products in its WASTE TECH PARK in Doddaballapur over an
              hour and a half drive from Bengaluru city. The PARK employs high
              rate mechanical aerobic composting techniques to produce compost
              out of solid waste. The compost is distributed across Karnataka.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              MSGP WASTE TECH PARK; The first of its kind in India, is located
              in Chiguranahalli Village, Doddaballapura Taluk, near Bengaluru.
              With a Municipal Solid Waste Concession from Bruhut Bengaluru
              Mahanagara Palike (BBMP) for 500 tons per day, MSGP remains
              committed to turning the life-threatening garbage into useful
              products and eco-friendly energy.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently MSGP receives over 750 tons of Municipal Solid Waste per
              day from Bulk Generators.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              MSGP WASTE TECH PARK is being developed into a tourist attraction
              and a centre of education.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-soft)]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityFacts;
