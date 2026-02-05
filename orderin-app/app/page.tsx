import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
    <div className="bg-gray-300 ">
      {/* pilihan jenis menu */}
      <div className="flex px-20 py-5 bg-amber-300">
        <button className="bg-gray-500 px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-gray-600 transition ease-in-out cursor-pointer">
          <p>Makanan Berat</p>
        </button>
        <button className="bg-gray-500 px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-gray-600 transition ease-in-out cursor-pointer">
          <p>Minuman</p>
        </button>
        <button className="bg-gray-500 px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-gray-600 transition ease-in-out cursor-pointer">
          <p>Snack</p>
        </button>
        <button className="bg-gray-500 px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-gray-600 transition ease-in-out cursor-pointer">
          <p>Menu Anak</p>
        </button>
      </div>
      <div className="flex">
        {/* tombol navigasi dan pengaturan */}
          <div className="flex flex-col p-5 bg-amber-600 ">
            <div className="p-5 bg-blue-400 mb-5 rounded-xl"></div>
            <div className="p-5 bg-blue-500 mb-5 rounded-xl"></div>
            <div className="p-5 bg-blue-600 mb-5 rounded-xl"></div>
          </div>    
        {/* tampilan menu yang ada */}
          <div className="flex py-5 bg-amber-700">
            {/* card */}
            <div className="bg-white flex flex-col items-center mx-5 rounded-xl">
              <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={200} height={200}/> 
              <div className="p-2 flex flex-col w-full">
                <p>Pizza Peperoni</p>
                <p>Rp. 20.000,00</p>
              </div>
              <div className="p-2 flex justify-center items-center w-full ">
                <button className="bg-amber-600 px-4 py-2 rounded-2xl w-full hover:bg-amber-700 transition ease-in-out cursor-pointer">
                Tambah
                </button>
              </div>
            </div>
            <div className="p-5 bg-white"></div>
            <div className="p-5 bg-white"></div>
            <div className="p-5 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
