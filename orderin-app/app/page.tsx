import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300 flex flex-col justify-center items-center m-5">
      {/* pilihan jenis menu */}
      <div className="flex p-5 bg-amber-300">
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
      {/* tombol navigasi dan pengaturan */}
      <div className="flex">
        <div className="flex flex-col p-5 bg-amber-600">
          <div className="p-5 bg-blue-400 mb-5 rounded-xl"></div>
          <div className="p-5 bg-blue-500 mb-5 rounded-xl"></div>
          <div className="p-5 bg-blue-600 mb-5 rounded-xl"></div>
        </div>
      {/* tampilan menu yang ada */}
        <div className="flex p-5 bg-amber-700">
          {/* card */}
          <div className="p-5 bg-white mx-5"></div>
          <div className="p-5 bg-white mx-5"></div>
          <div className="p-5 bg-white mx-5"></div>
          <div className="p-5 bg-white mx-5"></div>
        </div>
      </div>
      
    </div>
  );
}
