
// import { useTranshtmlForm, motion, useScroll } from  framer-motion ;
// import { useRef } from  react ;
// import PropTypes from  prop-types ;
// import { useMotionValue, useSpring, } from "framer-motion";
// import NeoCards from  ./NeoCards ;

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
//     {
//       title: "NON IT EVENT",
//       description: "Though he views photography as a medium htmlFor storytelling, Zissous images dont insist on a narrative. Both crisp and ethereal, they re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
//       src: "image-1.jpg",
//       link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
//       color: "rgba(151, 127, 109, 1)",
//       color2: "rgba(151, 127, 109, .9)",
//     },
//     {
//       title: "IT EVENT",
//       description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
//       src: "image-1.jpg",
//       link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
//       color: "rgba(194, 73, 29, 1)",
//       color2: "rgba(194, 73, 29, .9)"
//     },
//     {
//       title: "NON IT EVENT",
//       description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, all over again—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled Beginnings, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
//       src: "image-1.jpg",
//       link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-htmlForward/",
//       color: "rgba(182, 36, 41, 1)",
//       color2: "rgba(182, 36, 41, 0.9)"
//     }
//   ]


// const Card = ({ i , title, description, src,  color, color2 , progress, range, targetScale }) => {

//     const ref = useRef(null)

//   return (
//     <div ref={ref} className=" flex items-center justify-center sticky top-0 h-screen w-full">

//     <motion.div drag dragConstraints={ref} className= hidden md:block  >
//         <TiltCard i={i} title={title} description={description} src={src}  color={color} color2={color2} progress={progress} range={range} targetScale={targetScale} />
//     </motion.div>


//     <div className= md:hidden >
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
//     offset: [ start start ,  end end ]
//   })
 
//   return (
//     <main ref={container} className= border-2 border-red-500 sk  >

//       {
//         projects.map( (project, i) => {
//           const targetScale = 1 - ( (projects.length - i) * 0.05);
//           return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
//         })
//       }

// <NeoCards/>
     
//     </main>
//   )
// }


// const TiltCard = ({i , title, description, src, color, color2 ,  progress, range, targetScale}) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const rotateX = useTranshtmlForm(
//     mouseYSpring,
//     [-0.5, 0.5],
//     ["19deg", "-19deg"]
//   );
//   const rotateY = useTranshtmlForm(
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
//     offset: [ start end ,  start start ]
//   });

//   const imageScale = useTranshtmlForm(scrollYProgress, [0, 1], [2, 1]);
//   const scale = useTranshtmlForm(progress, range, [1, targetScale]);

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
//         <p className= text-lg font-bold text-center >{title}</p>
      
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
//       <div className={i%2==0 ?  flex justify-evenly mt-10 gap-10   :    flex flex-row-reverse mt-10 gap-10   }>
        
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










// export default function Events() {
//   return (
    

// <main id="event">

//   <h1>Events</h1>

//   <section>
//     <h2>2 December</h2>
//     <div className="grid-wrapper">
//       <article>
//         <h3>9:00 AM</h3>
//         <p>Life finds a way. You know what? It is beets. </p>
//       </article>
//       <article>
//         <h3>10:00 AM</h3>
//         <p>I ve crashed into a beet truck </p>
//       </article>
//       <article>
//         <h3>12:30 AM</h3>
//         <p>I was part of something special. </p>
//       </article>
//       <article>
//         <h3>13:30 AM</h3>
//         <p>Yeah, but your scientists were so preoccupied with whether or not they could, they didn t stop to think if they should. </p>
//         <img src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" alt="Black and white photo of a lake" />

//       </article>
//       <article>
//         <h3>14:30 AM</h3>
//         <p>Just my luck, no ice. God help us, we re in the hands of engineers. </p>
//       </article>
//       <article>
//         <h3>15:30 AM</h3>
//         <p>I gave it a cold? I gave it a virus. A computer virus. </p>
//       </article>
//       <article>
//         <h3>16:30 AM</h3>
//         <p>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. </p>
//       </article>
//       <article>
//         <h3>17:30 AM</h3>
//         <p>What do they got in there? King Kong?  </p>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"  alt="Black and white Mountian view" />
//       </article>
//     </div>
//   </section>

// </main>


//   )
// }



export default function Events() {
  return (
    

<div>

</div>


  )
}
