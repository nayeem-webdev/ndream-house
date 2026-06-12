const FounderCeo = () => {
  return (
    <div className="w-full bg-text">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* About Div */}
        <div className="w-2/3 py-28">
          <h1 className="text-8xl text-accent">Md Nasir Uddin</h1>
          <h2 className="mt-2 text-4xl text-secondary">Founder & CEO.</h2>
          <div className="mt-2 pb-2 border-b-4 border-primary" />
          <p className="mt-6 text-xl text-white/80">
            Hi, I'm a Civil Engineer, Interior & Exterior Designer, and the
            Founder & CEO of N Dream House. With a passion for creating
            beautiful, functional spaces, I specialize in designing, building,
            and renovating homes and commercial buildings. From concept to
            completion, I bring creativity, engineering expertise, and attention
            to detail to every project. My mission is to turn dreams into
            reality by delivering high-quality construction and inspiring
            designs that stand the test of time. <br />
            With years of experience in the construction and design industry, I
            am committed to delivering innovative solutions, superior
            craftsmanship, and exceptional customer satisfaction. Every project
            is approached with professionalism, creativity, and attention to
            detail, ensuring that each space is not only visually appealing but
            also practical, comfortable, and built to last. At N Dream House, we
            believe every structure should tell a story and every dream deserves
            a strong foundation.
          </p>
        </div>
        {/* Nasir Image Layer */}
        <div className="relative z-10 flex items-center justify-center w-1/3 bg-accent rounded-b-full pt-20 pb-30 mb-28">
          <div className="absolute -z-10" />
          <img
            src="/src/assets/nasir-photo-founder.png"
            alt="Successful Graduate"
            className="h-auto w-full max-w-md animate-float transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FounderCeo;
