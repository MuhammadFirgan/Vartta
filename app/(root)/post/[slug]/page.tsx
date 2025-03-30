import PostCard from "@/components/shared/PostCard"
import Image from "next/image"
import Link from "next/link"

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    console.log(slug)
    return (
        <section className="text-center mt-20 flex flex-col gap-y-4">
            <p className="text-[#A3A6AE]">12 Jun, 2024 • Business</p>
            <h1 className="font-bold text-3xl md:text-[46px] md:leading-[60px]">Peternak Jakarta Menggunakan Bantuan A.I Prexpeliangga</h1>
            <div className="flex items-center mx-auto gap-x-[70px]">
                <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 shrink-0 overflow-hidden flex justify-center items-center rounded-full">
                        <Image width={30} height={30} src="/photos/profile-7.png" alt="image" className="object-cover w-full h-full" />
                    </div>
                    <div>
                        <Link href="/author/halo" className="font-semibold text-start text-sm leading-[21px]">Rita Putria</Link>
                        <p className="text-xs leading-[18px] text-[#A3A6AE]">Sr Programmer</p>
                    </div>
                </div>
                
            </div>
            <div className="h-[500px] flex justify-center items-center overflow-hidden w-full mt-[50px]">
                <Image width={1000} height={300} src="/thumbnails/hero-chicken.png" alt="image" className="object-cover min-w-full h-full" />
            </div>
            {/* <div className="max-w-[1130px] mx-auto flex gap-20 mt-[50px] flex-col"> */}
            <div className="md:px-10 flex gap-10 md:gap-20 mt-[50px] flex-col justify-between items-center md:items-start md:flex-row ">
                <article className="px-4 text-justify">
                    <p>
                    I‘ll be real. I held out on AI as long as I could. I was convinced it was going to be humanity’s downfall from the first time my phone had
                    the audacity to tell me I actually meant to say, “I have no ducking idea” — but desperate times call for desperate.
                    </p>
                    <p>
                    Want to teach a course about real estate investing? Fantastic, but make sure you have experience as a real estate investor. Want to teach
                    hair stylists how to successfully open their own salons? Do it. But you should have opened your own salon first.
                    </p>
                    <h3>So you should have known</h3>
                    <p>
                    I launched my first digital course without any prior experience in the niche I was teaching about. In my hurry to
                    <Link href="">establish myself as an expert</Link>, I overlooked the importance of having hands-on experience. Can you guess how this turned out?
                    Yep, my first course was a total flop:
                    </p>
                    <ul>
                    <li>
                        <p>
                        <strong>Credibility:</strong>
                        To build trust with your future students, you need to show them that you re the real deal. Having actual experience in the subject
                        matter is the first step to gaining their confidence.
                        </p>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <p>
                        <strong>Effective Teaching:</strong>
                        When you have demonstrated experience, your teaching becomes more powerful. You can relate to the challenges your students might face
                        and provide practical, real-world solutions for them.
                        </p>
                    </li>
                    </ul>
                    <div>
                    <Image width={200} height={200} src="/thumbnails/article1.png" alt="image" />
                    </div>
                    <h3>What SEO Experts Recommend</h3>
                    <p>
                    For marketers, this means that previously high-ranking content may be outranked by a rich Reddit or Quora thread on the same topic. As a
                    result, it’s becoming increasingly important for businesses to establish a presence on these community-aggregated sites to stay connected to
                    users.
                    </p>
                    <ul>
                    <li>
                        <p>
                        <strong>Credibility:</strong>
                        To build trust with your future students, you need to show them that you re the real deal. Having actual experience in the subject
                        matter is the first step to gaining their confidence.
                        </p>
                    </li>
                    </ul>
                    <p>
                    Published on both offline and online marketing materials, these claims boasted investment strategies that were powered by ‘expert AI-driven
                    forecasts’ and that would ‘turn your data into an unfair investing advantage.’ One of them even claimed to be ‘the first regulated AI
                    financial advisor.’
                    </p>
                </article>
                <div className="more-for-author flex flex-col gap-4 px-8 md:px-0 w-full text-left">
                    <p className="font-bold text-primary text-xl">More From Author</p>
                    
                    <Link href="" className="w-full">
                        <div className="rounded-[20px] ring-1 ring-[#EEF0F7] p-[14px] flex gap-4 hover:ring-2 hover:ring-maga-orange transition-all duration-300">
                        <div className="w-[70px] h-[70px] flex shrink-0 justify-center items-center overflow-hidden rounded-2xl">
                            <Image width={200} height={200} src="/thumbnails/thumbnail-1.png" alt="image" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <p className="line-clamp-2 font-bold">Gaya pakaian pernikahan artis Lorem, ipsum dolor.</p>
                            <p className="text-xs leading-[18px] text-[#A3A6AE]">12 Jun, 2024 • Entertainment</p>
                        </div>
                        </div>
                    </Link>
                    <Link href="" className="card">
                        <div className="rounded-[20px] ring-1 ring-[#EEF0F7] p-[14px] flex gap-4 hover:ring-2 hover:ring-maga-orange transition-all duration-300">
                        <div className="w-[70px] h-[70px] flex shrink-0 justify-center items-center overflow-hidden rounded-2xl">
                            <Image width={200} height={200} src="/thumbnails/thumbnail-3.png" alt="image" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <p className="line-clamp-2 font-bold">Gaya pakaian pernikahan artis Lorem, ipsum dolor.</p>
                            <p className="text-xs leading-[18px] text-[#A3A6AE]">12 Jun, 2024 • Entertainment</p>
                        </div>
                        </div>
                    </Link>
                    <Link href="" className="card">
                        <div className="rounded-[20px] ring-1 ring-[#EEF0F7] p-[14px] flex gap-4 hover:ring-2 hover:ring-maga-orange transition-all duration-300">
                        <div className="w-[70px] h-[70px] flex shrink-0 overflow-hidden rounded-2xl">
                            <Image width={200} height={200} src="/thumbnails/thumbnail-2.jpg" alt="image" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <p className="line-clamp-2 font-bold">Gaya pakaian pernikahan artis Lorem, ipsum dolor.</p>
                            <p className="text-xs leading-[18px] text-[#A3A6AE]">12 Jun, 2024 • Entertainment</p>
                        </div>
                        </div>
                    </Link>
                    <Link href="" className="card">
                        <div className="rounded-[20px] ring-1 ring-[#EEF0F7] p-[14px] flex gap-4 hover:ring-2 hover:ring-maga-orange transition-all duration-300">
                        <div className="w-[70px] h-[70px] flex shrink-0 justify-center items-center overflow-hidden rounded-2xl">
                            <Image width={200} height={200} src="/thumbnails/thumbnail-3.png" alt="image" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <p className="line-clamp-2 font-bold">Gaya pakaian pernikahan artis Lorem, ipsum dolor.</p>
                            <p className="text-xs leading-[18px] text-[#A3A6AE]">12 Jun, 2024 • Entertainment</p>
                        </div>
                        </div>
                    </Link>
                    <Link href="" className="card">
                        <div className="rounded-[20px] ring-1 ring-[#EEF0F7] p-[14px] flex gap-4 hover:ring-2 hover:ring-maga-orange transition-all duration-300">
                        <div className="w-[70px] h-[70px] flex shrink-0 overflow-hidden rounded-2xl">
                            <Image width={200} height={200} src="/thumbnails/thumbnail-2.jpg" alt="image" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <p className="line-clamp-2 font-bold">Gaya pakaian pernikahan artis Lorem, ipsum dolor.</p>
                            <p className="text-xs leading-[18px] text-[#A3A6AE]">12 Jun, 2024 • Entertainment</p>
                        </div>
                        </div>
                    </Link>
                </div>
                
            </div>
            <div className="md:px-12 md:mt-20 mt-10 px-4">
                <h1 className="text-left text-2xl font-semibold">Other News You Might <br /> Be Interested</h1>
                <div className="flex py-6 px-2 w-full gap-[30px] overflow-x-auto scrollbar-none">
                    <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                    <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                    <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                    <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                    <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                    <PostCard title='Beberapa artis ini merayakan ultah di tengah hutan raya' image="thumbnail-1" category='SPORT' createdAt='26 Mei 2025' />
                    
                    
                </div>
            </div>
        </section>
    )
  }