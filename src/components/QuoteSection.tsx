const QuoteSection = () => {
  return (
    <section
      className="py-16"
      style={{ '--green1': '#354024', backgroundColor: 'var(--green1)', color: '#e5d7c4' } as React.CSSProperties}
    >
      <div className="container mx-auto px-4 text-center">
      <h2
 className="text-3xl md:text-4xl font-bold tracking-wide bg-clip-text bg-[var(--gradient-glow)]"
 style={{ fontFamily: 'Times New Roman, serif' }}
 
>
          INDIA’S WASTE TECH PARK PIONEER<br />
LEADING THE PACK<br />
IN INTEGRATED SOLID WASTE MANAGEMENT<br />   </h2>
        <div className="mt-4 w-32 h-1 bg-primary mx-auto rounded-full animate-shimmer" style={{
          backgroundImage: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
          backgroundSize: '200% 100%',
        }}/>
      </div>
    </section>
  );
};
export default QuoteSection;
