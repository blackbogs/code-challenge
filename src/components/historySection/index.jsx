export default function HayyuHistory() {
  return (
    <div className="w-screen">
      <div className="desktop:hidden h-[500px] mt-[100px]">
      <h1 className="text-[30px] font-Monstserrat text-teal-900 text-center">Our History</h1>
      <img src="/img/history-mobile.webp" alt="history" loading="lazy"/>
      </div>

      <div className="mobile:hidden mt-[-100px] z-10 relative">
      <h1 className="text-[45px] font-Monstserrat text-teal-900 text-center">Our History</h1>
      <img src="/img/history-desktop.webp" alt="history" loading="lazy" className=" scale-[0.80] mt-[-150px] container mx-auto"/>
      </div>
    </div>
  );
}
