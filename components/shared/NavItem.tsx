'use client'

import { headerLinks } from '@/connstants/indext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItem = () => {
    const pathName = usePathname();
  return (
    <ul className=' md:flex-between flex w-full items-start gap-5 md:flex-row flex-col  '>
        {
            headerLinks.map((link)=> {
                const isActive = pathName === link.route;
                return(
                    <li
                    key={link.route}
                    className={
                        `${
                            isActive && 'text-purple-600'
                        } flex-center p-medium-16 whitespace-nowrap`
                    }
                    > 
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                )
            })
        }

    </ul>
  )
}

export default NavItem