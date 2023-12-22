
// import { useTransform , motion, useScroll } from  "framer-motion" ;
// import { useRef } from  "react" ;
// import PropTypes from  "prop-types" ;
// import { useMotionValue, useSpring, } from "framer-motion";

// const projects = [
//     {
//       title: "NON IT EVENT",
//       description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
//       src: "image-1.jpg",
//       link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
//       color: "rgba(187, 172, 175, 1)" ,
//       color2: "rgba(187, 172, 175, .9)" 
//     },
//     {
//       title: "IT EVENT",
//       description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French htmlFor The tawny rocks).",
//       src: "image-1.jpg",
//       link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//       color: "rgba(136, 162, 141, 1)",
//       color2: "rgba(136, 162, 141, .9)"
//     },
//    ]


// const Card = ({ i , title, description, src,  color, color2 , progress, range, targetScale }) => {

//   const ref = useRef(null);

   
//   return (
//     <div ref={ref}  className="flex items-center justify-center sticky top-0 h-screen w-full">

//     <motion.div drag dragConstraints={ref} className= "hidden md:block"  >
//         <TiltCard i={i} title={title} description={description} src={src}  color={color} color2={color2} progress={progress} range={range} targetScale={targetScale} />
//     </motion.div>


//     <div className=" md:hidden ">
//         <TiltCard i={i} title={title} description={description} src={src}  color={color} color2={color2} progress={progress} range={range} targetScale={targetScale} />
//     </div>

//   </div>
  
//   );
// };
// Card.propTypes = {
//     i: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     src: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     color2: PropTypes.string.isRequired,
//     progress: PropTypes.object.isRequired,
//     range: PropTypes.arrayOf(PropTypes.number).isRequired,
//     targetScale: PropTypes.number.isRequired,
//   };



// export default function Home() {

//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: [ "start center" ,  "end end " ]
//   })
 

//   return (
//     <main ref={container}  className= "h-[400vh] border-2 border-red-500 sk"  >

//       {
//         projects.map( (project, i) => {
//           const targetScale = 1 - ( (projects.length - i) * 0.05);
//           return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
//         })
//       }
     
//     </main>
//   )
// }


// const TiltCard = ({i , title, description, src, color, color2 ,  progress, range, targetScale}) => {
  
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const rotateX = useTransform(
//     mouseYSpring,
//     [-0.5, 0.5],
//     ["19deg", "-19deg"]
//   );
//   const rotateY = useTransform(
//     mouseXSpring,
//     [-0.5, 0.5],
//     ["-19deg", "19deg"]
//   );

//   const handleMouseMove = (e) => {
//     const rect = e.target.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(xPct);
//     y.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: [ "start end" ,  "start start" ]
//   });

//   const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
//   const scale = useTransform(progress, range, [1, targetScale]);

  

//   // const orgi = i%2==0 ? "right" : "left ";
//   // const deg = i%2==0 ? "-35deg" : "35deg" ;


//   return (
//     <motion.div
//     ref={container} 
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateY,
//         rotateX,
//         transhtmlFormStyle: "preserve-3d",
//         backgroundColor: color2, 
//         scale ,
//         top:`calc(-5vh + ${i * 25}px)`
//       }}
//       // whileTap={{ rotate : deg , originX: orgi , originY: "top" }}  transition={{ type: "spring", stiffness:200, damping: 10 }}
//       className={`relative h-[30rem] w-[20rem] md:w-[60vw] md:flex justify-center items-center md:px-6  rounded-xl  text-white `} >
      
      
//       <div
//         style={{
//           transhtmlForm: "translateZ(75px)",
//           transhtmlFormStyle: "preserve-3d",
//           backgroundColor: color , 
//         }}
//         className={`absolute md:hidden inset-4 grid place-content bg-blue-500-center rounded-xl shadow-lg`}
//       >
//         <p className= "text-lg font-bold text-center" >{title}</p>
      
//         <motion.div className="w-full h-full">
//             <motion.img src={`/images/${src}`} style={{ scale: imageScale }}  alt="image" className="object-cover rounded-3xl p-8" />
//           </motion.div>

//         <p
//           style={{
//             transhtmlForm: "translateZ(50px)",
//           }}
//           className="text-center text-sm"
//         >
//           {description}
//         </p>

//       </div>



//       <div
//         style={{
//           transhtmlForm: "translateZ(75px)",
//           transhtmlFormStyle: "preserve-3d",
//           backgroundColor: color , 
//         }}
//         className={`hidden md:flex rounded-xl h-[28rem] flex-col justify-center items-center`}
//       >
       
//        <h2 className="text-center text-2xl">{title}</h2> 
//       <div className={i%2==0 ?  "flex justify-evenly mt-10 gap-10 "  :    "flex flex-row-reverse mt-10 gap-10"   }>
        
//         <div className="w-[50%] relative top-[10%] flex justify-center px-6 text-justify">
//           <p className="text-base">
//             <span className="text-4xl font-title">{description.charAt(0)}</span>
//             {description.slice(1)}
//           </p>
//         </div>

//           <motion.div className="w-[40%] ">
//             <motion.img src={`/images/${src}`} style={{ scale: imageScale }}  alt="image" className="object-cover rounded-2xl w-full h-full" />
//           </motion.div>
  
//       </div>

//       </div>



//     </motion.div>
//   );
// };
// TiltCard.propTypes = {
//     i: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     src: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     color2: PropTypes.string.isRequired,
//     progress: PropTypes.object.isRequired,
//     range: PropTypes.arrayOf(PropTypes.number).isRequired,
//     targetScale: PropTypes.number.isRequired,
//   };





export default function Events() {
  return (
    <div>Events</div>
  )
}
