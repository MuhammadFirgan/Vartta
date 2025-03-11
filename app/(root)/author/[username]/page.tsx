import PostCard from "@/components/shared/PostCard"
import Image from "next/image"


export default async function page({
    params,
  }: {
    params: Promise<{ username: string }>
  }) {
    const { username } = await params
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
            {/* <a href="#">
                <div className="flex max-w-[357px] flex-col gap-4 rounded-[20px] px-5 py-[26px] ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="relative flex">
                        <div className="absolute left-5 top-5 flex max-h-[34px] w-fit items-center justify-center rounded-full bg-white px-[18px] py-2">
                            <span className="text-center text-xs font-bold">ENTERTAINMENT</span>
                        </div>
                        <div className="h-[200px] w-full overflow-hidden rounded-[20px]">
                            <img className="h-full w-full object-cover" src="assets/images/thumbnails/thumbnail-1.png" alt="" />
                        </div>
                    </div>
                    <div className="flex max-h-[81px] w-full flex-col gap-[6px]">
                        <h2 className="text-balance text-lg font-bold">Beberapa artis ini merayakan ultah di tengah hutan raya</h2>
                        <p className="text-sm text-[#A3A6AE]">12 Jun, 2024</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="flex max-w-[357px] flex-col gap-4 rounded-[20px] px-5 py-[26px] ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="relative flex">
                        <div className="absolute left-5 top-5 flex max-h-[34px] w-fit items-center justify-center rounded-full bg-white px-[18px] py-2">
                            <span className="text-center text-xs font-bold">POLITIC</span>
                        </div>
                        <div className="h-[200px] w-full overflow-hidden rounded-[20px]">
                            <img className="h-full w-full object-cover" src="assets/images/thumbnails/thumbnail-2.png" alt="" />
                        </div>
                    </div>
                    <div className="flex max-h-[81px] w-full flex-col gap-[6px]">
                        <h2 className="text-balance text-lg font-bold">Terjadi demo pada ibu kota jakarta membuat macet parah</h2>
                        <p className="text-sm text-[#A3A6AE]">12 Jun, 2024</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="flex max-w-[357px] flex-col gap-4 rounded-[20px] px-5 py-[26px] ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="relative flex">
                        <div className="absolute left-5 top-5 flex max-h-[34px] w-fit items-center justify-center rounded-full bg-white px-[18px] py-2">
                            <span className="text-center text-xs font-bold">SPORT</span>
                        </div>
                        <div className="h-[200px] w-full overflow-hidden rounded-[20px]">
                            <img className="h-full w-full object-cover" src="assets/images/thumbnails/thumbnail-3.png" alt="" />
                        </div>
                    </div>
                    <div className="flex max-h-[81px] w-full flex-col gap-[6px]">
                        <h2 className="text-balance text-lg font-bold">Bersepeda dapat membuat diri menjadi lebih baik lagi</h2>
                        <p className="text-sm text-[#A3A6AE]">12 Jun, 2024</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="flex max-w-[357px] flex-col gap-4 rounded-[20px] px-5 py-[26px] ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="relative flex">
                        <div className="absolute left-5 top-5 flex max-h-[34px] w-fit items-center justify-center rounded-full bg-white px-[18px] py-2">
                            <span className="text-center text-xs font-bold">SPORT</span>
                        </div>
                        <div className="h-[200px] w-full overflow-hidden rounded-[20px]">
                            <img className="h-full w-full object-cover" src="assets/images/thumbnails/thumbnail-4.png" alt="" />
                        </div>
                    </div>
                    <div className="flex max-h-[81px] w-full flex-col gap-[6px]">
                        <h2 className="text-balance text-lg font-bold">Bersepeda dapat membuat diri menjadi lebih baik lagi</h2>
                        <p className="text-sm text-[#A3A6AE]">12 Jun, 2024</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="flex max-w-[357px] flex-col gap-4 rounded-[20px] px-5 py-[26px] ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="relative flex">
                        <div className="absolute left-5 top-5 flex max-h-[34px] w-fit items-center justify-center rounded-full bg-white px-[18px] py-2">
                            <span className="text-center text-xs font-bold">ENTERNAINMENT</span>
                        </div>
                        <div className="h-[200px] w-full overflow-hidden rounded-[20px]">
                            <img className="h-full w-full object-cover" src="assets/images/thumbnails/thumbnail-5.png" alt="" />
                        </div>
                    </div>
                    <div className="flex max-h-[81px] w-full flex-col gap-[6px]">
                        <h2 className="text-balance text-lg font-bold">Beberapa artis ini merayakan ultah di tengah hutan raya</h2>
                        <p className="text-sm text-[#A3A6AE]">12 Jun, 2024</p>
                    </div>
                </div>
            </a> */}
        </div>
    </section>
  )
}
