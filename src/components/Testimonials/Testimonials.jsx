import Avatar1 from "../../assets/img/avatar01.png"
import Avatar2 from "../../assets/img/avatar02.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Testimonials.css";

// import required modules
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <>
    <h1 className="text-4xl text-center py-12 font-bold">Testimonials</h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col p-8 items-start gap-1">
               <div className="bg-gray-200">
                    <img className="w-full h-full"  src={Avatar1} alt="avatar" />
               </div>
               <span className="text-gray-500 tracking-tight">Amanda Cerny</span>
                <span className="text-sm text-left text-gray-500 font-light tracking-tighter">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, dolor.</span>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-8 items-start gap-1">
               <div className="bg-gray-200">
                    <img className="w-full h-full"  src={Avatar2} alt="avatar" />
               </div>
               <span className="text-gray-500 tracking-tight">Ramya Nany</span>
                <span className="text-sm text-left text-gray-500 font-light tracking-tighter">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, dolor.</span>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-8 items-start gap-1">
               <div className="bg-gray-200">
                    <img className="w-full h-full"  src={Avatar1} alt="avatar" />
               </div>
               <span className="text-gray-500 tracking-tight">Alexa Cerny</span>
                <span className="text-sm text-left text-gray-500 font-light tracking-tighter">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, dolor.</span>
        </SwiperSlide>
        


      </Swiper>
    </>
  );
}
