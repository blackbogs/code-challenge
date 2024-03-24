"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { Carousel } from "flowbite-react";
import { MdOutlineWhatsapp, MdOutlineEmail } from "react-icons/md";

export default function OurTeams() {
  const [teams, setTeams] = useState([]);

  const onFetchTeams = async () => {
    const totalTeams = 5;
    const response = await axios.get(`https://randomuser.me/api/?results=${totalTeams}`);
    const roles = [
      {
        title: "Founder",
        expertise: "Yang bikin Hayyu",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor repellat, quisquam laboriosam ex iste, eos, non eum odit possimus modi fugiat! Dolorum, doloribus hic repellat obcaecati vel quis fugit a repudiandae enim iste modi nostrum dignissimos",
      },
      {
        title: "Dokter Specialist Kulit dan Kelamin",
        expertise: "Yang punya ilmu",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor repellat, quisquam laboriosam ex iste, eos, non eum odit possimus modi fugiat! Dolorum, doloribus hic repellat obcaecati vel quis fugit a repudiandae enim iste modi nostrum dignissimos",
      },
      {
        title: "Dokter",
        expertise: "Punya ilmu juga tapi ga OP",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor repellat, quisquam laboriosam ex iste, eos, non eum odit possimus modi fugiat! Dolorum, doloribus hic repellat obcaecati vel quis fugit a repudiandae enim iste modi nostrum dignissimos",
      },
      {
        title: "General Manager",
        expertise: "Si Paling Ngatur",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor repellat, quisquam laboriosam ex iste, eos, non eum odit possimus modi fugiat! Dolorum, doloribus hic repellat obcaecati vel quis fugit a repudiandae enim iste modi nostrum dignissimos",
      },
      {
        title: "Supervisor",
        expertise: "Si Paling Galak",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor repellat, quisquam laboriosam ex iste, eos, non eum odit possimus modi fugiat! Dolorum, doloribus hic repellat obcaecati vel quis fugit a repudiandae enim iste modi nostrum dignissimos",
      },
      {
        title: "Head Store Area",
        expertise: "Yang penting dapet gaji",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor repellat, quisquam laboriosam ex iste, eos, non eum odit possimus modi fugiat! Dolorum, doloribus hic repellat obcaecati vel quis fugit a repudiandae enim iste modi nostrum dignissimos",
      },
    ];
    for (let i = 0; i < totalTeams; i++) {
      response.data.results[i].role = roles[i];
    }
    setTeams(response.data.results);
  };

  useEffect(() => {
    onFetchTeams();
  }, []);

  return (
    <div>
      <div className="h-[650px] pt-[80px] mobile:hidden tablet:hidden">
        <div className="absolute pt-[300px] pl-[200px]">
          <h1 className="text-[40px] text-teal-900 font-Monstserrat tracking-widest">Konsultasikan kondisi kulitmu</h1>
          <h1 className="text-[35px] font-Petit italic text-yellow-500 tracking-wide">Dengan Dokter Terpercaya Kami</h1>
        </div>
        <img src="/img/banner our team-desktop.webp" alt="banner" loading="lazy"  className="w-screen object-cover" />
      </div>

      <div className="desktop:hidden">
        <div className="absolute pl-[30px] pt-[150px] leading-tight">
          <h1 className="text-[25px] text-white">
            Konsultasikan <br />
            kondisi kulitmu
          </h1>

          <h1 className="text-[24px] font-Petit text-yellow-300">
            Dengan Dokter <br />
            Terpercaya Kami
          </h1>
        </div>
        <img src="/img/banner our team-mobile.webp" alt="banner" loading="lazy" className="w-screen pt-[50px]" />
      </div>

      {/* team section */}
      <div className="flex justify-center bg-orange-50 pb-[100px] mobile:mb-[100px]">
        <div className="text-center mt-[100px]">
          <div className="grid grid-cols-1 gap-[100px]">
            {teams.map((team, index) => (
              <div key={index} className="flex justify-center">
                <div className="rounded-tr-[50px] rounded-bl-[50px] w-[850px] h-[350px] mobile:w-[80vw] mobile:h-[180px] flex flex-col items-center text-center bg-gradient-to-l  from-gray-400 font-Monstserrat">
                  <Image loading="lazy" src={team.picture.large} width={100} height={100}  alt="team image" className="rounded-full size-[150px] mobile:size-[80px] object-cover m-[-50px]" />
                  <h1 className="text-teal-900 font-semibold text-[25px] mobile:text-[18px] mt-[55px]">{team.name.first}</h1>
                  <p className="text-yellow-500 text-[20px] mobile:text-[13px]">{team.role.title}</p>
                  <p className="text-[14px] font-bold tracking-wider mobile:text-[12px]">{team.role.expertise}</p>
                  <p className="font-Monstserrat text-[15px] mx-5 mobile:hidden">{team.role.description}</p>
                  <div className="pl-2 text-[20px] flex flew-row items-center gap-1 text-teal-900 mobile:text-[12px]">
                    <MdOutlineWhatsapp />
                    <p>{team.phone}</p>
                  </div>
                  <div className="pl-2 text-[20px] flex flew-row items-center gap-1 text-teal-900 mobile:text-[12px]">
                    <MdOutlineEmail />
                    <p>{team.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
