const About = () => {
  return (
    <div className="w-full bg-accent">
      <div className="max-w-7xl mx-auto py-28 px-4 flex flex-col lg:flex-row gap-10">
        {/* Nasir Image Layer */}
        <div className="relative z-10 flex items-center justify-center w-1/3">
          <div className="absolute -z-10" />
          <img
            src="/src/assets/Nasir photo about.png"
            alt="Successful Graduate"
            className="h-auto w-full max-w-md animate-float transition-transform duration-700 hover:scale-105"
          />
        </div>
        {/* About Div */}
        <div className="w-2/3">
          <h1 className="font-bold text-6xl bg-accent text-primary">About</h1>
          <h1 className="mt-2 font-bold text-3xl bg-accent text-text">
            We craft elegant, thoughtfully curated interiors that transform
            houses into homes. Whether you’ve recently purchased a property and
            are seeking refined furnishings, bespoke furniture pieces, or a
            comprehensive interior design consultation, we are here to guide you
            at every step.
          </h1>
          <div className="mt-2 pb-2 border-b-4 border-primary" />
          <p className="mt-6">
            With over 16 years of experience, our talented interior designers
            bring creativity, precision, and a deep understanding of spatial
            harmony to every project. <br /> <br />
            From uncovering your unique style to reimagining layouts and
            creating open, flowing living spaces, we ensure every design
            decision enhances both beauty and functionality. Our goal is to
            create interiors that are not only visually captivating, but also a
            true expression of your personality and way of living.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
