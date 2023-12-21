import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const SVGMaskEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  // required if you're trying to get this effect under a container. If it is for the entire screen then this is not required.
  const containerRef = useRef(null);

  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    // subtract the container's offset to get proper positioning
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);
  const size = isHovered ? 300 : .1;

  return (
    <motion.div
      ref={containerRef}
      className="h-screen w-screen relative"
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-[#3a57fbcd] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          // position of the mask - keeps on moving
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
            mousePosition.y - size / 2
          }px`,

          // increase size when hovered over, bigger the size bigger the background reveal.
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="absolute inset-0  object-cover h-full w-full z-0 grayscale opacity-50" />
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="max-w-4xl mx-auto text-center text-white  text-4xl font-bold relative z-20"
        >
          The first rule of MRR Club is
          you do not talk about MRR Club. The second rule of MRR Club is you DO
          NOT talk aboutMRR Club
        </p>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center  text-white">
        <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
          The first rule of MRR Club is you do not talk about MRR Club. The
          second rule of MRR Club is you DO NOT talk about MRR Club.
        </p>
      </div>
    </motion.div>
  );
};


