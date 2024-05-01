import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItem from "./NavItem"
import MobileNav from "./MobileNav"


const Header = () => {
  return (
    <header className="w-full border-b">
        <div className=" wrapper flex items-center justify-between">
        <Link href='/' className="w-36">
            {/* <Image src='/assets/images/logo.svg' width={120} height={30}
            alt="logo"
            /> */}
            livevent
        </Link>

            <SignedIn>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItem/>
                </nav>
            </SignedIn>

        <div className="flex w-32 justify-end gap-4">
            <SignedIn>
                <UserButton afterSignOutUrl="/"/>
                <MobileNav/>
            </SignedIn>
            <SignedOut>
            <Button asChild className="rounder-full" size='lg'>
                <Link href='/sign-in'>
                    login
                </Link>
            </Button>
                
            </SignedOut>
        </div>
        </div>
        </header>

  )
}

export default Header