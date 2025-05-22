import React, { useRef } from "react";
import { projectIconsList } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectsGrid = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const largeBox1Ref = useRef(null);
  const largeBox2Ref = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      rydeRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
      largeBox1Ref.current,
      largeBox2Ref.current
    ];

    cards.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100"
          }
        }
      );
    });
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-white-50 text-3xl md:text-2xl font-semibold mb-5 ">
          More projects...
        </h2>
      </div>
      <div
        id="work"
        ref={sectionRef}
        className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-5 mx-2 md:mx-15"
      >
        {/* Left Side: 4 Small Boxes */}
        <div
          className="grid md:grid-cols-2 grid-rows-2 gap-4 md:col-span-1 "
          ref={libraryRef}
        >
          {projectIconsList.slice(0, 4).map((project, idx) => (
            <div
              key={idx}
              className="border-1 border-[#4a4a5a]  rounded-md p-3 flex-col items-center justify-center text-xl font-semibold shadow-md"
            >
              <a
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper relative group w-fit"
              >
                <img
                  src={project.imgPath}
                  alt={project.name}
                  className=" bg-blue-200 p-3 rounded-md mb-2 transition duration-300 ease-in-out group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white outline-1 text-lg font-semibold bg-[#0462ae71] bg-opacity-60 px-4 py-2 rounded-md">
                    Go to Live Site
                  </span>
                </div>
              </a>
              <a
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white-50 text-sm md:text-lg hover:text-[#91a5ff] hover:underline ">
                  {project.name}
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* Right Side: 2 Large Boxes */}
        <div className="flex flex-col md:flex-row gap-4 ">
          <div
            ref={largeBox1Ref}
            className="border-1 border-[#4a4a5a]  rounded-md p-3  flex flex-col  items-center justify-center text-2xl font-bold shadow-md"
          >
            {projectIconsList.slice(7, 8).map((project, idx) => (
              <div key={idx}>
                <div
                  key={idx}
                  className="bg-blue-200 rounded-md p-6 items-center justify-center text-xl font-semibold shadow-md mb-2"
                >
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image-wrapper relative group w-fit"
                  >
                    <img
                      src={project.imgPath}
                      alt={project.name}
                      className=" transition duration-300 ease-in-out group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <span className="text-white outline-1 text-lg font-semibold bg-[#0462ae71] bg-opacity-60 px-4 py-2 rounded-md">
                        Go to Live Site
                      </span>
                    </div>
                  </a>
                </div>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-white-50 text-sm md:text-lg hover:text-[#91a5ff] hover:underline cursor-pointer ">
                    {project.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
          <div
            ref={largeBox2Ref}
            className="border-1 border-[#4a4a5a]  rounded-md p-3 flex  flex-col items-center justify-center text-2xl font-bold shadow-md"
          >
            {projectIconsList.slice(8, 9).map((project, idx) => (
              <div key={idx}>
                <div
                  key={idx}
                  className="bg-blue-200 rounded-md p-6 flex items-center justify-center text-xl font-semibold shadow-md mb-2"
                >
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image-wrapper relative group w-fit"
                  >
                    <img
                      src={project.imgPath}
                      alt={project.name}
                      className=" transition duration-300 ease-in-out group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <span className="text-white outline-1 text-lg font-semibold bg-[#0462ae71] bg-opacity-60 px-4 py-2 rounded-md">
                        Go to Live Site
                      </span>
                    </div>
                  </a>
                </div>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-white-50 text-sm md:text-lg hover:text-[#91a5ff] hover:underline cursor-pointer ">
                    {project.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div
          className="grid md:grid-cols-3 grid-rows-1 gap-4 xl:col-span-2 w-full"
          ref={ycDirectoryRef}
        >
          {projectIconsList.slice(4, 7).map((project, idx) => (
            <div
              key={idx}
              className="border-1 border-[#4a4a5a]  rounded-md p-3 flex-col items-center justify-center text-xl font-semibold shadow-md"
            >
              <a
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper relative group w-fit"
              >
                <img
                  src={project.imgPath}
                  alt={project.name}
                  className=" bg-blue-200 p-3 rounded-md mb-2 transition duration-300 ease-in-out group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white outline-1 text-lg font-semibold bg-[#0462ae71] bg-opacity-60 px-4 py-2 rounded-md">
                    Go to Live Site
                  </span>
                </div>
              </a>
              <a
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white-50 text-sm md:text-lg hover:text-[#91a5ff] hover:underline ">
                  {project.name}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsGrid;
