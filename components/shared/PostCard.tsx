import { CardProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function PostCard({ title, image, category, createdAt }: CardProps) {
  return (
    <Link href="/post/halo">
        <div className="flex w-[357px] flex-col gap-4 rounded-[20px] px-5 py-[26px] ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
            <div className="relative flex">
                <div className="absolute left-5 top-5 flex max-h-[34px] w-fit items-center justify-center rounded-full bg-white px-[18px] py-2">
                    <span className="text-center text-xs font-bold text-neutral-950">{category}</span>
                </div>
                <div className="h-[200px] w-full overflow-hidden rounded-[20px]">
                    <Image className="h-full w-full object-cover" src={`/thumbnails/${image}.jpg`} width={200} height={200} alt={title} />
                </div>
            </div>
            <div className="flex max-h-[81px] w-full flex-col gap-[6px]">
                <h2 className="text-balance text-lg font-bold">{title}</h2>
                <p className="text-sm text-[#A3A6AE]">{createdAt}</p>
            </div>
        </div>
    </Link>
  )
}
