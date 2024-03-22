"use client";

import ProductCarouselDesktop from "../components/carouselDesktop";
import ProductCarouselMobile from "../components/carouselcomp";
import SkincareCarousel from "../components/carauselSkincare";
import TestiCarousel from "../components/carouselTesti";

export default function Home() {
  return (
    <main className="bg-orange-50">
      {/* Hero section */}
      <div>
        <img src="/img/hero.webp" className="w-full h-full pt-[100px] object-cover desktop:block mobile:hidden tablet:hidden" />

        <img src="/img/hero-mobile.webp" className="object-cover w-full h-screen desktop:hidden" />
      </div>
      {/* Hero section End*/}

      {/* Second Section */}
      {/* for Desktop */}
      <div className="w-full h-screen text-center bg-orange-50 pt-[80px] mobile:hidden">
        <p className="text-[25px] text-gray-400 font-Monstserrat">OUR SERVICES</p>
        <h1 className="text-[45px] font-Monstserrat text-teal-900">We Offer A Beauty Product</h1>
        <h1 className="text-[45px] italic font-Petit text-yellow-500">And Wide Range Of Beauty Services</h1>
        <ProductCarouselDesktop />
      </div>

      {/* for Mobile */}
      <div className="w-screen h-screen text-center bg-orange-50 pt-[70px] desktop:hidden">
        <p className="text-[15px] text-gray-400 font-Monstserrat">OUR SERVICES</p>
        <h1 className="text-[35px] font-Monstserrat text-teal-900">We Offer</h1>
        <h1 className="text-[35px] font-Monstserrat text-teal-900 mt-[-20px]">A Beauty Product</h1>
        <h1 className="text-[25px] italic font-Petit text-yellow-500">And Wide Range</h1>
        <h1 className="text-[25px] italic font-Petit text-yellow-500 mt-[-5px]">Of Beauty Services</h1>
        <ProductCarouselMobile />
      </div>
      {/* Second Section Ends*/}

      {/* Third Section */}
      <div className=" relative w-screen h-screen bg-orange-50 mx-auto mobile:hidden">
        <div>
          <section className="ml-[100px]">
            <h1 className="absolute text-[20px] mt-[150px] font-Monstserrat text-gray-200">OUR BEST SELLER</h1>
            <h1 className="absolute text-[40px] mt-[200px] font-Monstserrat text-white">Show Your True Beauty</h1>
            <div className="absolute flex flex-row justify-center items-center mt-[255px] gap-[100px]">
              <h1 className="text-[50px]  font-Petit text-yellow-500 italic">With Our Products</h1>
              <hr className="w-[50vw] " />
            </div>
          </section>
        </div>

        <img src="/img/Asset17.webp" width={"100%"} className="object-cover" />
      </div>

      <div className="w-screen h-screen bg-orange-50 pt-[70px] desktop:hidden">
        <div className="bg-[url('/img/Asset17-mobile.webp')] object-cover rounded-tl-[45px] h-[150px] drop-shadow-lg">
          <div className="pt-[20px] pl-5">
            <p className="text-[13px] text-white font-Monstserrat ">OUR BEST SELLER</p>
            <h1 className="text-[33px] font-thin font-Monstserrat text-white leading-7">
              Show Your <br />
              True Beauty
            </h1>
            <h1 className="text-[25px] font-Petit text-yellow-300 italic pt-1">With Our Products</h1>
          </div>
        </div>
        <SkincareCarousel />
      </div>
      {/* Third Section Ends*/}

      {/* Fourth Section */}
      {/* for mobile */}
      <div className="w-full h-screen text-center mt-[50px] bg-[url('/img/background-testi-mobile.webp')] object-cover tablet:hidden desktop:hidden">
        <div className="flex flex-col pt-[50px]">
          <h1 className="font-extrabold text-white text-1xl font-[Poppins] tracking-widest">OUR TESTIMONIAL</h1>
          <p className="text-4xl text-teal-900 font-[Poppins] pt-1">Read Why They</p>
          <p className="pt-1 text-3xl text-yellow-400 font-Petit">Love Us So Much</p>        
          <TestiCarousel/>
        </div>
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-center bg-orange-50 pt-[80px] mobile:hidden">
        <p className="absolute text-[25px] text-white font-Monstserrat">OUR TESTIMONIAL</p>
        <img src="/img/Asset25.webp" width={"100%"} />
      </div>
      {/* Fourth Section Ends*/}

      {/* Fifth Section */}
      <div className="w-screen h-[71vh] desktop:hidden tablet:hidden">
        <div  className="flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-Monstserrat text-teal-900 pt-[50px]"> Download</h1>
          <h1 className="text-[25px] font-Petit text-yellow-500 italic "> Our Apps</h1>
          <div className="flex flex-row w-[120px] gap-2 justify-center mt-[-20px] ">
                <img src="/img/google play.svg" />
                <img src="/img/app store.svg" />
              </div>
          <img src="/img/handphone-mobile.webp" className="mt-[-50px]"/>
       
        </div>        
      </div>

      {/* Fifth Section Ends*/}

    </main>
  );
}
