import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Zap, TrendingUp } from "lucide-react";
import hero from "@/assets/company-overview.jpg";

const CompanyOverview = () => {
  const stats = [
    { number: "750+", label: "Metric Tons", sublabel: "Processed Daily" },
    { number: "5000+", label: "Tons Generated", sublabel: "By Bengaluru Daily" },
    { number: "1st", label: "In India", sublabel: "Waste Tech Park" }
  ];

  const highlights = [
    {
      icon: <Recycle className="w-6 h-6" />,
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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-2xl rounded-full"></div>
            <img
              src={hero}
              alt="Sustainability"
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-green-800 mb-4">
                Company Overview
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-green-700">MSGP Infra Tech Pvt. Ltd</span> meets 
              the Solid Waste Management (SWM) needs of urban Bengaluru. The first in India to set up 
              a <span className="font-semibold text-green-700">WASTE TECH PARK</span>, equipped with 
              state-of-the-art technology and a large facility to recycle waste into useful products.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat, i) => (
                <Card key={i} className="p-4 text-center border-green-200 bg-white hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-700 mt-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.sublabel}</div>
                </Card>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-green-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;