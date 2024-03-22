import React from "react";
import { Carousel } from "flowbite-react";


function SkincareCarousel() {
  return (
    <div className="h-full px-[20px] mt-[-110px] desktop:hidden">
      <Carousel slide={true} slideInterval={1000}>
        <div>
          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">Ampoule for White Series</h1>
            </div>
            <p className=" text-teal-600 italic text-[30px] font-Petit">01</p><br/>
          </div>     
          <img src="/img/products (1).png" className="rounded-br-[50px]" />

          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">Night Cream I</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">02</p><br/>
          </div>     
          <img src="/img/products (2).png" className="rounded-br-[50px]" />
        </div>

        <div>
          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">Light Cream</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">03</p><br/>
          </div>     
          <img src="/img/products (3).png" className="rounded-br-[50px]" />

          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">Ampoule for Acne Series</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">04</p><br/>
          </div>     
          <img src="/img/products (4).png" className="rounded-br-[50px]" />
        </div>

        <div>
          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">Night Cream II</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">05</p><br/>
          </div>     
          <img src="/img/product (5).png" className="rounded-br-[50px]" />

          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">Tooner Normal</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">06</p><br/>
          </div>     
          <img src="/img/product (6).png" className="rounded-br-[50px]" />
        </div>  
      </Carousel>
    </div>
  );
}

export default SkincareCarousel;


