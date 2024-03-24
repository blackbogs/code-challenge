"use client";

export default function ProductsPage() {
  return (
    <div>
      {/* First Section */}
      <div className="h-[650px] pt-[80px] mobile:hidden tablet:hidden">
        <div className="absolute pt-[300px] ml-[700px] text-left">
          <h1 className="text-[20px] text-gray-500] font-Monstserrat tracking-widest">OUR PRODUCTS</h1>
          <h1 className="text-[60px] font-Monstserrat text-teal-900 tracking-wide">Skincare</h1>
          <h1 className="text-[45px] font-Petit italic text-yellow-400 leading-5">Hayyu</h1>
        </div>
        <img src="/img/banner product-desktop.webp" loading="lazy" className="w-screen object-cover" />
      </div>

      <div className="pt-[80px] desktop:hidden">
        <div className="absolute text-left mt-[120px] ml-10">
          <h1 className="text-[12px] text-gray-500] font-Monstserrat tracking-widest">OUR PRODUCTS</h1>
          <h1 className="text-[30px] font-Monstserrat text-teal-900 tracking-wide">Skincare</h1>
          <h1 className="text-[30px] font-Petit italic text-yellow-400 leading-5">Hayyu</h1>
        </div>
        <img src="/img/banner product-mobile.webp" loading="lazy" className="w-screen object-cover" />
      </div>

      {/* Second Section */}
      <div className="flex  flex-col justify-center items-center w-screen h-screen pt-5 desktop:hidden">
        <h1 className="text-[20px] text-teal-900 font-Monstserrat tracking-widest">SEMUA SKINCARE</h1>
        <div className="h-screen">
          <div className="w-[255px] relative flex flex-col items-center text-center gap-[120px] pt-[50px]">
            <div className=" h-[100px]">
              <img src="/img/products (1).webp" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
              <div className="h-[40px] w-[200px] flex flex-col text-left mt-1">
                <h1 className="text-teal-900 font-semibold font-Monstserrat text-[13px]">Ampoule for White Series</h1>
                <p className=" text-gray-500 text-[13px] font-Montserrat">Rp. 200.000</p>
              </div>
              <br />
            </div>

            <div className="h-[100px]">
              <img src="/img/products (2).webp" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
              <div className="h-[40px] w-[200px] flex flex-col text-left mt-1">
                <h1 className="text-teal-900 font-semibold font-Monstserrat text-[13px]">Night Cream I</h1>
                <p className=" text-gray-500 text-[13px] font-Montserrat">Rp. 95.000</p>
              </div>
              <br />
            </div>

            <div className="h-[100px]">
              <img src="/img/products (3).webp" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
              <div className="h-[40px] w-[200px] flex flex-col text-left mt-1">
                <h1 className="text-teal-900 font-semibold font-Monstserrat text-[13px]">Light Cream</h1>
                <p className=" text-gray-500 text-[13px] font-Montserrat">Rp. 95.000</p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
