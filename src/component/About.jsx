import { useEffect, useState } from 'react'
import demo from '/demo.jpg'
import { motion } from 'framer-motion'
import TextGenerateEffect  from './TextGenerateEffect'

export default function About() {

  const [show, setShow] = useState(false)

  useEffect(()=>{
    
  },[show])

  return (
    <div className=''>

     <div className='hidden md:flex justify-center items-center'>


     <motion.div className='grid grid-cols-3 h-[90vh]'>
        {/* ref={ref} style={{scale : scrollYProgress , opacity : scrollYProgress}} */}

        <motion.div className='flex flex-col justify-center  items-center'>

          <div className='flex lg:mt-[15rem] justify-center items-center'>
            <motion.img onMouseEnter={()=>{setShow(!show)}} onMouseLeave={()=>{setShow(!show)}}  id="about_img" initial={{ x: -300, y: 40, rotate: "23deg" }} whileInView={{ x: 0, y: 0, rotate: "-23deg" }} transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 0.6 }} whileHover={{ scale: 1.2, rotate: "0deg" }} src={demo} alt="demo" className='[filter:grayscale(1)] shadow-2xl hover:[filter:grayscale(0)] hover:rounded-none hover:mb-[5rem] mb-[2rem] hover:ml-[15rem] lg:h-72 rounded-xl z-20 rotate-[-23deg]  hover:rotate-[0deg] transition-all ease-linear' />
            {/* <p className='absolute bg-[#3a57fb] text-white p-4 h-16 w-16 text-sm flex justify-center items-center rounded-full'>hover</p> */}
          </div>

        </motion.div>

        {/* <motion.p className="cr flex justify-center items-center md:text-3xl ml-10 mt-10 lg:text-5xl  break-words ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At reprehenderit voluptas nesciunt placeat atque est debitis rerum, voluptatum quibusdam voluptate velit fugit reiciendis</motion.p> */}
        <TextGenerateEffect
      once
      text="Lorem ipsum dolor sit, amet vishal consectetur adipisicing elit. At reprehenderit voluptas nesciunt placeat atque est debitis rerum, voluptatum quibusdam voluptate velit fugit reiciendis"
      el="h1"
      className="cr flex justify-center items-center md:text-3xl ml-10 mt-10 lg:text-5xl  break-words "
    />


        <motion.div className='flex justify-evenly items-center'>
          <motion.img onMouseEnter={()=>{setShow(!show)}} onMouseLeave={()=>{setShow(!show)}} initial={{ x: 300, y: -20, rotate: "24deg" }} whileInView={{ x: 0, y: 0, rotate: "24deg" }} transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 0.5, delay: .3 }} whileHover={{ scale: 1.2, rotate: "0deg" , position : "relative" }} src={demo} alt="demo" className='[filter:grayscale(1)] hover:[filter:grayscale(0)] hover:mt-[-10rem] hover:mr-[5rem] hover:rounded-none shadow-2xl lg:h-72 mt-[-5rem] z-20 rounded-xl rotate-[24deg] transition-all ease-linear' />
        </motion.div>

      </motion.div>

      <div className={show ? 'absolute h-[80%] rounded-xl w-[50%]  bg-[#f5eae8]/5 backdrop-blur-sm' : "hidden"}>
      </div>

     </div>

     <div className='mt-[4rem] md:hidden justify-center items-center'>

     <motion.div className=' flex flex-col justify-center items-center  h-[90vh]'>

        {/* <motion.p className="cr p-10 text-justify  flex justify-center items-center text-3xl relative ">Lorem ipsum dolor sit, amet vishal consectetur adipisicing elit. At reprehenderit voluptas nesciunt placeat atque est debitis rerum, voluptatum quibusdam voluptate velit fugit reiciendis</motion.p> */}
        {/* <TextGenerateEffect myWords={"Lorem ipsum dolor sit, amet vishal consectetur adipisicing elit. At reprehenderit voluptas nesciunt placeat atque est debitis rerum, voluptatum quibusdam voluptate velit fugit reiciendis"} /> */}
        <TextGenerateEffect
      once
      text="Lorem ipsum dolor sit, amet vishal consectetur adipisicing elit. At reprehenderit voluptas nesciunt placeat atque est debitis rerum, voluptatum quibusdam voluptate velit fugit reiciendis"
      el="h1"
      className="cr text-justify text-4xl  p-11 break-words"
    />


        <motion.img onMouseEnter={()=>{setShow(!show)}} onMouseLeave={()=>{setShow(!show)}}  id="about_img" initial={{ x: -300, y: 40, rotate: "23deg" }} whileInView={{ x: 0, y: 0, rotate: "-23deg" }} transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 0.6 }} whileHover={{ scale: 1.2, rotate: "0deg" }} src={demo} alt="demo" className='[filter:grayscale(1)] shadow-2xl hover:[filter:grayscale(0)] hover:rounded-none hover:mt-[-5rem] relative rounded-xl z-20 rotate-[-23deg] h-44 hover:rotate-[0deg] transition-all ease-linear' />

        <div className={show ? 'absolute h-[90%] rounded-xl w-[100%] bg-[#f5eae8]/5 backdrop-blur-sm' : "hidden"}>
      </div>

      </motion.div>

      

   

     </div>

    </div>
  )
}
