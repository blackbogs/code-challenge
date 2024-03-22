export default function AboutUs() {
  return (
    <div className="pt-[20px] w-full h-full">
      {/* 1st section */}

      {/* for mobile */}
      <div className="desktop:hidden">
        <h1 className="absolute text-1xl pt-[150px] pl-[30px] text-gray-500">ABOUT US</h1>
        <h1 className="absolute text-[35px] pt-[170px] pl-[30px] font-[Poppins] text-teal-900 font-thin">Klinik Kecantikan</h1>
        <h1 className="absolute text-[24px] pt-[205px] pl-[30px] font-Petit text-yellow-500">khusus Wanita</h1>
        <img src="/img/banner-about-us-mobile.jpg" className="w-screen pt-[50px]" />
      </div>

      {/* for desktop */}
      <div className="mobile:hidden tablet:hidden h-screen pt-[70px]">
        <h1 className="absolute text-[20px] pt-[190px] pl-[200px] text-gray-500] font-Monstserrat">ABOUT US</h1>
        <h1 className="absolute text-[50px] pt-[200px] pl-[195px] font-[Poppins] text-teal-900">Klinik Kecantikan</h1>
        <h1 className="absolute text-[30px] pt-[255px] pl-[200px] font-Petit text-yellow-500">khusus Wanita</h1>
        <img src="/img/banner-about-us-desktop.webp" className="w-screen h-[100vpx] object-cover" />
      </div>
      {/* 1st section end*/}

      {/* 2nd section*/}      
        {/* visi misi mobile */}
        <div>
        <div className="w-[80vw] h-full desktop:hidden mx-10">
          <img src="/img/Asset9-mobile.png" className="mt-[20px] scale-[0.9]" />
          <h1 className="font-[Poppins] text-teal-950 font-thin text-[30px]">Merawat tanpa</h1>
          <div className="flex flex-row items-center">
            <p className="font-Petit text-yellow-500 font-bold text-[20px] w-[50vw]">Was Was</p>
            <hr className="bg-teal-900 h-[2px] w-[100vw]" />
          </div>

          <p className="pt-5 text-justify text-[15px] text-gray-600">
            Merawat diri merupakan salah satu cara untuk bersyukur atas karunia dari-Nya. Termasuk menjaga kesehatan kulit wajah di klinik kecantikan. Tapi sebagai wanita, sering muncul keraguan.
          </p>

          <p className="text-teal-950 text-[16px] pt-3">Apa benar prosedur perawatanku aman & nyaman?</p>

          <p className="pt-5 text-justify text-[15px] text-gray-600">
            Tak perlu was-was! Hayyu hadir menjawab keresahanmu dengan menghadirkan produk dan pelayanan yang kamu butuhkan. Hanya fokus merawat kesehatan alami kulit wajah, Hayyu tidak berlebihan, tanpa treatment pembentukan wajah baik
            menambah/ mengurangi. Hayyu berkomitmen menghadirkan produk & jasa terpercaya yang tidak bertentangan dengan nilai-nilai Islam dan tentunya aman & nyaman untuk wanita Indonesia.
          </p>

          <div className="flex flex-row items-center gap-3 pt-5">
            <h1 className="font-Petit text-yellow-500 font-bold text-[20px] w-[50px]">Visi</h1>
            <hr className=" bg-teal-900 w-[100vw] h-[2px]" />
          </div>

          <p className="pt-1 text-justify text-[15px] text-gray-600">Menjadi klinik kecantikan yang memberikan rasa syukur dan percaya diri kepada wanita Indonesia.</p>

          <div className="flex flex-row items-center gap-3 pt-5">
            <h1 className="font-Petit text-yellow-500 font-bold text-[20px] w-[50px]">Visi</h1>
            <hr className=" bg-teal-900 w-[100vw] h-[2px]" />
          </div>

          <ul className="pt-1 text-justify text-[15px] text-gray-600 list-disc ml-3 grid gap-2">
            <li>Memberikan kontribusi positif kepada masyarakat dengan mensyiarkan akhlak wanita dalam hal kecantikan. </li>
            <li>Senantiasa menghasilkan produk dan jasa yang terpercaya dan selalu menyesuaikan dengan nilai-nilai Islam. </li>
            <li>Membangun lembaga kewirausahaan yang berorientasi pada keberkahan rizqy untuk seluruh stakeholder. </li>
            <li>Membangun komunitas dalam lingkungan kerja dimana akhlak dan ketakwaan menjadi pondasi utama. </li>
          </ul>
        </div>
        {/* visi misi mobile end*/}

        {/* visi misi desktop */}
        <div className="flex flex-row h-screen justify-between mobile:hidden tablet:hidden">

          <div className="">
            <img src="/img/Asset9.webp" className="w-[45vw] h-full flex justify-center" />
          </div>

          <div>
            <h1 className="font-[Poppins] text-teal-900 text-[60px] pt-[100px] font-thin">Merawat tanpa</h1>
            <div className="flex flex-row items-center gap-3 w-screen">
              <h1 className="font-Petit text-yellow-500 text-[30px] font-bold">Was Was</h1>
              <hr className=" bg-teal-900 w-[600px] h-[2.5px]" />
            </div>
            <p className="pt-5 text-justify pr-8 text-xl text-gray-600">
              Merawat diri merupakan salah satu cara untuk bersyukur atas karunia dari-Nya. Termasuk menjaga kesehatan kulit wajah di klinik kecantikan. Tapi sebagai wanita, sering muncul keraguan.
            </p>
            <p className="text-teal-900 text-[30px] pt-5">Apa benar prosedur perawatanku aman & nyaman?</p>

            <p className="pt-5 text-justify pr-5 text-xl text-gray-600">
              Tak perlu was-was! Hayyu hadir menjawab keresahanmu dengan menghadirkan produk dan pelayanan yang kamu butuhkan. Hanya fokus merawat kesehatan alami kulit wajah, Hayyu tidak berlebihan, tanpa treatment pembentukan wajah baik
              menambah/ mengurangi. Hayyu berkomitmen menghadirkan produk & jasa terpercaya yang tidak bertentangan dengan nilai-nilai Islam dan tentunya aman & nyaman untuk wanita Indonesia.
            </p>

            <div className="flex flex-row items-center gap-3 pt-20">
              <h1 className="font-Petit text-yellow-500 text-5xl font-bold">Visi</h1>
              <hr className=" bg-teal-900 w-[675px] h-[3px] " />
            </div>
            <p className="pt-5 text-justify pr-5 text-xl text-gray-600">Menjadi klinik kecantikan yang memberikan rasa syukur dan percaya diri kepada wanita Indonesia.</p>

            <div className="flex flex-row items-center gap-3 pt-10">
              <h1 className="font-Petit text-yellow-500 text-5xl font-bold">Misi</h1>
              <hr className=" bg-teal-900 w-[650px] h-[3px]" />
            </div>
            <ul className="pt-5 text-justify pr-5 text-xl text-gray-600 list-disc pl-5 grid gap-5">
              <li>Memberikan kontribusi positif kepada masyarakat dengan mensyiarkan akhlak wanita dalam hal kecantikan. </li>
              <li>Senantiasa menghasilkan produk dan jasa yang terpercaya dan selalu menyesuaikan dengan nilai-nilai Islam. </li>
              <li>Membangun lembaga kewirausahaan yang berorientasi pada keberkahan rizqy untuk seluruh stakeholder. </li>
              <li>Membangun komunitas dalam lingkungan kerja dimana akhlak dan ketakwaan menjadi pondasi utama. </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 2nd section end*/}

      {/* 3rd section*/}
      {/* for desktop */}
      <div className=" h-full bg-gray-100 bg-[url(/img/flower.webp)] bg-[length:700px_700px] bg-no-repeat bg-center pt-1 mobile:hidden">
        <div className="divider divider-neutral font-Petit text-5xl pt-40 text-teal-900 px-10 mb-20">Why Hayyu</div>

        <div className="text-xl grid gap-10 px-10 text-justify">
          <p>
            Bebas rasa khawatir karena pelayanan di Hayyu khusus wanita dan ditangani tenaga medis & staf wanita. Dokter yang ahli di bidang kecantikan dan bersertifikasi internasional, siap membantu menganalisa dan mendiagnosa problem
            kulit wajahmu. Dikombinasikan dengan metode, bahan, alat dan tim berpengalaman, treatment memberikan hasil nyata.
          </p>

          <p>Bahan perawatan dan skincare yang digunakan sudah pasti aman, halal, teruji 10 tahun di klinik kecantikan. Tentunya baik untuk pemakaian jangka panjang dan tidak membuat ketergantungan.</p>

          <p>Kenyamananmu merupakan prioritas kami. Dengan ambience klinik yang menenangkan dan fasilitas satu ruangan untuk satu orang, membuat treatment di Hayyu terasa relaks dan nyaman.</p>

          <p className="text-2xl text-center pt-[100px]">Bersama Hayyu, Semua wanita bisa</p>
          <h1 className="text-6xl text-center font-thin text-teal-900 pt-3">#MerawatTanpaWasWas</h1>
          <div className="bg-gray h-[100px]"></div>
        </div>
      </div>

      {/* for mobile */}
      <div className="flex flex-row w-[100vw] justify-between pt-[100px]"></div>

      {/* 3rd sectionend*/}
    </div>
  );
}
