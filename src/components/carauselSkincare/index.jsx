import React from "react";
import { Carousel } from "flowbite-react";

function SkincareCarousel() {
  return (
    <div className="h-full px-[20px]">
      <div className="h-screen mt-[-150px] desktop:hidden">
      <Carousel slide={true} slideInterval={2000}>
        <div className="w-[255px]">

          <div className="relative flex flex-row items-center justify-between text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[40px] w-[200px] flex items-center">
              <h1 className="text-white font-semibold font-Monstserrat text-[13px] ml-2">Ampoule for White Series</h1>
            </div>
            <p className=" text-teal-600 italic text-[25px] font-Petit">01</p>
            <br />
          </div>
          <img src="/img/products (1).webp" className="rounded-br-[50px] mt-[-5px]" />

          <div className="relative flex flex-row items-center justify-between text-center h-[100px] pt-[50px]">
          <div className=" bg-orange-300 rounded-tr-[50px] h-[40px] w-[200px] flex items-center">
          <h1 className="text-white font-semibold font-Monstserrat text-[13px] ml-2">Night Cream I</h1>
            </div>
            <p className=" text-teal-600 italic text-[25px] font-Petit">02</p>
            <br />
          </div>
          <img src="/img/products (2).webp" className="rounded-br-[50px] mt-[-5px]" />

        </div>

        <div className="w-[255px]">

          <div className="relative flex flex-row items-center justify-between text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[40px] w-[200px] flex items-center">
              <h1 className="text-white font-semibold font-Monstserrat text-[13px] ml-2">Light Cream</h1>
            </div>
            <p className=" text-teal-600 italic text-[25px] font-Petit">03</p>
            <br />
          </div>
          <img src="/img/products (3).webp" className="rounded-br-[50px] mt-[-5px]" />

          <div className="relative flex flex-row items-center justify-between text-center h-[100px] pt-[50px]">
          <div className=" bg-orange-300 rounded-tr-[50px] h-[40px] w-[200px] flex items-center">
          <h1 className="text-white font-semibold font-Monstserrat text-[13px] ml-2">Ampoule for Acne Series</h1>
            </div>
            <p className=" text-teal-600 italic text-[25px] font-Petit">04</p>
            <br />
          </div>
          <img src="/img/products (4).webp" className="rounded-br-[50px] mt-[-5px]" />

        </div>

        <div className="w-[255px]">

          <div className="relative flex flex-row items-center justify-between text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[40px] w-[200px] flex items-center">
              <h1 className="text-white font-semibold font-Monstserrat text-[13px] ml-2">Night Cream II</h1>
            </div>
            <p className=" text-teal-600 italic text-[25px] font-Petit">05</p>
            <br />
          </div>
          <img src="/img/products (5).webp" className="rounded-br-[50px] mt-[-5px]" />

          <div className="relative flex flex-row items-center justify-between text-center h-[100px] pt-[50px]">
          <div className=" bg-orange-300 rounded-tr-[50px] h-[40px] w-[200px] flex items-center">
          <h1 className="text-white font-semibold font-Monstserrat text-[13px] ml-2">Tooner Normal</h1>
            </div>
            <p className=" text-teal-600 italic text-[25px] font-Petit">06</p>
            <br />
          </div>
          <img src="/img/products (6).webp" className="rounded-br-[50px] mt-[-5px]" />

        </div>
      </Carousel>
      </div>
    {/* for desktop */}
      <div className="h-[450px]">
        <Carousel slide={true} slideInterval={2000} className="mobile:hidden">
          <div className="flex flex-row justify-center gap-[100px]">
            <div className="w-[600px] text-center h-[500px] pt-[50px]">
              <div className="flex items-center justify-between">
                <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">Ampoule for White Series</h1>
                <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">01</p>
                <br />
              </div>
              <img src="/img/products (1).webp" className="rounded-br-[50px] shadow-lg" />
            </div>

            <div className="w-[600px] text-center h-[500px] pt-[50px]">
              <div className="flex items-center justify-between">
                <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">Night Cream I</h1>
                <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">02</p>
                <br />
              </div>
              <img src="/img/products (2).webp" className="rounded-br-[50px] shadow-lg" />
            </div>
          </div>

          <div className="flex flex-row justify-center gap-[100px]">
            <div className="w-[600px] text-center h-[500px] pt-[50px]">
              <div className="flex items-center justify-between">
                <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">Light Cream</h1>
                <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">03</p>
                <br />
              </div>
              <img src="/img/products (3).webp" className="rounded-br-[50px] shadow-lg" />
            </div>

            <div className="w-[600px] text-center h-[500px] pt-[50px]">
              <div className="flex items-center justify-between">
                <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">Ampoule for Acne Series</h1>
                <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">04</p>
                <br />
              </div>
              <img src="/img/products (4).webp" className="rounded-br-[50px] shadow-lg" />
            </div>
          </div>

          <div className="flex flex-row justify-center gap-[100px]">
            <div className="w-[600px] text-center h-[500px] pt-[50px]">
              <div className="flex items-center justify-between">
                <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">Night Cream II</h1>
                <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">05</p>
                <br />
              </div>
              <img src="/img/products (5).webp" className="rounded-br-[50px] shadow-lg" />
            </div>

            <div className="w-[600px] text-center h-[500px] pt-[50px]">
              <div className="flex items-center justify-between">
                <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">Tooner Normal</h1>
                <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">06</p>
                <br />
              </div>
              <img src="/img/products (6).webp" className="rounded-br-[50px] shadow-lg" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default SkincareCarousel;
