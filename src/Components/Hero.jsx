import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const container = useRef();
  const image = useRef();
  const heading = useRef();
  const subtext = useRef();
  const button = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      container.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 0.8 }
    )

  }, []);

  return (
    <div className="transform-gpu will-change-transform min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500">
      <section ref={container}>
        <img ref={image} src="/monkey.png" alt="Monkey" className="mx-auto mb-6 w-32 md:w-40" />
        <div className="text-center text-white max-w-3xl">
          <h1
            ref={heading}
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide leading-tight drop-shadow-md"
          >
            Transform Ideas <br /> Into Animated Reality
          </h1>
          <p
            ref={subtext}
            className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-sm"
          >
            Crafting stunning web experiences with GSAP and Tailwind. Engage
            your audience like never before.
          </p>
          <button
            ref={button}
            className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-100 transition-all duration-300 rounded-full text-lg font-semibold shadow-lg hover:scale-110"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
