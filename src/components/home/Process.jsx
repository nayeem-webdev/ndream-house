const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We begin with a personalized consultation, either at our studio or through an online meeting, to understand your vision, lifestyle, requirements, and design preferences.",
    },
    {
      num: "02",
      title: "Site Visit & Space Assessment",
      desc: "Our design team visits the project location to conduct a detailed site survey, take measurements, and analyze the space to identify opportunities and constraints.",
    },
    {
      num: "03",
      title: "Concept Planning & Layout Development",
      desc: "Based on our findings, we develop the initial design concept, including space planning, furniture layouts, electrical layouts, plumbing/sanitary plans, and a preliminary project budget.",
    },
    {
      num: "04",
      title: "Project Proposal & Agreement",
      desc: "Once the concept, layouts, and project scope are finalized, we present a detailed proposal and proceed with a formal agreement to ensure a clear and structured workflow.",
    },
    {
      num: "05",
      title: "Design Development & Visualization",
      desc: "Our designers refine the concept and create detailed design solutions, complemented by realistic 3D visualizations that allow you to experience the proposed space before implementation.",
    },
    {
      num: "06",
      title: "Material Selection & Budget Finalization",
      desc: "We carefully select finishes, materials, furnishings, and fixtures that align with the design vision and your budget, providing a comprehensive final cost estimate.",
    },
    {
      num: "07",
      title: "Project Execution & Supervision",
      desc: "Our team oversees the implementation process, coordinating with contractors and suppliers to ensure every detail is executed to the highest standards.",
    },
    {
      num: "08",
      title: "Final Styling & Handover",
      desc: "Once the project is complete, we add the finishing touches, conduct a thorough quality check, and hand over a beautifully designed space ready to be enjoyed.",
    },
  ];

  return (
    <div className="w-full bg-text text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left Column: Title */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-30">
          <h1 className="text-8xl lg:text-7xl font-bold tracking-tight leading-none text-left">
            How We <br />
            <span className="text-accent">Work?</span>
          </h1>
          <p className="leading-relaxed text-xl text-zinc-300 max-w-3xl mx-auto">
            A seamless, step-by-step approach to turning your dream space into
            reality.
          </p>
        </div>

        {/* The Divider Line */}
        <div className="w-full h-px lg:w-px lg:h-300 bg-white/20 self-stretch" />

        {/* Right Column: Process Steps */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 gap-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row gap-6 border-b border-white/10 pb-6 last:border-0"
            >
              {/* The Fixed Square Box */}
              <div className="shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-black/20 rounded-md flex items-center justify-center transition-colors duration-300 group-hover:bg-black/40">
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight text-accent leading-none">
                    {step.num}
                  </h1>
                </div>
              </div>

              {/* Content Block */}
              <div className="flex flex-col justify-center gap-1">
                <h3 className="text-xl md:text-2xl tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="md:text-base leading-relaxed text-md text-zinc-100/50 font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
