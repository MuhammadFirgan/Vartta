
import Link from 'next/link'
import { Button } from '../ui/button'
import SearchField from './SearchField'
import Image from 'next/image'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { createUser } from '@/lib/actions/user.action'


export default async function Navbar() {

    const user = await currentUser()

    // const setUser = await createUser({
    //     firstName: user?.firstName || "",
    //     lastName: user?.lastName || "",
    //     clerkId: user?.id || "",
    //     email: user?.emailAddresses[0].emailAddress || "",
    //     photo: user?.imageUrl || "",
    //     username: user?.username || ""
    // })
    console.log(user)


  return (
    <>
    
        <nav className="pt-[30px] px-8 flex w-full  items-center justify-between gap-2  bg-neutral-950">
            <div className='hidden lg:block text-3xl text-amber-500 font-extrabold uppercase'>
                Vartta

            </div>
            <SearchField />
            <div className="flex gap-2">
                {/* <Button asChild> 
                    <Link href="/sign-in">
                        Sign In 
                    </Link>
                    
                </Button>
                <Button asChild> 
                    <Link href="/sign-up">
                        Sign Up
                    </Link>
                    
                </Button> */}
                <SignedOut>
                    <SignInButton>
                        <Button className="bg-primary">Sign In</Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button variant="outline">Sign Up</Button>
                    </SignUpButton>
                </SignedOut>
                    <SignedIn>
                    <UserButton />
                </SignedIn>

                
            </div>
        </nav>

        <nav className="mx-auto mt-[30px] flex w-full max-w-[1130px] items-center justify-between gap-4 overflow-x-auto py-2 scrollbar-none">
            <Link href="/category/halo">
                <div className="flex gap-[10px] rounded-full px-[22px] py-3 ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="h-6 w-6 shrink-0 overflow-hidden">
                        <Image width={24} height={24} className="h-full w-full object-contain" src="/icons/heart-black.svg" alt="" />
                    </div>
                    <p className="text-center font-semibold">Health</p>
                </div>
            </Link>
            <Link href="">
                <div className="flex gap-[10px] rounded-full px-[22px] py-3 ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="h-6 w-6 shrink-0 overflow-hidden">
                        <Image width={24} height={24} className="h-full w-full object-contain" src="/icons/status-up-black.svg" alt="" />
                    </div>
                    <p className="text-center font-semibold">Business</p>
                </div>
            </Link>
            <Link href="">
                <div className="flex gap-[10px] rounded-full px-[22px] py-3 ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="h-6 w-6 shrink-0 overflow-hidden">
                        <Image width={24} height={24} className="h-full w-full object-contain" src="/icons/car-black.svg" alt="" />
                    </div>
                    <p className="text-center font-semibold">Automotive</p>
                </div>
            </Link>
            <Link href="">
                <div className="flex gap-[10px] rounded-full px-[22px] py-3 ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="h-6 w-6 shrink-0 overflow-hidden">
                        <Image width={24} height={24} className="h-full w-full object-contain" src="/icons/global-black.svg" alt="" />
                    </div>
                    <p className="text-center font-semibold">Entertainment</p>
                </div>
            </Link>
            <Link href="">
                <div className="flex gap-[10px] rounded-full px-[22px] py-3 ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="h-6 w-6 shrink-0 overflow-hidden">
                        <Image width={24} height={24} className="h-full w-full object-contain" src="/icons/coffee-black.svg" alt="" />
                    </div>
                    <p className="text-center font-semibold">Foods</p>
                </div>
            </Link>
            <Link href="">
                <div className="flex gap-[10px] rounded-full px-[22px] py-3 ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="h-6 w-6 shrink-0 overflow-hidden">
                        <Image width={24} height={24} className="h-full w-full object-contain" src="/icons/courthouse-black.svg" alt="" />
                    </div>
                    <p className="text-center font-semibold">Politics</p>
                </div>
            </Link>
            <Link href="">
                <div className="flex gap-[10px] rounded-full px-[22px] py-3 ring-1 ring-[#E8EBF4] transition-all duration-300 hover:ring-2 hover:ring-maga-orange">
                    <div className="h-6 w-6 shrink-0 overflow-hidden">
                        <Image width={24} height={24} className="h-full w-full object-contain" src="/icons/cup-black.svg" alt="" />
                    </div>
                    <p className="text-center font-semibold">Sport</p>
                </div>
            </Link>
        </nav>
    </>
  )
}
