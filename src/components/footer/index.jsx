import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[200px]">
    <div className="relative flex justify-center z-50">
      <img src="/img/footer-desktop.png" className="absolute w-screen mobile:hidden bg-transparent" /> {/* for desktop */}
      <img src="/img/footer-mobile.png" className="absolute w-screen h-[500px] desktop:hidden tablet:hidden" /> {/* for mobile */}
      
      <div className="w-[80vw] absolute my-10">
        <div>
          <Link href={"/"}>
            <img src="/img/logo footer-mobile.png" className="w-[200px] mobile:mt-10"/>
          </Link>
        </div>

        <div className="flex justify-center gap-10">
          <div>
          <p>ABOUT US</p>
          </div>

          <div>
            <p>CONTACT</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
