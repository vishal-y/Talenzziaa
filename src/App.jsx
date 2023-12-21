import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./sass/main.scss";
import Header from "./component/Header"
import Loader from "./component/Loader";
import Hero from "./component/Hero";
import About from "./component/About";
import SuperMarquee from "./component/SuperMarquee";
import Events from "./component/Events";
// import { SVGMaskEffect } from "./component/SvgMaskEffect";
// import Horcar from "./component/HorizontalScrollCarousel";
import All from './threeDcomp/All'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");

      // scrollTo(0, 100)

  }, [loading]);


  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <div className="bg-gradient-to-br from-violet-500/[0.10] to-fuchsia-600/[0.010] via-transparent">
          <Header />
          <Hero/>
          <About/>
          <SuperMarquee/>

          {/* <Horcar/> */}
          <Events/>/
          <All/>

          {/* <SVGMaskEffect/> */}
          {!loading && (
            <motion.div
              className='transition-image final'
              layout
            >
              <motion.img
                transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 1.6 }}
                src={`/images/image-2.jpg`}
                layoutId='main-image-1'
              />
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;



// https://codepen.io/uzitrake/pen/XWOoxGBc