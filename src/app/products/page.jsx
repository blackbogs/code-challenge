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
        <img src="/img/banner product-desktop.webp" alt="banner" loading="lazy" className="w-screen object-cover" />
      </div>

      <div className="pt-[80px] desktop:hidden">
        <div className="absolute text-left mt-[120px] ml-10">
          <h1 className="text-[12px] text-gray-500] font-Monstserrat tracking-widest">OUR PRODUCTS</h1>
          <h1 className="text-[30px] font-Monstserrat text-teal-900 tracking-wide">Skincare</h1>
          <h1 className="text-[30px] font-Petit italic text-yellow-400 leading-5">Hayyu</h1>
        </div>
        <img src="/img/banner product-mobile.webp" alt="banner" loading="lazy" className="w-screen object-cover" />
      </div>

      {/* Second Section */}
      <div className="flex flex-col justify-center items-center w-screen h-screen mt-10 mb-[100px] desktop:hidden">
        <div className="bg-[#d2b690] text-white rounded-tr-[50px] h-[50px] w-[300px] flex flex-row justify-center items-center">
          <h1 className="text-[20px] font-Monstserrat tracking-widest font-[600]">SEMUA SKINCARE</h1>
        </div>
        <div className="h-screen">
          <div className="w-[255px] relative flex flex-col items-center text-center gap-[120px] pt-[50px]">
            <div className=" h-[100px]">
              <img src="/img/products (1).webp" alt="product" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
              <div className="h-[40px] w-[200px] flex flex-col text-left mt-1">
                <h1 className="text-teal-900 font-semibold font-Monstserrat text-[13px]">Ampoule for White Series</h1>
                <p className=" text-gray-500 text-[13px] font-Montserrat">Rp. 200.000</p>
              </div>
              <br />
            </div>

            <div className="h-[100px]">
              <img src="/img/products (2).webp" alt="product" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
              <div className="h-[40px] w-[200px] flex flex-col text-left mt-1">
                <h1 className="text-teal-900 font-semibold font-Monstserrat text-[13px]">Night Cream I</h1>
                <p className=" text-gray-500 text-[13px] font-Montserrat">Rp. 95.000</p>
              </div>
              <br />
            </div>

            <div className="h-[100px]">
              <img src="/img/products (3).webp" alt="product" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
              <div className="h-[40px] w-[200px] flex flex-col text-left mt-1">
                <h1 className="text-teal-900 font-semibold font-Monstserrat text-[13px]">Light Cream</h1>
                <p className=" text-gray-500 text-[13px] font-Montserrat">Rp. 95.000</p>
              </div>
              <br />
            </div>

            <div className="border-teal-700 bg-teal-700 text-white border-2 rounded-tr-[50px] rounded-bl-[50px] rounded-md h-[40px] w-[200px] flex flex-row justify-center items-center font-Monstserrat font-[500] hover:bg-teal-600">
              <button>See More..</button>
            </div>
          </div>
        </div>
      </div>

      {/* for Desktop */}
      <div className="flex justify-center items-center flex-col w-screen h-screen mb-[100px] mt-10 mobile:hidden">
        <div className="bg-[#d2b690] text-white rounded-tr-[50px] h-[50px] w-[300px] flex flex-row justify-center items-center">
          <h1 className="text-[20px] font-Monstserrat tracking-widest font-[600]">SEMUA SKINCARE</h1>
        </div>

        <div className="flex flex-row gap-10 pt-[50px]">
          <div className="w-[400px]">
            <img src="/img/products (1).webp" alt="product" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
            <div className="text-left mt-1">
              <h1 className="text-teal-900 font-light font-Monstserrat text-[25px] w-full">Ampoule for White Series</h1>
              <p className=" text-gray-800 font-Montserrat text-[20px] tracking-widest">Rp. 200.000</p>
            </div>
          </div>

          <div className="w-[400px]">
            <img src="/img/products (2).webp" alt="product" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
            <div className="text-left mt-1">
              <h1 className="text-teal-900 font-light font-Monstserrat text-[25px] w-full">Night Cream I</h1>
              <p className=" text-gray-800 font-Montserrat text-[20px] tracking-widest">Rp. 95.000</p>
            </div>
          </div>

          <div className="w-[400px]">
            <img src="/img/products (3).webp" alt="product" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
            <div className="text-left mt-1">
              <h1 className="text-teal-900 font-light font-Monstserrat text-[25px] w-full">Light Cream</h1>
              <p className=" text-gray-800 font-Montserrat text-[20px] tracking-widest">Rp. 95.000</p>
            </div>
          </div>
        </div>

        <div>
          <hr className=" bg-teal-900 w-[80vw] h-[2.5px] mt-5" />
        </div>

        <div className="flex flex-row gap-10 pt-[50px]">
          <div className="w-[400px]">
            <img src="/img/products (4).webp" alt="product" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
            <div className="text-left mt-1">
              <h1 className="text-teal-900 font-light font-Monstserrat text-[22px] w-full">Ampoule for White Series - Satuan</h1>
              <p className=" text-gray-800 font-Montserrat text-[20px] tracking-widest">Rp. 55.000</p>
            </div>
          </div>

          <div className="w-[400px]">
            <img src="/img/products (5).webp" alt="product" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
            <div className="text-left mt-1">
              <h1 className="text-teal-900 font-light font-Monstserrat text-[25px] w-full">Night Cream II</h1>
              <p className=" text-gray-800 font-Montserrat text-[20px] tracking-widest">Rp. 95.000</p>
            </div>
          </div>

          <div className="w-[400px]">
            <img src="/img/products (6).webp" alt="product" loading="lazy" className="rounded-br-[50px] mt-[-5px] shadow-lg" />
            <div className="text-left mt-1">
              <h1 className="text-teal-900 font-light font-Monstserrat text-[25px] w-full">Tooner Normal</h1>
              <p className=" text-gray-800 font-Montserrat text-[20px] tracking-widest">Rp. 85.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
