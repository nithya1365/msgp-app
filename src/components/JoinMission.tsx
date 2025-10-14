import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const JoinMission = () => {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "rgb(240, 245, 240)" }}
    >
      {/* Floating soft blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float-slow" />
      </div>

      

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in text-foreground">
          Join Our Mission
        </h2>
        <p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-in text-muted-foreground"
          style={{ animationDelay: "0.2s" }}
        >
          Together, we can create a sustainable future for generations to come.
          Be part of the green revolution.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
        >
          Get Involved
        </Button>
      </div>
    </section>
  );
};

export default JoinMission;
