
import CategorySection from '@/components/shared/CategorySection'
import PostCard from '@/components/shared/PostCard'
import SlideSection from '@/components/shared/SlideSection'
import Link from 'next/link'


export default function page() {
  return (
    <>
        <section  className="relative w-full overflow-hidden flex mx-auto mt-[30px]">
            <div className="swiper-hero w-full">
                <SlideSection />
            </div>
        </section>

        <section className="mx-auto mt-[70px] flex w-full md:px-16 flex-col items-center gap-[30px]">
            <div className="flex w-full items-center justify-between px-8 md:px-0">
                <h1 className=" text-balance text-sm md:text-[26px] font-bold">Latest Hot News <br /> Good for Curiousity</h1>
                <div className='bg-primary inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none px-4 py-3 rounded-full'>Up To Date</div>
            </div>
            <div className="flex py-6 px-2 w-full gap-[30px] overflow-x-auto scrollbar-none md:flex-wrap md:justify-center">
                <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                
                
            </div>
        </section>

        <section className="mt-[70px] px-8 md:px-16 pb-20">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-[26px] leading-[39px]">
                    People also search for
                    <br />
                    Bussiness 
                </h1>
                <Link href="">
                <div className='bg-primary inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none px-4 py-3 rounded-full'>Explore All</div>
                </Link>
            </div>
                <CategorySection />

            
        </section>
    </>
  )
}
