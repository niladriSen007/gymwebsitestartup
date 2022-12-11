import React from 'react'
import "./Pricing.css"
const pricing = [
    {
        member:"Regular",
        price:50,
    },
    {
        member:"Premium",
        price:70,
    },
    {
        member:"Standard",
        price:100,
    }
]

const Pricing = () => {
  return (
    <div id="pricing" className='flex flex-col items-center justify-center my-40'>
        <h1 className='text-4xl '>Gym <span className='text-indigo-600'>Pricing</span> plan</h1>
        <p className='text-gray-500 my-6 mx-6 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure minima culpa<br /> explicabo sint provident quasi, corporis at doloremque aliquam totam.</p>
        <div className="card flex flex-col md:flex-row">
            {
                pricing.map(price=>(
                    <div className='border   text-center mx-8  rounded-md my-10'   style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 35px"}}>
                        <div className='top p-12'>
                            <h2 className='text-xl'>{price.member} Member</h2>
                            <span ><strong>${price.price}</strong> /month</span>
                        </div>
                        <hr className='border-gray-400'/>
                        <div className='p-12 text-left '>
                            <ul className='list-disc text-gray-500'>
                                <li>Unlimited access to the gym</li>
                                <li>Customer support</li>
                                <li>Personal trainer</li>
                                <li>Standard options</li>
                                <li>Diet chart</li>
                            </ul>
                            <button className='bg-indigo-600 text-white p-2 my-6 mx-16 rounded-md'>Join Now</button>
                        </div>
                       
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Pricing