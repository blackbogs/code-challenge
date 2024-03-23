export default function DownloadOurApps() {
  return (
    <div className="w-screen h-[450px] mt-[-100px] mobile:hidden">
      {" "}
      "
      <div className="bg-[url('/img/Asset31.webp')] bg-no-repeat bg-contain h-screen absolute w-full flex flex-row gap-[200px] px-10">
        <div className="relative z-10 w-[50vw]">
          <img src="/img/handphone-desktop.webp" className="h-[510px]" />
        </div>

        <div className="w-[50vw]  mt-[150px] ml-[-200px]">
          <h1 className="text-[35px] font-Monstserrat text-teal-900 tracking-wider"> Download</h1>
          <h1 className="text-[32px] font-Petit text-yellow-500 italic tracking-widest"> Our Apps</h1>
          <div className="flex flex-row w-[200px] gap-10">
            <img src="/img/google play.svg" />
            <img src="/img/app store.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
