import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300 flex justify-center items-center m-5">
      {/* pilihan jenis menu */}
      <div className="flex p-5">
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
    </div>
  );
}
