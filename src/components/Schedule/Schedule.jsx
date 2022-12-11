import React from 'react'
import logo1 from "../../assets/img/extended.png"
import logo2 from "../../assets/img/lunges.png"
import logo3 from "../../assets/img/yoga-pose.png"
import {motion} from "framer-motion"
const logo =[logo1,logo2,logo3]

const Schedule = () => {

    const boxOptions={
        initial:{
          y:'150%',
          opacity:0,
        },
        whileInView:{
          y:0,
          opacity:1,
        },
        transition:{
          type:"spring",
      },
    
      }


  return (
    <div id="schedule" className='flex flex-col gap-4 items-center justify-center mx-auto my-14 mx-4  md:mx-36 md:gap-6 '>
        <div>
            <h1 className='text-3xl md:text-4xl'>Benefits of <span className='text-indigo-600'>Exercise</span></h1>
        </div>
        <div>
            <p className='text-sm px-10 text-center leading-relaxed  text-gray-500 md:px-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis vel veritatis quidem quisquam animi, ad provident ab a et nulla. </p>
        </div>
        <div className='flex flex-col gap-14 items-center justify-center  text-white bg-indigo-600 py-8 my-4 rounded-xl  px-6  md:flex-row md:px-20'  >
           {
            logo.map(l=>(
                <div className='flex flex-col items-center justify-center gap-2'>
                <img className='h-10 rounded-sm ' src={l} alt="logo" style={{backgroundColor:"white"}}/>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni qui et dolore, nostrum esse tempora.</p>
            </div>
            ))
           }
        </div>
    </div>
  )
}

export default Schedule