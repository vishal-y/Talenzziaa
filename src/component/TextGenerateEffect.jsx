import React from "react";
import PropTypes from "prop-types";
import { motion, useInView, useAnimation } from "framer-motion";

// function TextGenerateEffect() {
//   return (
//     <TextGenerateEffect
//       once
//       text="Lorem ipsum dolor sit, amet vishal consectetur adipisicing elit. At reprehenderit voluptas nesciunt placeat atque est debitis rerum, voluptatum quibusdam voluptate velit fugit reiciendis"
//       el="h1"
//       className="cr text-justify text-4xl  p-11 break-words"
//     />
//   );
// }

const TextGenerateEffect = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation,
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  React.useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView , controls ,repeatDelay]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.02 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span  key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

TextGenerateEffect.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  el: PropTypes.string,
  className: PropTypes.string,
  once: PropTypes.bool,
  repeatDelay: PropTypes.number,
  animation: PropTypes.shape({
    hidden: PropTypes.object,
    visible: PropTypes.object,
  }),
};

TextGenerateEffect.defaultProps = {
  el: "p",
  className: "",
  once: false,
  repeatDelay: null,
  animation: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  },
};

export default TextGenerateEffect;
