import { useEffect, useState } from "react";
import Participates from "./Admin/Participates";


export default function Admin() {

  const [show, setShow] = useState('initial')
  useEffect(()=>{
    console.log("show", show)
  },[show])

  return (
    <div className="flex">

    <div className='border  flex justify-center gap-4 flex-col border-red-400 h-screen w-[20rem]'>
    <p id="codedebug" onClick={()=>{setShow("CODE_DEBUG")}} className="p-3 py-3 text-white hover:scale-95 w-full bg-blue-500">CODE DEBUG</p>
    <p id="fasttyping" onClick={()=>{setShow("FAST_TYPING")}} className="p-3 py-3 text-white hover:scale-95 w-full bg-blue-500">FAST TYPING</p>
    </div>


    <div className="border-2 border-emerald-500 h-screen w-full">
      <Participates dbname={show} />
    </div>

    </div>
  )
}
