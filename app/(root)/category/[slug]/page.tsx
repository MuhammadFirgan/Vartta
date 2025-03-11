import PostCard from "@/components/shared/PostCard"


export default async function page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
  return (
    <section id="entertainment-news" className="mx-auto flex w-full flex-col items-center gap-[30px]">
        <h1 className=" text-center text-xl md:text-3xl my-8 font-bold leading-[45px]">Explore Our {slug} News</h1>
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
