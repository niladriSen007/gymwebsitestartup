import React from 'react'
import Logo from "../../assets/img/logo.webp"
const Footer = () => {
  return (
    <div className='grid grid-cols-1 gap-6 px-15 md:grid-cols-5 place-items-start my-10 px-10 py-20'>
       <div className='col-start-1 col-end-3 '>
            <div className="flex items-center ">
                    <img className="h-20  md:h-12 " src={Logo} alt="gym-logo" />
                    <span className="text-blue-500 font-bold tracking-wider">FitBody</span>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate adipisci perferendis itaque nisi odit inventore non nemo earum doloribus.</p>
            </div>
       </div>
        <div>
                <h2 className='font-bold'>Company</h2>
                <p>Our Program</p>
                <p>Our Plan</p>
                <p>Become a member</p>
        </div>
        <div>
        <h2 className='font-bold'>Quick Links</h2>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Support</p>
        </div>
        <div>
        <h2 className='font-bold'>Quick Links</h2>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Support</p>
        </div>
    </div>
  )
}

export default Footer