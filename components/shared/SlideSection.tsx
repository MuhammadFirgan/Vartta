'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SlideCard from './SlideCard'
import Image from 'next/image'
import 'swiper/css';
import { useRef } from 'react';



export default function SlideSection() {
    // const swiper = useSwiper()
    // console.log(swiper)
    const swiperRef = useRef<any>(null)
  return (
    <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("oke")}
        
        onSwiper={swiper => swiperRef.current = swiper}
        
    >
        <div className='swipper-wrapper'>

            <SwiperSlide className='relative'>
                
                <SlideCard image='hero-background' title='Generation Z Prefer Remote Working Than Big Salary' createdAt='25 Mei 2025' category='bussiness' />
                <div className="flex gap-4 absolute bottom-7 right-7 z-[9999999]">
                    <button type="button" onClick={() => swiperRef.current?.slidePrev()}  className="prev-button p-[10px] ring-1 ring-white rounded-full hover:ring-2 hover:ring-[#FF6B18] transition-all duration-300">
                        <Image width={24} height={24} src="/icons/arrow-left.svg" className="w-[18px] h-[18px]" alt="icons" />
                    </button>
                    <button type="button" onClick={() => swiperRef.current?.slideNext()} className="next-button p-[10px] ring-1 ring-white rounded-full hover:ring-2 hover:ring-[#FF6B18] transition-all duration-300">
                        <Image width={24} height={24} src="/icons/arrow-right.svg" className="w-[18px] h-[18px]" alt="icons" />
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                
                <SlideCard image='hero-background-2' title='Generation Z Prefer Remote Working Than Big Salary' createdAt='25 Mei 2025' category='bussiness' />
                <div className="flex gap-4 absolute bottom-7 right-7 z-[9999999]">
                    <button type="button" onClick={() => swiperRef.current?.slidePrev()}  className="prev-button p-[10px] ring-1 ring-white rounded-full hover:ring-2 hover:ring-[#FF6B18] transition-all duration-300">
                        <Image width={24} height={24} src="/icons/arrow-left.svg" className="w-[18px] h-[18px]" alt="icons" />
                    </button>
                    <button type="button" onClick={() => swiperRef.current?.slideNext()} className="next-button p-[10px] ring-1 ring-white rounded-full hover:ring-2 hover:ring-[#FF6B18] transition-all duration-300">
                        <Image width={24} height={24} src="/icons/arrow-right.svg" className="w-[18px] h-[18px]" alt="icons" />
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                
                <SlideCard image='hero-background-3' title='Generation Z Prefer Remote Working Than Big Salary' createdAt='25 Mei 2025' category='bussiness' />
                <div className="flex gap-4 absolute bottom-7 right-7 z-[9999999]">
                    <button type="button" onClick={() => swiperRef.current?.slidePrev()}  className="prev-button p-[10px] ring-1 ring-white rounded-full hover:ring-2 hover:ring-[#FF6B18] transition-all duration-300">
                        <Image width={24} height={24} src="/icons/arrow-left.svg" className="w-[18px] h-[18px]" alt="icons" />
                    </button>
                    <button type="button" onClick={() => swiperRef.current?.slideNext()} className="next-button p-[10px] ring-1 ring-white rounded-full hover:ring-2 hover:ring-[#FF6B18] transition-all duration-300">
                        <Image width={24} height={24} src="/icons/arrow-right.svg" className="w-[18px] h-[18px]" alt="icons" />
                    </button>
                </div>
            </SwiperSlide>
        </div>
 
    </Swiper>
  )
}
