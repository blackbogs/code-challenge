import React from "react";
import { Carousel } from "flowbite-react";

function TestiCarousel() {
  return (
    <div className="h-screen mt-[-100px]">
      <Carousel slide={true} slideInterval={3000} className="desktop:hidden tablet:hidden">
        <div className="flex justify-center">
          <div className="rounded-tr-[50px] rounded-bl-[50px] w-[300px] h-[400px] flex flex-col items-center text-center gap-5 bg-gradient-to-l from-gray-400">
            <img src="/img/foto testi 1.webp" alt="foto testi" loading="lazy" className="rounded-full size-[100px] object-cover m-[-50px]" />
            <h1 className="text-teal-900 font-semibold font-Monstserrat text-[18px] ml-5 mt-[50px]">ZASKIA ADYA MECCA</h1>
            <p className="font-Monstserrat text-[15px] mx-5">Aku seneng banget waktu kemarin dateng ke Hayyu cabang bintaro untuk treatment, tempatnya tuh bersih dan super nyamaaann. Treatmentnya gak sakit sama sekali, dan hasilnya langsung terlihat! Ih happy banget ❤️ @hayyuclinic</p>
          </div>
        </div>

        <div className="flex justify-center">
        <div className="rounded-tr-[50px] rounded-bl-[50px] w-[300px] h-[400px] flex flex-col items-center text-center gap-5 bg-gradient-to-l from-gray-400">
            <img src="/img/foto testi 2.webp" alt="foto testi" loading="lazy" className="rounded-full size-[100px] object-cover m-[-50px]" />
            <h1 className="text-teal-900 font-semibold font-Monstserrat text-[18px] ml-5 mt-[50px]">CITRA KIRANA</h1>
            <p className="font-Monstserrat text-[15px] mx-5">
              Merawat kulit wajah adalah salah satu caraku untuk bersyukur atas anugerah cantik dari-Nya. Makanya, aku seneng banget ketemu @hayyuclinic yang insya Allah bisa merawat kulit wajahku!
            </p>
          </div>
        </div>

        <div className="flex justify-center">
        <div className="rounded-tr-[50px] rounded-bl-[50px] w-[300px] h-[400px] flex flex-col items-center text-center gap-5 bg-gradient-to-l from-gray-400">
            <img src="/img/foto testi 3.webp" alt="foto testi" loading="lazy" className="rounded-full size-[100px] object-cover m-[-50px]" />
            <h1 className="text-teal-900 font-semibold font-Monstserrat text-[18px] ml-5 mt-[50px]">LARISSA CHOU</h1>
            <p className="font-Monstserrat text-[15px] mx-5">
            Seneng banget akhirnya aku bisa cobain treatment di cabang terbaru Hayyu yang ada di BSD TangSel! Di sini nuansanya bikin nyaman, treatment ditemani murottal jadi hati juga terasa adem! Dan yang bikin aku makin betah, semua staff Hayyu wanita jadi treatment beneran terasa tenang tanpa was-was!
            </p>
          </div>
        </div>
      </Carousel>

      <Carousel slide={true} slideInterval={3000} className="mobile:hidden">
        <div className="flex justify-center">
          <div className="rounded-tr-[50px] rounded-bl-[50px] w-[850px] h-[400px] flex flex-col items-center text-center gap-5 bg-gradient-to-l from-gray-400">
            <img src="/img/foto testi 1.webp" alt="foto testi" loading="lazy" className="rounded-full size-[150px] object-cover m-[-50px]" />
            <h1 className="text-teal-900 font-semibold font-Monstserrat text-[25px] ml-5 mt-[50px]">ZASKIA ADYA MECCA</h1>
            <p className="font-Monstserrat text-[20px] mx-5">Aku seneng banget waktu kemarin dateng ke Hayyu cabang bintaro untuk treatment, tempatnya tuh bersih dan super nyamaaann. Treatmentnya gak sakit sama sekali, dan hasilnya langsung terlihat! Ih happy banget ❤️ @hayyuclinic</p>
          </div>
        </div>

        <div className="flex justify-center">
        <div className="rounded-tr-[50px] rounded-bl-[50px] w-[850px] h-[400px] flex flex-col items-center text-center gap-5 bg-gradient-to-l from-gray-400">
            <img src="/img/foto testi 2.webp" alt="foto testi" loading="lazy" className="rounded-full size-[150px] object-cover m-[-50px]" />
            <h1 className="text-teal-900 font-semibold font-Monstserrat text-[25px] ml-5 mt-[50px]">CITRA KIRANA</h1>
            <p className="font-Monstserrat text-[20px] mx-5">
              Merawat kulit wajah adalah salah satu caraku untuk bersyukur atas anugerah cantik dari-Nya. Makanya, aku seneng banget ketemu @hayyuclinic yang insya Allah bisa merawat kulit wajahku!
            </p>
          </div>
        </div>

        <div className="flex justify-center">
        <div className="rounded-tr-[50px] rounded-bl-[50px] w-[850px] h-[400px] flex flex-col items-center text-center gap-5 bg-gradient-to-l from-gray-400">
            <img src="/img/foto testi 3.webp" alt="foto testi" loading="lazy" className="rounded-full size-[150px] object-cover m-[-50px]" />
            <h1 className="text-teal-900 font-semibold font-Monstserrat text-[25px] ml-5 mt-[50px]">LARISSA CHOU</h1>
            <p className="font-Monstserrat text-[20px] mx-5">
            Seneng banget akhirnya aku bisa cobain treatment di cabang terbaru Hayyu yang ada di BSD TangSel! Di sini nuansanya bikin nyaman, treatment ditemani murottal jadi hati juga terasa adem! Dan yang bikin aku makin betah, semua staff Hayyu wanita jadi treatment beneran terasa tenang tanpa was-was!
            </p>
          </div>
        </div>
        
      </Carousel>

    </div>
  );
}

export default TestiCarousel;

