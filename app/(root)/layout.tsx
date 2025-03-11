// import MobileNav from '@/components/shared/MobileNav';
import Navbar from '@/components/shared/Navbar';
import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
        <Navbar />

        {/* <div className='sm:hidden'>
            <MobileNav />
        </div> */}
        <main>{children}</main>
    </>
  )
}
