import React from 'react'
import TrainerImg from "../../assets/img/trainer.png"
const Trainer = () => {
  return (
    <div className='flex flex-col gap-14 items-center justify-center px-2 my-30 md:flex-row md:px-24' id="trainer">
        <div className='w-full'>
            <img className='' src={TrainerImg} alt="trainer" />
        </div>
        <div className=' px-4 '>
            <h2 className='text-3xl md:text-4xl'>Ready to make a <span className='text-indigo-600'>change </span>?</h2>
            <p  className='text-gray-400 my-5 leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis iusto id, repellat eius culpa aliquam corporis accusamus nemo expedita voluptatum
                 fugit debitis fugiat impedit eos mollitia. Nulla blanditiis reprehenderit placeat itaque alias. A cum, facere quae eius eligendi sunt magnam?</p>
            <button className='bg-indigo-600 text-white rounded-md p-3'>Click Here</button>
        </div>
    </div>
  )
}

export default Trainer