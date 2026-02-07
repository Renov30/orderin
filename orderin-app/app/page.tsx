import Image from "next/image";
import {ArrowDownIcon, ChevronDownIcon, ChevronUpIcon, Cog8ToothIcon, ShoppingCartIcon}  from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen bg-latar">
        <div className="flex h-screen">
          {/* tombol navigasi dan pengaturan */}
          <div className="flex items-center">
            <div className="flex flex-col pl-5 ">
              <button className="p-4 bg-merah mb-5 rounded-xl hover:bg-red-900 transition ease-in-out cursor-pointer">
                   <ChevronUpIcon className="h-8 w-8 text-white"/>
              </button>
              <div className="p-4 bg-merah mb-5 rounded-xl hover:bg-red-900 transition ease-in-out cursor-pointer">
                <Cog8ToothIcon className="h-8 w-8 text-white"/>
              </div>
              <div className="p-4 bg-merah mb-5 rounded-xl hover:bg-red-900 transition ease-in-out cursor-pointer">
                <ChevronDownIcon className="h-8 w-8 text-white"/>
              </div>
            </div>    
          </div>

          {/* jenis menu dan menu */}
          <div>
            {/* pilihan jenis menu */}
            <div className="flex flex-wrap justify-center gap-5 py-5">
              <button className="bg-merah px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-red-900 transition ease-in-out cursor-pointer">
                <p className="font-bold">Makanan Berat</p>
              </button>
              <button className="bg-merah px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-red-900 transition ease-in-out cursor-pointer">
                <p className="font-bold">Minuman</p>
              </button>
              <button className="bg-merah px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-red-900 transition ease-in-out cursor-pointer">
                <p className="font-bold">Snack</p>
              </button>
              <button className="bg-merah px-7 py-2 w-[200px] rounded-3xl m-2 flex flex-col items-center hover:bg-red-900 transition ease-in-out cursor-pointer">
                <p className="font-bold">Menu Anak</p>
              </button>
            </div>
            {/* tampilan menu yang ada */}
            <div className="grid grid-cols-4 gap-5 px-10 py-5 w-full">
              {/* card */}
              <div className="bg-putih flex flex-col items-center rounded-xl">
                <div className="w-full bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={500} height={200}/> 
                </div>
                <div className="px-2 pt-2 flex flex-col w-full">
                  <p className="text-item font-bold text-2xl">Pizza Peperoni</p>
                  <p className="text-ijo-gelap">Rp. 20.000,00</p>
                </div>
                <div className="p-2 flex justify-center items-center w-full ">
                  <button className="flex items-center justify-center bg-oranye px-4 py-2 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-xl font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl">
                <div className="w-full bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={500} height={200}/> 
                </div>
                <div className="p-2 flex flex-col w-full">
                  <p className="text-item font-bold text-2xl">Pizza Peperoni</p>
                  <p className="text-ijo-gelap">Rp. 20.000,00</p>
                </div>
                <div className="p-2 flex justify-center items-center w-full ">
                  <button className="flex items-center justify-center bg-oranye px-4 py-2 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-xl font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl">
                <div className="w-full bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={500} height={200}/> 
                </div>
                <div className="p-2 flex flex-col w-full">
                  <p className="text-item font-bold text-2xl">Pizza Peperoni</p>
                  <p className="text-ijo-gelap">Rp. 20.000,00</p>
                </div>
                <div className="p-2 flex justify-center items-center w-full ">
                  <button className="flex items-center justify-center bg-oranye px-4 py-2 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-xl font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl">
                <div className="w-full bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={500} height={200}/> 
                </div>
                <div className="p-2 flex flex-col w-full">
                  <p className="text-item font-bold text-2xl">Pizza Peperoni</p>
                  <p className="text-ijo-gelap">Rp. 20.000,00</p>
                </div>
                <div className="p-2 flex justify-center items-center w-full ">
                  <button className="flex items-center justify-center bg-oranye px-4 py-2 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-xl font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl">
                <div className="w-full bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={500} height={200}/> 
                </div>
                <div className="p-2 flex flex-col w-full">
                  <p className="text-item font-bold text-2xl">Pizza Peperoni</p>
                  <p className="text-ijo-gelap">Rp. 20.000,00</p>
                </div>
                <div className="p-2 flex justify-center items-center w-full ">
                  <button className="flex items-center justify-center bg-oranye px-4 py-2 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-xl font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl">
                <div className="w-full bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={500} height={200}/> 
                </div>
                <div className="p-2 flex flex-col w-full">
                  <p className="text-item font-bold text-2xl">Pizza Peperoni</p>
                  <p className="text-ijo-gelap">Rp. 20.000,00</p>
                </div>
                <div className="p-2 flex justify-center items-center w-full ">
                  <button className="flex items-center justify-center bg-oranye px-4 py-2 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-xl font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl">
                <div className="w-full bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={500} height={200}/> 
                </div>
                <div className="p-2 flex flex-col w-full">
                  <p className="text-item font-bold text-2xl">Pizza Peperoni</p>
                  <p className="text-ijo-gelap">Rp. 20.000,00</p>
                </div>
                <div className="p-2 flex justify-center items-center w-full ">
                  <button className="flex items-center justify-center bg-oranye px-4 py-2 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-xl font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
              <div className="bg-putih flex flex-col items-center rounded-xl">
                <div className="w-full bg-abu-skeleton rounded-t-xl overflow-hidden">
                  <Image src="/images/menus/chicken-pizza.webp" alt="nama menu" width={500} height={200}/> 
                </div>
                <div className="p-2 flex flex-col w-full">
                  <p className="text-item font-bold text-2xl">Pizza Peperoni</p>
                  <p className="text-ijo-gelap">Rp. 20.000,00</p>
                </div>
                <div className="p-2 flex justify-center items-center w-full ">
                  <button className="flex items-center justify-center bg-oranye px-4 py-2 rounded-2xl w-full hover:bg-amber-600 transition ease-in-out cursor-pointer text-xl font-bold">
                  <ShoppingCartIcon className="h-6 w-6 text-white mr-2"/>
                  TAMBAH
                  </button>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}
