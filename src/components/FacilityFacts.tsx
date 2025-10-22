import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Leaf, MapPin, Truck, GraduationCap } from "lucide-react";

const FacilityFacts = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const facts = [
    {
      id: 1,
      icon: <Leaf className="w-8 h-8" />,
      title: "Modern Technology",
      shortText: "Waste to Value",
      fullText: "MSGP employs modern technology to turn Municipal Solid Waste into useful products. The park uses high-rate mechanical aerobic composting techniques to produce compost that is distributed across Karnataka."
    },
    {
      id: 2,
      icon: <MapPin className="w-8 h-8" />,
      title: "First of Its Kind",
      shortText: "Pioneer in India",
      fullText: "MSGP WASTE TECH PARK: The first of its kind in India, is located in Chiguranahalli Village, Doddaballapura Taluk. With a 500 TPD concession from BBMP, MSGP turns life-threatening garbage into useful products and eco-friendly energy."
    },
    {
      id: 3,
      icon: <Truck className="w-8 h-8" />,
      title: "750+ Tons Daily",
      shortText: "Massive Capacity",
      fullText: "Currently MSGP receives over 750 tons of Municipal Solid Waste per day from Bulk Generators, processing waste efficiently to create valuable resources."
    },
    {
      id: 4,
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Hub",
      shortText: "Learn & Explore",
      fullText: "MSGP WASTE TECH PARK is being developed into a tourist attraction and a centre of education, inspiring future generations about sustainable waste management."
    }
  ];

  return (
    <section
      id="facility-facts"
      className="py-20"
      style={{ backgroundColor: "rgb(240, 245, 240)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
              alt="MSGP Waste Tech Park Facility"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Interactive Cards Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-green-900">
              FACILITY FACTS
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.id}
                  className="relative h-48 cursor-pointer perspective-1000"
                  onMouseEnter={() => setHoveredCard(fact.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`absolute inset-0 transition-all duration-500 transform-style-3d ${
                      hoveredCard === fact.id ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* Front of Card */}
                    <div
                      className={`absolute inset-0 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center backface-hidden ${
                        hoveredCard === fact.id ? "opacity-0" : "opacity-100"
                      } transition-opacity duration-300`}
                    >
                      <div className="text-green-600 mb-3">{fact.icon}</div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {fact.title}
                      </h3>
                      <p className="text-sm text-gray-600">{fact.shortText}</p>
                    </div>

                    {/* Back of Card */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl shadow-lg p-6 flex items-center justify-center backface-hidden transform rotate-y-180 ${
                        hoveredCard === fact.id ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-300`}
                    >
                      <p className="text-white text-sm leading-relaxed">
                        {fact.fullText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityFacts;