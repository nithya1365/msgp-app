import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const JoinMission = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
      {/* Animated 3D effect background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Rotating globe effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Globe size={400} className="animate-tilt" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in">
          Join Our Mission
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 animate-slide-in" style={{ animationDelay: '0.2s' }}>
          Together, we can create a sustainable future for generations to come. 
          Be part of the green revolution.
        </p>
        <Button
          size="lg"
          className="bg-card text-foreground hover:bg-card/90 shadow-[var(--shadow-3d)] text-lg px-8 py-6 animate-glow"
        >
          Get Involved
        </Button>
      </div>
    </section>
  );
};

export default JoinMission;
