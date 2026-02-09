import Image from "next/image";
import {ArrowDownIcon, ChevronDownIcon, ChevronUpIcon, Cog8ToothIcon, ShoppingCartIcon}  from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-latar">
        <div className="flex justify-center">
          {/* tombol navigasi dan pengaturan */}
          <div className="fixed left-0 flex items-center h-screen z-30">
            <div className="flex flex-col px-3">
              <button className="p-4 bg-merah mb-5 rounded-xl hover:bg-red-900 transition ease-in-out cursor-pointer">
                   <ChevronUpIcon className="h-7 w-7 text-white"/>
              </button>
              <div className="p-4 bg-merah mb-5 rounded-xl hover:bg-red-900 transition ease-in-out cursor-pointer">
                <Cog8ToothIcon className="h-7 w-7 text-white"/>
              </div>
              <div className="p-4 bg-merah mb-5 rounded-xl hover:bg-red-900 transition ease-in-out cursor-pointer">
                <ChevronDownIcon className="h-7 w-7 text-white"/>
              </div>
            </div>    
          </div>
          
          {/* jenis menu dan menu */}
          <div className="flex justify-center">
            {/* pilihan jenis menu */}
            <div className="fixed flex flex-wrap justify-center gap-7 py-5 w-full z-20 bg-latar/70 backdrop-blur-md border-b border-abu-skeleton">
              <button className="bg-merah w-40 py-2 rounded-3xl flex flex-col items-center justify-center hover:bg-red-900 transition ease-in-out cursor-pointer text-white">
                <p className="font-bold">Makanan Berat</p>
              </button>
              <button className="bg-merah w-40 py-2 rounded-3xl flex flex-col items-center justify-center hover:bg-red-900 transition ease-in-out cursor-pointer text-white">
                <p className="font-bold">Minuman</p>
              </button>
              <button className="bg-merah w-40 py-2 rounded-3xl flex flex-col items-center justify-center hover:bg-red-900 transition ease-in-out cursor-pointer text-white">
                <p className="font-bold">Snack</p>
              </button>
              <button className="bg-merah w-40 py-2 rounded-3xl flex flex-col items-center justify-center hover:bg-red-900 transition ease-in-out cursor-pointer text-white">
                <p className="font-bold">Menu Anak</p>
              </button>
            </div>
            {/* tampilan menu yang ada */}
            <div className="mt-25 grid grid-cols-4 gap-10 px-5 py-5 w-full">
              {/* card */}
              <div className="bg-putih flex flex-col items-center rounded-xl relative w-[200px]">
                {/* diskon */}
                <div className="bg-hijau right-0 translate-x-1/2 -translate-y-1/2 absolute rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold z-10 text-white">-20%</div>
                {/* gambar */}
                <div className="relative w-full aspect-square bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" fill className="object-cover"/>
                </div>
                {/* teks */}
                <div className="px-4 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-xl">Crispy Chicken Pizza</p>
                  <p className="text-hijau text-md">Rp. 20.000,00</p>
                </div>
                {/* tombol tambah */}
                <div className="p-3 flex justify-center items-center w-full ">
                  <button className="text-white flex items-center justify-center bg-oranye px-4 py-3 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-md font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl relative w-[200px]">
                {/* diskon */}
                <div className="bg-hijau right-0 translate-x-1/2 -translate-y-1/2 absolute rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold z-10 text-white">-20%</div>
                {/* gambar */}
                <div className="relative w-full aspect-square bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" fill className="object-cover"/>
                </div>
                {/* teks */}
                <div className="px-4 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-xl">Crispy Chicken Pizza</p>
                  <p className="text-hijau text-md">Rp. 20.000,00</p>
                </div>
                {/* tombol tambah */}
                <div className="p-3 flex justify-center items-center w-full ">
                  <button className="text-white flex items-center justify-center bg-oranye px-4 py-3 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-md font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl relative w-[200px]">
                {/* diskon */}
                <div className="bg-hijau right-0 translate-x-1/2 -translate-y-1/2 absolute rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold z-10 text-white">-20%</div>
                {/* gambar */}
                <div className="relative w-full aspect-square bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" fill className="object-cover"/>
                </div>
                {/* teks */}
                <div className="px-4 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-xl">Crispy Chicken Pizza</p>
                  <p className="text-hijau text-md">Rp. 20.000,00</p>
                </div>
                {/* tombol tambah */}
                <div className="p-3 flex justify-center items-center w-full ">
                  <button className="text-white flex items-center justify-center bg-oranye px-4 py-3 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-md font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl relative w-[200px]">
                {/* diskon */}
                <div className="bg-hijau right-0 translate-x-1/2 -translate-y-1/2 absolute rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold z-10 text-white">-20%</div>
                {/* gambar */}
                <div className="relative w-full aspect-square bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" fill className="object-cover"/>
                </div>
                {/* teks */}
                <div className="px-4 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-xl">Crispy Chicken Pizza</p>
                  <p className="text-hijau text-md">Rp. 20.000,00</p>
                </div>
                {/* tombol tambah */}
                <div className="p-3 flex justify-center items-center w-full ">
                  <button className="text-white flex items-center justify-center bg-oranye px-4 py-3 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-md font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl relative w-[200px]">
                {/* diskon */}
                <div className="bg-hijau right-0 translate-x-1/2 -translate-y-1/2 absolute rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold z-10 text-white">-20%</div>
                {/* gambar */}
                <div className="relative w-full aspect-square bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" fill className="object-cover"/>
                </div>
                {/* teks */}
                <div className="px-4 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-xl">Crispy Chicken Pizza</p>
                  <p className="text-hijau text-md">Rp. 20.000,00</p>
                </div>
                {/* tombol tambah */}
                <div className="p-3 flex justify-center items-center w-full ">
                  <button className="text-white flex items-center justify-center bg-oranye px-4 py-3 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-md font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl relative w-[200px]">
                {/* diskon */}
                <div className="bg-hijau right-0 translate-x-1/2 -translate-y-1/2 absolute rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold z-10 text-white">-20%</div>
                {/* gambar */}
                <div className="relative w-full aspect-square bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" fill className="object-cover"/>
                </div>
                {/* teks */}
                <div className="px-4 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-xl">Crispy Chicken Pizza</p>
                  <p className="text-hijau text-md">Rp. 20.000,00</p>
                </div>
                {/* tombol tambah */}
                <div className="p-3 flex justify-center items-center w-full ">
                  <button className="text-white flex items-center justify-center bg-oranye px-4 py-3 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-md font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl relative w-[200px]">
                {/* diskon */}
                <div className="bg-hijau right-0 translate-x-1/2 -translate-y-1/2 absolute rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold z-10 text-white">-20%</div>
                {/* gambar */}
                <div className="relative w-full aspect-square bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" fill className="object-cover"/>
                </div>
                {/* teks */}
                <div className="px-4 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-xl">Crispy Chicken Pizza</p>
                  <p className="text-hijau text-md">Rp. 20.000,00</p>
                </div>
                {/* tombol tambah */}
                <div className="p-3 flex justify-center items-center w-full ">
                  <button className="text-white flex items-center justify-center bg-oranye px-4 py-3 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-md font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl relative w-[200px]">
                {/* diskon */}
                <div className="bg-hijau right-0 translate-x-1/2 -translate-y-1/2 absolute rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold z-10 text-white">-20%</div>
                {/* gambar */}
                <div className="relative w-full aspect-square bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" fill className="object-cover"/>
                </div>
                {/* teks */}
                <div className="px-4 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-xl">Crispy Chicken Pizza</p>
                  <p className="text-hijau text-md">Rp. 20.000,00</p>
                </div>
                {/* tombol tambah */}
                <div className="p-3 flex justify-center items-center w-full ">
                  <button className="text-white flex items-center justify-center bg-oranye px-4 py-3 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-md font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl relative w-[200px]">
                {/* diskon */}
                <div className="bg-hijau right-0 translate-x-1/2 -translate-y-1/2 absolute rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold z-10 text-white">-20%</div>
                {/* gambar */}
                <div className="relative w-full aspect-square bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" fill className="object-cover"/>
                </div>
                {/* teks */}
                <div className="px-4 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-xl">Crispy Chicken Pizza</p>
                  <p className="text-hijau text-md">Rp. 20.000,00</p>
                </div>
                {/* tombol tambah */}
                <div className="p-3 flex justify-center items-center w-full ">
                  <button className="text-white flex items-center justify-center bg-oranye px-4 py-3 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-md font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
            </div>  
          </div>

          {/* tombol keranjang */}
          <div className="fixed absolute right-15 bottom-10 z-100">
            <button className="text-white font-bold text-xl bg-merah px-6 py-4 rounded-2xl hover:bg-red-900 transition ease-in-out cursor-pointer flex items-center justify-center shadow-lg shadow-black/20">
              <ShoppingCartIcon className="h-8 w-8 text-white inline-block mr-2"/>
              KERANJANG</button>
          </div>
        </div>
      </div>
    </div>
  );
}
