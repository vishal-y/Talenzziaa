import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import PropTypes from "prop-types";

export const HeroScrollPreview = () => {
  return (
    <div className="flex flex-col bg-white">
      <HeroScroll />
    </div>
  );
};

export const HeroScroll = () => {

  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="h-[120vh] flex items-center justify-center relative">
      <div
        className="py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} />
        <p>vishal</p>
      </div>
    </div>
  );
};

HeroScroll.propTypes = {
  translate: PropTypes.object.isRequired,
};

export const Header = ({ translate }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      <h1 className="text-4xl font-semibold">
        Unleash the power of <br />{" "}
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
          Scroll Animations
        </span>
      </h1>
    </motion.div>
  );
};

Header.propTypes = {
  translate: PropTypes.object.isRequired,
};
