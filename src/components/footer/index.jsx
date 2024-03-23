import Link from "next/link";
import { MdOutlineWhatsapp, MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="h-[200px] bg-transparent">
      <div className="relative flex justify-center">
        <img src="/img/footer-desktop.webp" className="absolute w-screen mobile:hidden bg-transparent z-50" /> {/* for desktop */}
        <img src="/img/footer-mobile.webp" className=" mt-[-90px] w-screen h-[600px] bg-transparent desktop:hidden tablet:hidden" /> {/* for mobile */}

        {/* for mobile */}
        <div className="w-[80vw] absolute my-10 desktop:hidden">
          <div>
            <Link href={"/"}>
              <img src="/img/logo footer-mobile.webp" className="w-[200px] mt-[-50px]" />
            </Link>
          </div>

          <div className="flex justify-between text-white pt-5">
            <div className="grid gap-y-[6px] text-[13px] font-Monstserrat">
              <p className="pl-2">ABOUT US</p>
              <hr className="w-[120px] h-[2.5px]" />
              <p className="pl-2">TREATMENT</p>
              <hr className="w-[120px] h-[2.5px]" />
              <p className="pl-2">SKINCARE</p>
              <hr className="w-[120px] h-[2.5px]" />
              <p className="pl-2">SPECIAL OFFER</p>
              <hr className="w-[120px] h-[2.5px]" />
              <p className="pl-2">PARTNERSHIP</p>
              <hr className="w-[120px] h-[2.5px]" />
              <p className="pl-2">NEWS</p>
              <hr className="w-[120px] h-[2.5px]" />
              <p>
                DOWNLOAD <br />
                OUR APPS
              </p>
              <div className="flex flex-row w-[75px] gap-1 mt-[-25px]">
                <img src="/img/google play.svg" />
                <img src="/img/app store.svg" />
              </div>
              <p className="mt-[-30px]">
                TERMS &<br />
                CONDITIONS
              </p>
            </div>

            <div className="flex flex-col text-[13px] font-Monstserrat gap-[6px]">
              <p className="pl-2">CONTACT</p>
              <hr className="w-[120px]" />
              <div className="pl-2 text-[10px] flex flew-row items-center gap-1">
                <MdOutlineWhatsapp />
                <p>+6287870008087</p>
              </div>
              <div className="pl-2 text-[10px] flex flew-row items-center gap-1">
                <MdOutlineEmail />
                <p>info@hayyu.id</p>
              </div>
              <p className="pl-2">OUR LOCATION</p>
              <hr className="w-[120px]" />
              <p className="pl-2">CAREERS</p>
              <hr className="w-[120px]" />
              <p>
                CONNECT WITH
                <br />
                OUR SOCIAL
                <br />
                MEDIA
              </p>
              <div className="flex flex-row justify-between">
                <FaInstagram size={22} />
                <FaFacebookF size={20} />
                <FaTiktok size={22} />
                <FaYoutube size={22} />
              </div>
            </div>
          </div>
          <p className="text-center text-[10px] font-Monstserrat text-yellow-200 pt-5">
            COPYRIGHT @ 2024 PT.RUVI RIZQY BERKAH. ALL RIGHT <br /> RESERVED
          </p>
          <p className="text-center text-[10px] font-Monstserrat text-yellow-200 pt-5">CLONED BY BOGI JCWD 2702</p>
        </div>
        {/* for mobile end */}

        {/* for desktop */}
        <div className="absolute z-50 mobile:hidden">

          <div className="w-[75vw] flex flex-row justify-between mt-[120px] text-[15px] font-Monstserrat text-white">
            <div>
              <Link href={"/"}>
                <img src="/img/logo footer-mobile.webp" className="w-[200px]" />
              </Link>
            </div>

            <div className="grid gap-y-[6px] ">
              <Link href={"/about"}>
                <p className="pl-2">ABOUT US</p>
              </Link>
              <hr className="w-[300px] h-[2.5px]" />
              <p className="pl-2">TREATMENT</p>
              <hr className="w-[300px] h-[2.5px]" />
              <p className="pl-2">SKINCARE</p>
              <hr className="w-[300px] h-[2.5px]" />
              <p className="pl-2">SPECIAL OFFER</p>
              <hr className="w-[300px] h-[2.5px]" />
              <p className="pl-2">PARTNERSHIP</p>
            </div>

            <div className="grid gap-y-[6px] ">
              <p className="pl-2">NEWS</p>
              <hr className="w-[300px] h-[2.5px]" />
              <p className="pl-2">CONTACT</p>
              <hr className="w-[300px] h-[2.5px]" />
              <div className="pl-2 text-[10px] flex flew-row items-center gap-1">
                <MdOutlineWhatsapp />
                <p>+6287870008087</p>
              </div>
              <div className="pl-2 text-[10px] flex flew-row items-center gap-1">
                <MdOutlineEmail />
                <p>info@hayyu.id</p>
              </div>
              <p className="pl-2">OUR LOCATION</p>
              <hr className="w-[300px] h-[2.5px]" />
              <p className="pl-2">CAREERS</p>
            </div>

            <div className="grid gap-y-[6px] ">
              <p>CONNECT WITH OUR SOCIAL MEDIA</p>
              <hr className="w-[300px] h-[2.5px]" />
              <div className="flex flex-row justify-start gap-5">
                <FaInstagram size={22} />
                <FaFacebookF size={20} />
                <FaTiktok size={22} />
                <FaYoutube size={22} />
              </div>
              <p>DOWNLOAD OUR APPS</p>
              <hr className="w-[300px] h-[2.5px]" />
              <div className="flex flex-row w-[100px] gap-10 mt-[-25px] mx-8">
                <img src="/img/google play.svg" />
                <img src="/img/app store.svg" />
              </div>
              <p className="mt-[-30px] text-[12px] text-center">TERMS & CONDITIONS</p>
            </div>
          </div>
        <div className="pt-5">
          <p className="text-center text-[15px] font-Monstserrat text-yellow-200">
            COPYRIGHT @ 2024 PT.RUVI RIZQY BERKAH. ALL RIGHT RESERVED
          </p>
          <p className="text-center text-[10px] font-Monstserrat text-yellow-200 pt-5">CLONED BY BOGI @JCWD 2702</p>
        </div>
        </div>

        {/* for desktop end */}

      </div>
    </div>
  );
}
