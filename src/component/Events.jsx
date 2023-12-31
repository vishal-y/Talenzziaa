import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"

const Cards = ()=>{

  return (

    <div className="bday-card">
  
  <div className="bday-decor--container">

    <motion.div  animate={{ rotate: '5deg', translateX: '20px', translateY: '45px' }} whileHover={{rotate:"-15deg"}} className="bday-pic "> 
      <motion.img src="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80" />
    </motion.div>

  </div> 


  <motion.h1 className="hover:scale-110 bday-banner">
    <span>Event</span> 
  </motion.h1> 

  <div className="bday-message bday-message--paper hover:scale-110">
    <p>Ana, yet another year that we get to celebrate together! Hope you have a great day, and may your new age be full of health, love and laughter. Love you loads</p> 
    <p className="bday-decor bday-decor--bottom-right zoom-left-in-out">🏅</p>
  </div>

</div>


  )

}

const MainEvents = ()=>{
 return (
  <div>this</div>
 )
}

export default function Events() {

  const [show, setShow] = useState(false)

  return (
    <div className="">

<div className="flex flex-col md:flex-row justify-evenly items-center">

    <Cards/> 
    <Cards/>
</div>
    
    <Link to='/form' className="p-4 bg-blue-400 border rounded-md w-fit text-white " onClick={()=>{setShow(!show)}}>show more</Link>

    {

      !show ? null :

      <MainEvents/>

    }


    </div>
  )
}

