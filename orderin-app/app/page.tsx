import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
    <div className="min-h-screen bg-latar">
      {/* pilihan jenis menu */}
      <div className="flex flex-wrap justify-center gap-5 py-5">
        <button className="bg-merah px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-gray-600 transition ease-in-out cursor-pointer">
          <p>Makanan Berat</p>
        </button>
        <button className="bg-merah px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-gray-600 transition ease-in-out cursor-pointer">
          <p>Minuman</p>
        </button>
        <button className="bg-merah px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-gray-600 transition ease-in-out cursor-pointer">
          <p>Snack</p>
        </button>
        <button className="bg-merah px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-gray-600 transition ease-in-out cursor-pointer">
          <p>Menu Anak</p>
        </button>
      </div>
      <div className="flex">
        {/* tombol navigasi dan pengaturan */}
          <div className="flex flex-col p-5 ">
            <div className="p-5 bg-merah mb-5 rounded-xl"></div>
            <div className="p-5 bg-merah mb-5 rounded-xl"></div>
            <div className="p-5 bg-merah mb-5 rounded-xl"></div>
          </div>    
        {/* tampilan menu yang ada */}
          <div className="grid grid-cols-4 gap-4 px-5 py-5 w-full">
            {/* card */}
            <div className="bg-putih flex flex-col items-center rounded-xl">
              <div className="w-full bg-abu-skeleton rounded-t-xl overflow-hidden">
                <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={500} height={200}/> 
              </div>
              <div className="p-2 flex flex-col w-full">
                <p className="text-item font-bold text-xl">Pizza Peperoni</p>
                <p className="text-ijo-gelap">Rp. 20.000,00</p>
              </div>
              <div className="p-2 flex justify-center items-center w-full ">
                <button className="bg-oranye px-4 py-2 rounded-2xl w-full hover:bg-amber-700 transition ease-in-out cursor-pointer font-bold">
                TAMBAH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
