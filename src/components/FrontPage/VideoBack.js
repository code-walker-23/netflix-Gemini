import React from "react";
const img =
  "https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg";

const VideoBackground = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="w-screen h-screen absolute top-0 left-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Optional semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {/* Add content on top if needed */}
      <div className="relative z-10">{/* Your content goes here */}</div>
    </div>
  );
};

export default VideoBackground;
