const Certifications = () => {
  const certifications = [
    { id: 1, name: "ISO 9001:2015" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 border-2 border-border hover:border-primary/50 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
              <div className="text-6xl mb-4 group-hover:animate-float">
  <img src="iso.jpg" alt="icon" className="w-24 h-24 mx-auto rounded-full" />
</div>
                <p className="font-semibold text-lg">{cert.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
