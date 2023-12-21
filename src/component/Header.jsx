// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Timer3 from "./Timer3";
import logo from '/logo.jpg'
import Nav from './Nav'
import {motion } from 'framer-motion'
// import { useRef } from "react";

// const Button = () => {
//   return (
//     <div className="px-6 py-3 z-50 bg-[#f0eff1] text-black shadow-2xl rounded-xl hover:scale-105 active:scale-90 transition-transform ease-in-out duration-200 w-fit font-medium">Register</div>
//   );
// };


// // const Ping = ()=>{
// //   return(
// //     <div className="flex h-8 w-8 absolute"><span className="animate-ping absolute h-8 w-8 -top-4 -left-4 rounded-full bg-gray-200 opacity-75"></span><span className="relative rounded-full h-8 w-8 -top-4 -left-4 bg-gray-200"></span></div>
// //   )
// // }

// const Header = () => {

//   const ref_div = useRef();

//   const changeMode = () => {
//     if (document.body.style.background == "rgb(240, 239, 241)") {
//       document.body.style.background = "black";
//       document.body.style.color = "rgb(240, 239, 241)";
//     }
//     else {
//       document.body.style.background = "rgb(240, 239, 241)";
//       document.body.style.color = "black";
//     }
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -180 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         ease: "easeInOut",
//         duration: 1,
//         delay: 0.6,
//       }}
//       ref={ref_div}
//       className='header flex  justify-center items-baseline p-8 px-32'>
//       <div className='header-inner w-[100%] flex justify-between items-center'>

//         <div className='logo z-50 text-xl font-bold tracking-wide' onClick={changeMode}>
//           <motion.img 
//           drag dragConstraints={{left : 0 , right : 0 , top : 0 , bottom : 0}} src={logo} alt="logo" className="rounded-full z-50 h-16 w-16" />
//         </div>

//         <nav className='nav flex gap-32 text-base font-semibold '>

//           <Timer3 />

//         </nav>
//         <Button />

//       </div>
//     </motion.div>
//   );
// };

// export default Header;


const Header = () => {


  const [show , setShow] = useState(false)

  function hide(){
    document.body.style.overflow = "hidden"
  }

  function vis(){
    document.body.style.overflowY = "visible"
  }

  useEffect(()=>{
    const button = document.getElementById("button");
    show ?  hide() : vis();

  button.onclick = () => {
    button.classList.toggle("toggled");
  }

  })
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header '>

      <div className='header-inner flex sm:justify-evenly md:justify-between  items-center pt-10 lg:px-32'>
        
        <motion.img drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} src={logo} alt="logo" className="rounded-full z-50 h-10 w-10 md:h-16 md:w-16" />
        <nav >
          <Timer3 />
        </nav>

        {/* <div className='hidden md:block'>
         <Button/>
        </div> */}

        <div className='z-[100] ' onClick={()=>{setShow(!show)}}>
          <button id="button">
            <div id="icon"></div>
          </button>
        </div>
        

      </div>

        <div className="fixed top-0 z-50">
        {
          show ? <Nav show={show}/> : null 
        }
        </div>

    </motion.div>
  );
};

export default Header;
