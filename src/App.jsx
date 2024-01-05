import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./sass/main.scss";
import Header from "./component/Header"
import Loader from "./component/Loader";
import Hero from "./component/Hero";
import About from "./component/About";
import SuperMarquee from "./component/SuperMarquee";
import Events from "./component/Events";
import { SVGMaskEffect } from "./component/SvgMaskEffect";
// import Horcar from "./component/HorizontalScrollCarousel";
import All from './threeDcomp/All'
import Footer from "./component/Footer";
import bg from '/bg.mp4'


function App() {
  const [loading, setLoading] = useState(false);

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
          <div className="flex  justify-center items-center">

            <div className="absolute top-4 w-screen z-50">
          <Header />
          <Hero/>
            </div>

            <div className="flex justify-center items-center">
              <div className="absolute h-screen w-screen bg-black/20">

              </div>
    <div>
    <video className="h-screen w-screen object-cover" loop autoPlay muted >
  <source src={bg} type="video/mp4" />
  <source src={bg} type="video/ogg "/>
Your browser does not support the video tag.
</video>
    </div>
      </div>

          </div>
          
          <About/>
          <SuperMarquee/>

          {/* <Horcar/> */}
          <Events/>
          <SVGMaskEffect/>    
          {/* <All/> */}

          
          <Footer/>
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

