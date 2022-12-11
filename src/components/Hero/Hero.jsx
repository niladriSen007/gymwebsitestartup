import React from 'react'
import Avatar from "../../assets/img/gym-02.png"
import {motion} from "framer-motion"
import {BsHeartFill} from "react-icons/bs"
import {BiCurrentLocation} from "react-icons/bi"
import "./Hero.css"


const Hero = () => {

  const headingOptions={
    initial:{
      x:'-100%',
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    },
    transition:{
      type:"spring",
      
  }
  }


  const imageContainerOptions={
    initial:{
      x:'100%',
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    },
    transition:{
      type:"spring",
      
  }
  }


  const buttonOneOptions={
    initial:{
      y:'-100%',
      opacity:0,
    },
    whileInView:{
      y:0,
      opacity:1,
    },
    transition:{
      type:"spring",
      delay:.6,
  },

  }

  const buttonTwoOptions={
    ...buttonOneOptions,
    initial:{
      x:'100%',
    },
    whileInView:{
      x:'0',
    },
    transition:{
      delay:.6,
      type:"spring",
    }

  }

  return (
    <div className='flex justify-between px-2 py-2  items-center   sm:flex-row  md:px-20 flex-col md:py-14'>
        <motion.div className='flex flex-col justify-start items-start p-16 gap-3 ' {...headingOptions}>
            <h1 className='text-4xl text-black opacity-90 leading-tight tracking-tight md:text-5xl'>Exercise is the key to a<br />  <span className='text-indigo-600'>Healthy</span> lifestyle</h1>
            <p className='text-gray-400 text-sm font-light tracking-wide py-6  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Mollitia repellendus tempore in quod aliquid aperiam nulla?</p>
            <div className='flex items-center justify-between gap-4' >
                <button className=' border-2 border-indigo-500 p-2 rounded-md text-sm  md:text-xl text-indigo-600'>Get Started</button>
                <button className=' border-2 border-indigo-600 tracking-wider text-white p-2 rounded-md bg-indigo-500 text-sm  md:text-xl watch-me'>Watch video</button>
            </div>
        </motion.div>
        <motion.div className='image1' {...imageContainerOptions}>
            <img className='h-90 flex-1  image' src={Avatar} alt="avatar" />
            <motion.div  {...buttonOneOptions} className="box-1  p-2 absolute top-10 left-5 bg-white text-black  rounded-md" style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 35px"}} >
              <span className='flex items-center justify-content gap-1'>  Heart Rate <BsHeartFill className='heart'/></span>
            </motion.div>
            <motion.div {...buttonTwoOptions} className="box-1   p-2 absolute top-48 right-5 bg-white text-black rounded-md overflow-hidden" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <span className='flex flex-col items-center justify-center gap-1 text-l'>  Find Gym<br /> Near You <BiCurrentLocation className='location h-6 text-3xl'/></span>
            </motion.div>
            {/* <div className="box-1  w-30 p-2 absolute top-10 left-10 bg-white text-black rounded-md" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <span className='flex items-center justify-content gap-1'>  Heart Rate <BsHeartFill className='heart'/></span>
            </div> */}
        </motion.div>
    </div>
  )
}

export default Hero