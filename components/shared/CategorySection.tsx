import Image from "next/image";
import Link from "next/link";
import CategoryCard from './CategoryCard';


export default function CategorySection() {
  return (
    <div className="mt-[30px] flex justify-center items-center gap-10 md:flex-row md:justify-between flex-col">
        <div className="relative overflow-hidden rounded-[20px] border">
            {/* <div className="h-full w-full max-w-[635px]"> */}
            <div className="h-full w-full max-w-[635px]">
                <Image width={1000} height={1000} src="/thumbnails/image 5.jpg" alt="" className="w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.9)_100%)]"></div>
            <div className="text-white space-y-[10px] absolute bottom-[30px] left-[30px]">
                <p>Featured</p>
                <Link href="">
                    <h1 className="font-bold text-[30px] leading-9 hover:underline pr-[30px] line-clamp-2">Rela Tampil Menarik Depan Wanita, Pria Ini Jadi Bahan Bicaraan</h1>
                </Link>
                <p>12 Jun, 2024</p>
            </div>
        </div>

        <div className="relative" >
            <div className="max-w-[475px] space-y-[20px] pr-4 max-h-[424px] overflow-auto flex flex-col justify-between items-center" >
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />

                {/* <Link href="">
                    <div className="border border-[#EEF0F7] p-[14px] rounded-[20px] items-center flex space-x-4 hover:border-[#FF6B18] transition-all duration-300">
                        <div className="h-[100px] w-[130px] flex-shrink-0 rounded-[20px] overflow-hidden">
                            <Image width={1000} height={1000} src="/thumbnails/image 3.jpg" alt="" className="h-full w-full object-cover" />
                        </div>

                        <div className="space-y-[6px] flex-1">
                            <h1 className="text-lg leading-[27px] font-bold">Gaya pakaian pernikahan artis ini beneran unik</h1>
                            <p className="text-[#A3A6AE] text-sm">12 Jun, 2024</p>
                        </div>
                    </div>
                </Link>

                <Link href="">
                    <div className="border border-[#EEF0F7] p-[14px] rounded-[20px] items-center flex space-x-4 hover:border-[#FF6B18] transition-all duration-300">
                        <div className="h-[100px] w-[130px] flex-shrink-0 rounded-[20px] overflow-hidden">
                            <Image width={1000} height={1000} src="/thumbnails/image 2.jpg" alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="space-y-[6px] flex-1">
                            <h1 className="text-lg leading-[27px] font-bold">Tips bersepeda bareng pasangan baru, makin seru!</h1>
                            <p className="text-[#A3A6AE] text-sm">12 Jun, 2024</p>
                        </div>
                    </div>
                </Link>

                <Link href="">
                    <div className="border border-[#EEF0F7] p-[14px] rounded-[20px] items-center flex space-x-4 hover:border-[#FF6B18] transition-all duration-300">
                        <div className="h-[100px] w-[130px] flex-shrink-0 rounded-[20px] overflow-hidden">
                            <Image width={1000} height={1000} src="/thumbnails/image 4.jpg" alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="space-y-[6px] flex-1">
                            <h1 className="text-lg leading-[27px] font-bold">Bikin house party tanpa biaya mahal, begini tipsnya!</h1>
                            <p className="text-[#A3A6AE] text-sm">12 Jun, 2024</p>
                        </div>
                    </div>
                </Link>

                <Link href="">
                    <div className="border border-[#EEF0F7] p-[14px] rounded-[20px] items-center flex space-x-4 hover:border-[#FF6B18] transition-all duration-300">
                        <div className="h-[100px] w-[130px] flex-shrink-0 rounded-[20px] overflow-hidden">
                            <Image width={1000} height={1000} src="/thumbnails/image 3.jpg" alt="" className="h-full w-full object-cover" />
                        </div>

                        <div className="space-y-[6px] flex-1">
                            <h1 className="text-lg leading-[27px] font-bold">Gaya pakaian pernikahan artis ini beneran unik</h1>
                            <p className="text-[#A3A6AE] text-sm">12 Jun, 2024</p>
                        </div>
                    </div>
                </Link>

                <Link href="">
                    <div className="border border-[#EEF0F7] p-[14px] rounded-[20px] items-center flex space-x-4 hover:border-[#FF6B18] transition-all duration-300">
                        <div className="h-[100px] w-[130px] flex-shrink-0 rounded-[20px] overflow-hidden">
                            <Image width={1000} height={1000} src="/thumbnails/image 2.jpg" alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="space-y-[6px] flex-1">
                            <h1 className="text-lg leading-[27px] font-bold">Tips bersepeda bareng pasangan baru, makin seru!</h1>
                            <p className="text-[#A3A6AE] text-sm">12 Jun, 2024</p>
                        </div>
                    </div>
                </Link> */}

                <div className="w-full h-[100px]"></div>
            </div>
            <div className="pr-4 absolute bottom-0 w-full h-[100px]">
            <div className="w-full h-full bg-[linear-gradient(360deg,#000000_16%,rgba(0,0,0,0.19)_100%)]"></div>
            </div>
        </div>
    </div>
  )
}
