import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 m-4">
      {Array(12).fill("").map((_, index) => (
        <div
          key={index}
          className="w-[250px] h-[300px] rounded-lg bg-gray-300 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
