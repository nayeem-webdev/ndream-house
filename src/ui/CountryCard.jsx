import React from "react";

const CountryCard = ({ data }) => {
  return (
    <>
      <div
        className="relative w-65 h-100 overflow-hidden rounded-xl shadow-lg flex flex-col justify-end"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative h-[40%] w-full backdrop-blur-xs bg-linear-to-t from-black/70 via-black/50 to-transparent p-4 flex flex-col justify-end text-white">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">{data.country}</h2>
            <div className="text-sm space-y-0.5">
              <div className="flex justify-between items-center">
                <span className="opacity-90">Living:</span>
                <span className="font-semibold">{data.living}/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-90">Tuition:</span>
                <span className="font-semibold">{data.tuition}/year</span>
              </div>
            </div>

            <button className="w-full py-3 bg-white/30 backdrop-blur-xl text-white font-semibold rounded-lg hover:bg-black/30 transition-colors mt-2">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
