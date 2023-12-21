import { useMotionValue, motion } from "framer-motion";
import  {  useRef } from "react";
import PropTypes from 'prop-types';


export default function Nav () {

  return (
    <motion.section animate={{width : "100vw" }} transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 1.6 }} className="bg-[#faf1e8] ">
      <motion.div initial={{opacity : 0}} animate={{opacity : [0 , 0 , 0.1 , 0.4 , 0.6 , 0.8 , 1]}} transition={{duration : 3}} className="mx-auto gap-6  -rotate-90">
        <Link
          heading="Home"
          href="#"
        />
        <Link
          heading="About"
          href="#"
        />
        <Link
          heading="Events"
          href="#"
        />
        <Link
          heading="Team"
          href="#"
        />
      </motion.div>
    </motion.section>
  );
}





const Link = ({ heading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);


  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center gap-6 justify-evenly py-4  duration-200 hover:scale-150 transition-all ease-linear  md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: 130 , rotate : "90deg" },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.05,
            delayChildren: 0.10,
          }}
          className="relative z-10 block text-[#3a57fb] group-hover:text-[#915eff] text-4xl font-bold transition-colors duration-1000  md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block "
              key={i}
            >
              {l}
            </motion.span>
          ))}


          
        </motion.span>
      </div>

    </motion.a>
  );
};
Link.propTypes = {
    heading: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  };
  