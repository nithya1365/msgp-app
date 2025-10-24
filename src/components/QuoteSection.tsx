const QuoteSection = () => {
  return (
    <section
      className="py-16"
      style={{ '--green1': '#053725', backgroundColor: 'var(--green1)', color: '#e6ebb2ff' } as React.CSSProperties}
    >
      <div className="container mx-auto px-4 text-center">
      <h2
 className="text-3xl md:text-4xl font-bold tracking-wide bg-clip-text bg-[var(--gradient-glow)]"
 style={{ fontFamily: 'Times New Roman, serif' }}
 
>
          INDIA’S WASTE TECH PARK PIONEER<br />
LEADING THE PACK<br />
IN INTEGRATED SOLID WASTE MANAGEMENT<br />   </h2>
        <div className="mt-4 w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#e4eb9c' }} />
      </div>
    </section>
  );
};
export default QuoteSection;
