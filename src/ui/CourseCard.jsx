import React from "react";
import { Clock, ArrowRight, Star } from "lucide-react";

const CourseCard = ({
  title,
  duration,
  imageUrl,
  modules = [],
  popular,
  onEnroll,
}) => {
  return (
    <div className="group bg-white rounded-4xl shadow-md hover:shadow-lg transition-all duration-500 border border-slate-100 flex flex-col gap-4 overflow-hidden">
      {/* Curved Image Header */}
      <div className="w-full aspect-square mb-4 rounded-b-full overflow-hidden group-hover:shadow-xl transition-all duration-500">
        <img
          src={imageUrl}
          alt={title}
          className="transition-transform duration-700 group-hover:scale-110"
        />

        {/* Popular Badge */}
        {popular && (
          <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
            <span>POPULAR</span>
            <Star size={10} fill="currentColor" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col px-4 pb-4">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>

        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <Clock size={16} className="text-slate-400" />
          <span>{duration}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {modules.map((mod, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200"
            >
              {mod}
            </span>
          ))}
        </div>

        {/* Centered Action Button */}
        <div className="mt-auto flex justify-center pb-2">
          <button
            onClick={onEnroll}
            className="px-8 py-2.5 bg-[#004d40] hover:bg-secondary text-white text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-2 group/btn shadow-md hover:shadow-lg"
          >
            Enroll Now
            <ArrowRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
