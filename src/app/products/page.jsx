import Image from 'next/image'
export default function Products() {
  return (
    <div className="pt-[200px] w-[100vw] h-[100vw] text-9xl">
     <div className="mobile:hidden tablet:hidden h-screen pt-[70px]">
        <h1 className="absolute text-[20px] pt-[190px] pl-[200px] text-gray-500] font-Monstserrat">ABOUT US</h1>
        <h1 className="absolute text-[50px] pt-[200px] pl-[195px] font-[Poppins] text-teal-900">Klinik Kecantikan</h1>
        <h1 className="absolute text-[30px] pt-[255px] pl-[200px] font-Petit text-yellow-500">khusus Wanita</h1>
        <Image src="/img/banner-about-us-desktop.webp" className="w-screen h-[100vpx] object-cover" />
      </div>
    </div>
  );
}
