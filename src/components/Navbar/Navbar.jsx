import Logo from "../../assets/img/logo.webp"

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center px-8 lg:px-32 py-4 ' >
       <div className="flex items-center justify-center">
        <img className="h-20  md:h-12 " src={Logo} alt="gym-logo" />
        <span className="text-blue-500 font-bold tracking-wider">FitBody</span>
       </div>
       <div className="hidden md:flex gap-8 text-l font-medium  ">
            <a href="#">Home</a>
            <a href="#shedule">Schedule</a>
            <a href="#classes">Classes</a>
            <a href="#pricing">Pricing</a>
       </div>
       <div className=" hidden sm:flex gap-6 text-sm font-bold">
        <button>Login</button>
        <button className="tracking-wider text-white p-2 rounded-md bg-indigo-600" >Register</button>
       </div>
    </div>
  )
}

export default Navbar