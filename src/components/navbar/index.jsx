"use client"

import Link from "next/link";
import { useState } from "react";
import { Twirl as Hamburger} from 'hamburger-react';
import { GiCircle } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false) 
  
   
  return (
    <div className="fixed w-screen z-50">

    <div className="relative flex justify-center">
      <img src="/img/Asset2.webp" className="absolute h-[150px] w-screen mobile:hidden" /> {/* for desktop */}
      <img src="/img/Asset2-mobile.webp" className="absolute desktop:hidden tablet:hidden" /> {/*for mobile */}
      
      <div className="absolute flex flex-row items-center justify-between w-[80vw] pt-3 mobile:pt-3">
        <div className="mobile:w-[110px] mobile:h-[80px] desktop:w-[135px] desktop:h-[90px] tablet:h-[70px] tablet:flex">
          <Link href={"/"}>
          <img src="/img/home-icon.webp" />
          </Link>
        </div>

        <div>
          <ul className="flex flex-row items-center gap-3 text-white font-Montserrat mobile:hidden desktop:text-[18px]">
            <li><Link href={"/about"}>ABOUT US</Link></li>
            <GiCircle size={6} />
            <li><Link href={"/products"}>PRODUCTS</Link></li>
            <GiCircle size={6} />
            <li><Link href={"/ourteams"}>OUR TEAMS</Link></li>
          </ul>
        </div>

        <div className="cursor-pointer desktop:hidden tablet:hidden">
          <Hamburger size="30" color="white" rounded duration={0.2} toggled={isOpen} toggle={setOpen}></Hamburger>
          <ul className={`${isOpen ? "origin-right translate-x-[-110px] transition ease-linear mt-[20px]" : "origin-right translate-x-[100vw] transition ease-linear mt-[20px] overflow-hidden"}
                        bg-[url(/img/menu-bg-mobile.webp)] bg-no-repeat absolute flex flex-col gap-y-4 items-center w-[200px] h-screen py-5 font-bold font-Monstserrat text-white`}>
            <li><Link href={"/about"}>ABOUT US</Link></li>
            <li><Link href={"/products"}>PRODUCTS</Link></li>            
            <li><Link href={"/ourteams"}>OUR TEAMS</Link></li>
          </ul>         
        </div>    
        
      </div>

      
       
    </div>
   </div>
  );
}

export default Navbar