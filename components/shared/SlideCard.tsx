import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";


export default function SlideCard({ image, title, createdAt, category }: CardProps) {

    
  return (
    <div className="relative">
        <div className="w-full h-[550px] overflow-hidden shrink-0">
            <Image width={1000} height={1000} src={`/thumbnails/${image}.png`} className="w-full h-full object-cover object-top" alt="thumbnails" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        {/* <div className="absolute flex bottom-0 left-0 right-0 items-center justify-between "> */}
        <div className="absolute flex bottom-0 left-7 right-0 items-center justify-between -translate-y-24 md:max-w-2xl md:px-[75px] md:pb-[40px] md:-translate-y-0">
            <div className="flex flex-col gap-[10px] text-white">
                <p>Featured</p>
                <div className="">
                    <Link href="#" className="font-bold text-[36px] leading-[45px] hover:underline transition-all duration-300">{title}</Link>
                </div>
                <p>{createdAt} • {category}</p>
            </div>
           
        </div>
    </div>
  )
}
