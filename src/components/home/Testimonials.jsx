import { Play, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const videoId = "dQw4w9WgXcQ";
  const thumbnailUtl =
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80";

  const reviews = [
    {
      text: "Transforming our home with your studio was seamless. Their vision and execution were flawlessly executed. Highly recommended!",
      name: "Emily Davis",
      role: "CEO, The Oakwood Group",
    },
    {
      text: "Our office space became an inspiring environment thanks to your design team's incredible attention to architectural flow.",
      name: "Michael Chen",
      role: "Businessman",
    },
    {
      text: "Functional, stylish, and exactly what we wanted! They listened to our lifestyle needs and created a stunning, liveable sanctuary.",
      name: "Olivia Parker",
      role: "Homemaker",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="w-full bg-accent px-4 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="max-w-3xl px-4 mb-10 mx-auto text-center">
          <h1 className="text-text mb-4 text-center text-4xl lg:text-8xl">
            Client <span className="text-primary">Experience</span>
          </h1>
          <p className="leading-relaxed text-center text-xl text-zinc-700 max-w-3xl mx-auto">
            Combining design innovation, technical expertise, and construction
            excellence to create spaces that inspire and endure.
          </p>
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl bg-white">
          {/* LEFT PANEL: VIDEO COMPONENT (Forced to sharp 16:9 independently) */}
          <div className="w-full md:w-7/12 aspect-video bg-zinc-950 relative">
            {!isPlaying ? (
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer overflow-hidden group"
              >
                <img
                  src={thumbnailUtl}
                  alt="Watch Client Story"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/20" />

                {/* Play Button & Text Micro-interaction */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 z-10">
                  <button
                    aria-label="Play testimonial video"
                    className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-accent backdrop-blur-3xl focus:outline-none"
                  >
                    <Play className="text-accent group-hover:text-black transition-all duration-300" />
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full animate-fadeIn"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube testimonial video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* RIGHT PANEL: COMPACT MINIMAL REVIEWS */}
          {/* Stripped large paddings down to p-6/p-10 to fit seamlessly beside the shorter video */}
          <div className="w-full md:w-5/12 bg-white p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Shrunk the decorative quote mark background size */}
            <div className="absolute -top-6 -right-2 text-zinc-100 text-[8rem] lg:text-[16rem] select-none pointer-events-none leading-none">
              <Quote size={24} className="" />
            </div>

            <div className="w-10 h-0.5 bg-accent mb-4 relative z-10" />

            {/* Text wrapper with reduced text sizes and tighter spacing */}
            <div className="relative z-10 grow flex flex-col justify-center my-auto min-h-35 md:min-h-0">
              <div key={activeIndex} className="animate-fadeIn">
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg font-light leading-relaxed mb-4">
                  "{reviews[activeIndex].text}"
                </p>

                <div>
                  <h1 className="text-lg md:text-2xl font-bold text-primary">
                    {reviews[activeIndex].name}
                  </h1>
                  <p className="text-zinc-400 text-[11px] font-medium tracking-widest uppercase mt-0.5">
                    {reviews[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Mini-indicators */}
            <div className="flex gap-2 mt-4 relative z-10">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? "w-6 bg-zinc-900"
                      : "w-1.5 bg-zinc-200"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
