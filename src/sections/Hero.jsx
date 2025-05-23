import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut"
      }
    );

    gsap.to(".splash-image", {
      scale: 1.2,
      scrollTrigger: {
        trigger: ".splash-image",
        start: "top bottom", // when top of image hits bottom of viewport
        end: "bottom top", // when bottom of image hits top of viewport
        scrub: true
      },
      ease: "none"
    });
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}

        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real-World</h1>
              <h1>Web Solutions</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none ">
              Hi, my name is Carlito! Let's build your dream website!
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="work"
              text="See my Work"
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          {/* <div className="fixed bottom-20 right-20 opacity-65 z-0 ">
            <img src="/images/bg.png" alt="background" />
          </div> */}
          <div className="hero-splashImage-layout z-0">
            {/* <HeroExperience /> */}
            <img src="/images/collab3.png" alt="splash image" />
          </div>
        </figure>
      </div>

      {/* <AnimatedCounter /> */}
    </section>
  );
};

export default Hero;
