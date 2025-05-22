import React, { useRef } from "react";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center rounded-3xl marquee-item py-5 border-1 border-[gray] bg-white-50">
      <img className="size-18" src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const TechnologyCarousel = () => {
  const marqueeRef = useRef(null);

  const handleMouseDown = (e) => {
    const marquee = marqueeRef.current;
    marquee.isDown = true;
    marquee.startX = e.pageX - marquee.offsetLeft;
    marquee.scrollLeft = marquee.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const marquee = marqueeRef.current;
    if (!marquee.isDown) return;
    e.preventDefault();
    const x = e.pageX - marquee.offsetLeft;
    const walk = (x - marquee.startX) * 2;
    marquee.scrollLeft -= walk;
  };

  const handleMouseUp = () => {
    marqueeRef.current.isDown = false;
  };
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-white-50 text-3xl md:text-2xl font-semibold mt-15 mb-5 ">
          Technology Showcase
        </h2>
      </div>
      <div className=" relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div
          className="marquee h-52"
          ref={marqueeRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
        >
          <div className="marquee-box md:gap-8 gap-5 ">
            {[...logoIconsList, ...logoIconsList].map((icon, idx) => (
              <LogoIcon key={`${icon.name}-${idx}`} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyCarousel;
