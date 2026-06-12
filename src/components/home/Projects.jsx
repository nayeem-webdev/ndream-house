import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-28 px-4 flex flex-col gap-10">
        {/* Section Title */}
        <div className="max-w-3xl px-4 mb-10 mx-auto text-center">
          <h1 className="text-4xl lg:text-8xl text-zinc-900 mb-4 text-center">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="leading-relaxed text-center text-xl text-zinc-600 max-w-3xl mx-auto">
            Discover a portfolio of innovative designs, quality construction,
            and inspiring spaces crafted to bring our clients' visions to life.
          </p>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left Large Card */}
          <div className="group relative overflow-hidden rounded-md">
            <img
              src="/src/assets/project-4.png"
              alt="Project"
              className="w-full h-full object-cover transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm uppercase tracking-widest text-primary">
                Villa
              </p>
              <h3 className="text-2xl mt-2">Living Space</h3>
              <p className="mt-1 text-zinc-200">Rangamati, Chattogram</p>
            </div>
          </div>

          {/* Right Side (Two stacked images, equal height) */}
          <div className="flex flex-col gap-3 h-full">
            {/* Top Card */}
            <div className="group relative overflow-hidden rounded-md flex-1">
              <img
                src="/src/assets/project-2.png"
                alt="Project"
                className="w-full h-full object-cover transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm uppercase tracking-widest text-primary">
                  Commercial
                </p>
                <h3 className="text-2xl mt-2">Office Space</h3>
                <p className="mt-1 text-zinc-200">Agrabad, Chattogram</p>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="group relative overflow-hidden rounded-md flex-1">
              <img
                src="/src/assets/project-3.png"
                alt="Project"
                className="w-full h-full object-cover transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm uppercase tracking-widest text-primary">
                  Residential
                </p>
                <h3 className="text-2xl mt-2">Living Room</h3>
                <p className="mt-1 text-zinc-200">Gulshan, Dhaka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Button */}
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="group inline-flex  px-8 py-4  h-14 items-center justify-center gap-2 rounded-full text-primary bg-white text-lg hover:text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
          >
            View All Projects
            <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
