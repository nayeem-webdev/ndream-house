import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const stats = [
    { label: "Years Experience", value: 14 },
    { label: "Visa Success", value: 670 },
    { label: "Countries", value: 20 },
  ];

  return (
    <div className="w-full bg-primary/10">
      {/* 1. Statistics Row: Using justify-around */}
      <div className="relative">
        {/* The Stats Wrapper */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10">
          <div
            ref={ref}
            className="max-w-6xl mx-auto flex flex-wrap justify-around items-center px-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border-2 min-w-50 rounded-xl bg-primary/10 backdrop-blur-md text-primary p-6 text-center flex flex-col items-center shadow-xl"
              >
                <span className="text-5xl font-bold">
                  {inView ? (
                    <CountUp start={0} end={stat.value} duration={2.5} />
                  ) : (
                    0
                  )}
                  +
                </span>
                <p className="text-lg font-medium text-slate-800 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Visual Section */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src="https://i.ibb.co.com/whVyk0cq/Hero-Banner-Skyless-2500.png"
          alt="Successful Graduate"
          className="h-auto w-full max-w-4xl transition-transform duration-700"
        />
      </div>
    </div>
  );
};

export default Achievement;
