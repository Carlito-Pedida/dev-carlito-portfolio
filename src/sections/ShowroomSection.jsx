import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowroomSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
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
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper p-5 bg-[#e1afa1] rounded-2xl">
              <a
                href="https://rometelemed.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper relative group w-fit"
              >
                <img
                  src="/images/rome.png"
                  alt="rometelemed"
                  className="transition duration-300 ease-in-out group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white outline-1 text-lg font-semibold bg-[#0462ae71] bg-opacity-60 px-4 py-2 rounded-md">
                    Go to Live Site
                  </span>
                </div>
              </a>
            </div>
            <div className="text-content">
              <a href="https://rometelemed.com/" target="_blank">
                <h2 className="hover:text-[#91a5ff] hover:underline mb-2">
                  On-demand Virtual Healthcare Services{" "}
                </h2>
              </a>

              <p className="text-white-50 md:text-xl">
                A single-page application (SPA) using Modern javaScript
                leveraging the latest technology in CSS styling and cloud
                technology
              </p>
              <p className="text-white-50 md:text-xl">
                REACT+Vite, Tailwind, HeadlessUI, Appwrite, Sentry, EmailJs, AWS
                Amplify
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#ffe7eb] p-5">
                <a
                  href="https://trip-gen-pro.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group w-fit"
                >
                  <img
                    src="/images/trip.png"
                    alt="trip"
                    className="transition duration-300 ease-in-out group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-white outline-1 text-sm font-semibold bg-[#82538a71] bg-opacity-60 px-4 py-2 rounded-md">
                      Go to Live Site
                    </span>
                  </div>
                </a>
              </div>
              <a href="https://trip-gen-pro.vercel.app/" target="_blank">
                <h2 className="hover:text-[#91a5ff] hover:underline cursor-pointer ">
                  AI Trip Generator
                </h2>
              </a>
              <p className="text-white-50 md:text-xl">
                REACT+Vite, Tailwind, OpenAI, Appwrite, SyncFusion, Stripe,
                Vercel
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#d1e3d6] p-5">
                <a
                  href="https://worship-grid-ui.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group w-fit"
                >
                  <img
                    src="/images/projects/interview.png"
                    alt="worship grid"
                    className="transition duration-300 ease-in-out group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-white outline-1 text-sm font-semibold bg-[#05592842] bg-opacity-60 px-4 py-2 rounded-md">
                      Go to Live Site
                    </span>
                  </div>
                </a>
              </div>

              <a href="https://worship-grid-ui.vercel.app/" target="_blank">
                <h2 className="hover:text-[#91a5ff] hover:underline cursor-pointer ">
                  Interview AI
                </h2>
              </a>

              <p className="text-white-50 md:text-xl">
                Next.JS, Google Gemini, VAPI, Firebase, Tailwind, Shadcn/ui,
                Vercel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowroomSection;
