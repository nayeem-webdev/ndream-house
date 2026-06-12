import {
  Sofa,
  Building2,
  Trees,
  Compass,
  Construction,
  Box,
  Armchair,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    title: "Interior Design",
    description: "Elegant and functional interiors tailored to your lifestyle.",
    icon: Sofa,
  },
  {
    title: "Exterior Design",
    description: "Modern and striking exteriors that enhance curb appeal.",
    icon: Building2,
  },
  {
    title: "Landscape Design",
    description:
      "Beautiful outdoor spaces that blend nature with architecture.",
    icon: Trees,
  },
  {
    title: "Architectural Design",
    description: "Creative and practical building concepts from idea to plan.",
    icon: Compass,
  },
  {
    title: "Structural Design",
    description: "Safe, durable, and efficient structural solutions.",
    icon: Construction,
  },
  {
    title: "3D Modeling",
    description:
      "Realistic visualizations to bring your ideas to life before construction.",
    icon: Box,
  },
  {
    title: "Furniture Design",
    description:
      "Custom furniture designs that combine style and functionality.",
    icon: Armchair,
  },
  {
    title: "Creative Ideas",
    description: "Innovative design solutions that make every project unique.",
    icon: Lightbulb,
  },
];

const Services = () => {
  return (
    <div className="w-full bg-text">
      <div className="max-w-7xl mx-auto py-28 px-4 flex flex-col lg:flex-row gap-10">
        <div className="w-full">
          <div className="mb-16 text-center">
            <h1 className="mt-4 text-4xl md:text-8xl text-accent">
              Our Expertise
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    bg-background
                    p-8
                    border
                    border-secondary/30
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-accent
                    hover:shadow-xl
                 "
                >
                  {/* Number */}
                  <span className="absolute top-6 right-6 text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-all duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                        mb-6
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-primary/10
                        text-primary
                        transition-all
                        duration-500
                        group-hover:bg-primary
                        group-hover:text-white
                        group-hover:scale-110
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-text group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-text/70">
                    {service.description}
                  </p>

                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
