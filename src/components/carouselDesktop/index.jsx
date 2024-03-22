import React from 'react';
import { Carousel } from 'flowbite-react';

export default function ProductCarouselDesktop() {
  return (
    <div className="h-[450px]">
      <Carousel slide={true} slideInterval={1000}>

       <div className="flex flex-row justify-center gap-[100px]">
          <div className="w-[600px] text-center h-[500px] pt-[50px]">
            <div className="flex items-center justify-between">
               <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">ACNE FACIAL</h1>
               <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">01</p><br/>
            </div>
            <img src="/img/carousel01.jpg" className="rounded-br-[50px]" />
          </div>     

          <div className="w-[600px] text-center h-[500px] pt-[50px]">
             <div className="flex items-center justify-between">
                 <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">LED BOTANICAL ACNE</h1>
                 <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">02</p><br/>
            </div>
            <img src="/img/carousel03.jpg" className="rounded-br-[50px]" />
          </div>  
        </div>


        <div className="flex flex-row justify-center gap-[100px]">
            <div className="w-[600px] text-center h-[500px] pt-[50px]">
                <div className="flex items-center justify-between">
                <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">STARLIGHT PEEL</h1>
                    <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">03</p><br/>
                </div>
                <img src="/img/carousel02.jpg" className="rounded-br-[50px]" />
            </div>     

            <div className="w-[600px] text-center h-[500px] pt-[50px]">
            <div className="flex items-center justify-between">
            <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">WHITE REVEALED</h1>
            <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">04</p><br/>
            </div>
          <img src="/img/carousel04.png" className="rounded-br-[50px]" />
          </div>     
        </div>
       
        <div className="flex flex-row justify-center gap-[100px]">
        <div className="w-[600px] text-center h-[500px] pt-[50px]">
        <div className="flex items-center justify-between">
        <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">RF FACE LIFT</h1>
            <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">05</p><br/>
            </div>
          <img src="/img/carousel05.jpg" className="rounded-br-[50px]" />
          </div>     

          <div className="w-[600px] text-center h-[500px] pt-[50px]">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-Monstserrat text-[30px] bg-orange-200 rounded-tr-[50px] h-[50px] w-[500px] text-left pl-5 pt-1">DIAMOND INFUSION PEEL</h1>
            <p className=" text-teal-600 italic text-[30px] font-Petit font-bold">06</p><br/>
            </div>
          <img src="/img/carousel06.jpg" className="rounded-br-[50px]" />
          </div>   
          </div>  
         
      </Carousel>
    </div>
  );
}


