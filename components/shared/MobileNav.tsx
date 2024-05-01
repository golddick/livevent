import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import NavItem from "./NavItem"

  

const MobileNav = () => {
  return (
    <nav className=" md:hidden">
        <Sheet>
    <SheetTrigger className="align-middle">
    <Image
    src='/assets/icons/menu.svg'
    alt="menu"
    width={24}
    height={24}
    className="cursor-pointer"
    />
    </SheetTrigger>
    <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    <Image
    src='/assets/images/logo.svg'
    alt="logo"
    width={120}
    height={35}
    className="cursor-pointer"
    />
    <Separator className="border border-gray-10" />
    <NavItem/>
  </SheetContent>
</Sheet>

    </nav>
  )
}

export default MobileNav