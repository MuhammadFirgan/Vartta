import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Label } from "../ui/label"


export default function SearchField() {
  return (
    <form className="relative ">
      <Label htmlFor="search" className="pointer-events-none flex">
          <div className="absolute left-5 top-1/2 h-5 w-5 shrink-0 -translate-y-1/2 overflow-hidden">
              <Image className="h-full w-full object-contain" src="/icons/search-black.svg" width={24} height={24} alt="search" />
          </div>
      </Label>
      <Input name="search"
          placeholder="Search hot trendy news today..." className="border-none bg-neutral-900 placeholder:text-neutral-700 w-full rounded-full px-[50px] py-6 font-semibold ring-1 ring-neutral-800 transition-all duration-300 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-maga-orange"/>
    </form>
  )
}
