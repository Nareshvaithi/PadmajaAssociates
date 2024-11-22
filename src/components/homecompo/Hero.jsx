import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay} from 'swiper/modules';
import "swiper/css"; // Import Swiper styles
import { heroslider } from "../../store/store";


const Hero = () => {
  return (
    <div className="pt-28 bg-litegold w-full h-auto md:h-screen bg-cover bg-center bg-no-repeat flex items-center">
      <div className="container flex flex-col gap-5 md:flex-row md:gap-0">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold font-headfont leading-tight">
            Secure Your Future, 
            <span className="block font-semibold">the Smart Way with</span> 
            <span className="block font-semibold">Padmaja Associates</span>
          </h1>
          <div className="py-5">
            <p className="font-contentfont font-bold text-sm md:text-xl leading-relaxed">
              Comprehensive Insurance Solutions Under One Roof
            </p>
            <p className="font-contentfont text-sm md:text-lg leading-relaxed">
                At Padmaja Associates, your peace of mind is our priority. We offer budget-friendly coverage tailored to your needs, ensuring a seamless and stress-free experience.
              <span className="md:block py-3">
                Explore our wide range of insurance options and secure your future with confidence.
              </span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-3 md:gap-5">
            <div className="w-full md:w-1/2 flex justify-center items-center border border-gold px-2 md:px-2 py-2 rounded-xl text-white bg-gold hover:bg-white hover:text-gold font-contentfont font-semibold text-sm md:text-xl transition-all duration-300 hover:scale-110 group">
                <button>Get a Quote</button>
                <span className="opacity-0 group-hover:opacity-100 group-hover:animate-bounce-x">
                <MdOutlineKeyboardDoubleArrowRight />
                </span>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center border border-gold px-2 md:px-2 py-2 rounded-xl text-white bg-gold hover:bg-white hover:text-gold font-contentfont font-semibold text-sm md:text-xl transition-all duration-300 hover:scale-110 group">
              <button>Explore our services</button>
              <span className="opacity-0 group-hover:opacity-100 group-hover:animate-bounce-x">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
        <h1 className="text-center text-2xl md:text-4xl font-light font-headfont">Proudly Serving You With</h1>
          <Swiper
          modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {heroslider.map(({id,icon,title})=>(
                <SwiperSlide key={id} className="flex justify-center items-center cursor-grab">
                    <div className="w-[150px] md:w-[300px] mx-auto text-center">
                        <img className="w-full" src={icon} alt="" />
                        <h1 className="text-3xl font-contentfont text-gold font-bold">{title}</h1>
                    </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
