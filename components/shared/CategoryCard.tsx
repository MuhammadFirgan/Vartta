import Image from "next/image";
import Link from "next/link";


export default function CategoryCard() {
  return (
    <Link href="">
        <div className="border border-[#EEF0F7] p-[14px] rounded-[20px] items-center flex space-x-4 hover:border-[#FF6B18] transition-all duration-300">
            <div className="h-[100px] w-[130px] flex-shrink-0 rounded-[20px] overflow-hidden">
                <Image width={1000} height={1000} src="/thumbnails/image 4.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="space-y-[6px] flex-1">
                <h1 className="text-sm md:text-lg leading-[27px] font-bold line-clamp-2">Bikin house party tanpa biaya mahal, begini tipsnya!</h1>
                <p className="text-[#A3A6AE] text-sm">12 Jun, 2024</p>
            </div>
        </div>
    </Link>
  )
}
