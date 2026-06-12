const BrandTicker = () => {
  // Replace these with your actual logo paths or icon components
  const logos = [
    {
      name: "Alpha",
      url: "/src/assets/b-logo-1.png",
    },
    {
      name: "Apex",
      url: "/src/assets/b-logo-2.png",
    },
    {
      name: "Vertex",
      url: "/src/assets/b-logo-3.png",
    },
    {
      name: "Nova",
      url: "/src/assets/b-logo-4.png",
    },
    {
      name: "Echo",
      url: "/src/assets/b-logo-5.png",
    },
    {
      name: "Quantum",
      url: "/src/assets/b-logo-6.png",
    },
  ];

  // Double the array to make the infinite scroll seamless
  const tickerLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-text py-6 overflow-hidden border-t border-b border-white/10">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Title */}
        <div className="shrink-0 bg-text z-10 pr-4 lg:border-r border-white/20 lg:py-2">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase whitespace-nowrap">
            Trusted By <br className="hidden lg:block" />
            <span className="text-yellow-400">Our Clients</span>
          </h2>
        </div>

        {/* Scrolling Ticker Mask */}
        <div className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 items-center w-max animate-marquee">
            {tickerLogos.map((logo, index) => (
              /* 1. WHITE BACKDROP CARD WITH FIXED SIZE */
              <div
                key={index}
                className="w-36 h-20 md:w-44 md:h-24 bg-white rounded-xl shadow-md p-4 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {/* 2. LOGO IMAGE (UNIFIED VIA GRAYSCALE) */}
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandTicker;
