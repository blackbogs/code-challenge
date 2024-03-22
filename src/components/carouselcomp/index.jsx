import React from "react";
import { Carousel } from "flowbite-react";

function ProductCarouselMobile() {
  return (
    <div className="mobile:h-[800px] px-[20px] mt-[-120px] desktop:hidden">
      <Carousel slide={true} slideInterval={1000}>
        <div>
          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">ACNE FACIAL</h1>
            </div>
            <p className=" text-teal-600 italic text-[30px] font-Petit">01</p><br/>
          </div>     
          <img src="/img/carousel01.jpg" className="rounded-br-[50px]" />

          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">LED BOTANICAL ACNE</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">02</p><br/>
          </div>     
          <img src="/img/carousel03.jpg" className="rounded-br-[50px]" />
        </div>

        <div>
          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">STARLIGHT PEEL</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">03</p><br/>
          </div>     
          <img src="/img/carousel02.jpg" className="rounded-br-[50px]" />

          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">WHITE REVEALED</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">04</p><br/>
          </div>     
          <img src="/img/carousel04.png" className="rounded-br-[50px]" />
        </div>

        <div>
          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">RF FACE LIFT</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">05</p><br/>
          </div>     
          <img src="/img/carousel05.jpg" className="rounded-br-[50px]" />

          <div className="relative flex flex-row items-center justify-between w-screen text-center h-[100px] pt-[50px]">
            <div className=" bg-orange-300 rounded-tr-[50px] h-[50px] w-[250px] flex items-center">
               <h1 className="text-white font-semibold font-Monstserrat text-[15px] ml-5">DIAMOND INFUSION PEEL</h1>
            </div>
            <p className="ml-[200x] text-teal-600 italic text-[30px] font-Petit">06</p><br/>
          </div>     
          <img src="/img/carousel06.jpg" className="rounded-br-[50px]" />
        </div>  
      </Carousel>
    </div>
  );
}

export default ProductCarouselMobile;
