import PostCard from "@/components/shared/PostCard"
import Image from "next/image"


export default async function page({
    params,
  }: {
    params: Promise<{ username: string }>
  }) {
    const { username } = await params
    console.log(username)
  return (
    <section id="author-news" className="mx-auto flex w-full flex-col items-center gap-[30px] pb-14">
        <div className="flex gap-[30px] items-center justify-center px-8 py-6">
            <h1 className="text-center text-sm md:text-xl font-bold">Author News</h1>
            <div className="text-center text-[36px] font-bold leading-[45px]">/</div>
            <div className="flex gap-3 items-center">
                <div className="w-[60px] overflow-hidden shrink-0 rounded-full">
                    <Image width={24} height={24} src="/photos/author-news-profile.svg" className="md:w-full md:h-full object-cover w-10 h-10" alt="photos" />
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold text-sm md:text-base">Rita Putria</p>
                    <p className="text-[#A3A6AE] text-sm">Sr Programmer</p>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap gap-[30px] focus:ring-maga-orange justify-center">
            <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
            <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
            <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
            <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
            <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
            <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
            
        </div>
    </section>
  )
}
