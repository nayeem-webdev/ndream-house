import { SlBadge } from "react-icons/sl";
import {
  Award,
  Hammer,
  Building2,
  PencilRuler,
  MessageCircleMore,
  MoveRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="pt-30 lg:pt-10 pb-28 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Section: Content */}
        <div className=" lg:max-w-lg w-full flex flex-col gap-6">
          <div className="flex gap-2 px-4 py-2 self-start font-medium text-text bg-accent/20 rounded-full items-center">
            <SlBadge />
            <span>Creating Timeless Interiors Since 2010</span>
          </div>

          <h1 className="text-5xl lg:text-6xl text-zinc-900 leading-none">
            Transforming Your Spaces into
            <span className="text-primary block mt-2">Timeless Designs.</span>
          </h1>

          <p className="text-xl text-zinc-600 leading-relaxed">
            Designing inspiring interiors with care and creativity. Over
            <strong className="text-primary"> 670+ spaces </strong>
            transformed with attention to detail.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex  px-8 py-4  h-14 items-center justify-center gap-2 rounded-full text-white bg-primary text-lg transition-all duration-300 hover:bg-black hover:shadow-xl"
            >
              Book Consultation
              <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/projects"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary px-8 text-lg text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Projects
            </Link>
          </div>
        </div>

        {/* Right Section: Visuals */}
        <div className=" relative p-22 lg:block">
          <div className="relative">
            {/* Central Student Image Layer */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="absolute -z-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
              <img
                src="/src/assets/hero-image.png"
                alt="Successful Graduate"
                className="h-auto w-full max-w-md animate-float drop-shadow-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* CONSULTATION CARD */}
            <div className="absolute -left-15 top-10 animate-bounce z-20 group hidden sm:block">
              <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden min-w-36">
                <div className="relative z-10 flex items-center">
                  <div className="p-2 rounded-lg bg-text text-white shadow-md">
                    <MessageCircleMore size={24} />
                  </div>
                  <div className="flex flex-col leading-tight text-text font-medium px-3">
                    Consultation
                  </div>
                </div>
              </div>
            </div>
            {/* PLANNING & DESIGN CARD */}
            <div className="absolute -right-20 top-30 animate-bounce z-20 group hidden sm:block [animation-delay:0.5s]">
              <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden min-w-36">
                <div className="relative z-10 flex items-center">
                  <div className="p-2 rounded-lg bg-text text-white shadow-md">
                    <PencilRuler size={24} />
                  </div>
                  <div className="flex flex-col leading-tight text-text font-medium px-3">
                    Planning & Design
                  </div>
                </div>
              </div>
            </div>
            {/* 3D MODELING CARD */}
            <div className="absolute -left-12 bottom-20 animate-bounce z-20 group hidden sm:block [animation-delay:0.3s]">
              <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden min-w-36">
                <div className="relative z-10 flex items-center">
                  <div className="p-2 rounded-lg bg-text text-white shadow-md">
                    <Building2 size={24} />
                  </div>
                  <div className="flex flex-col leading-tight text-text font-medium px-3">
                    3D Modeling
                  </div>
                </div>
              </div>
            </div>
            {/* CONSTRUCTION & HANDOVER CARD */}
            <div className="absolute -right-12 bottom-15 animate-bounce z-20 group hidden sm:block [animation-delay:0.7s]">
              <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden min-w-36">
                <div className="relative z-10 flex items-center">
                  <div className="p-2 rounded-lg bg-text text-white shadow-md">
                    <Hammer size={24} />
                  </div>
                  <div className="flex flex-col leading-tight text-text font-medium px-3">
                    Construction & Handover
                  </div>
                </div>
              </div>
            </div>
            {/* Success Stories Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-to-r from-primary to-accent px-8 py-3 text-white shadow-2xl z-20">
              <div className="flex items-center space-x-2 font-bold text-lg">
                <Award className="h-5 w-5" />
                <span>670+ Projects Completed.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
