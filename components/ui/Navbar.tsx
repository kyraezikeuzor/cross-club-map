'use client'
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import { House, Menu, X, Map, University, Users } from 'lucide-react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { sitemap } from '@/data/sitemap'
import { SearchBar } from "@/components/ui/SearchBar"

export function NavbarItem({ 
    href, 
    children 
  }:{
    href:string, 
    children:React.ReactNode
  }) {
    const pathname = usePathname();
  
    return (
      <li>
        <Link 
          href={href} 
          className={`flex flex-row items-center justify-center gap-2 
            ${pathname === href ? 'bg-[--clr-base-accent] text-[--clr-grey-dark] text-white px-4 py-1 rounded-lg' : ''}`}
        >
          {children}
        </Link>
      </li>
    );
}

export function NestedNavbarItem({ 
    label, 
    children, 
    isOpen, 
    onToggle, 
    index 
  }: { 
    label: string, 
    children: React.ReactNode, 
    isOpen: boolean, 
    onToggle: (index: number) => void, 
    index: number 
  }) {
    return (
      <div className="relative">
        <button
          className="flex items-center space-x-1 px-4 py-2 font-medium hover:opacity-75 focus:outline-none"
          onClick={() => onToggle(index)}
        >
          <span>{label}</span>
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-1 w-64 p-3 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {children}
            </div>
          </div>
        )}
      </div>
    );
}

const Navbar = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const handleToggle = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const [openMobileNav, setOpenMobileNav] = useState(false);
    const handleMobileNavState = () => {
        setOpenMobileNav(!openMobileNav);
    }
    
    return (
        <nav className={`z-[99999] sticky right-0 left-0 top-0 flex-col items-center backdrop-blur shadow-sm bg-white border border-[--clr-base-accent] `}> 
            <div className='w-full flex flex-row items-center gap-2 w-full p-5 md:py-[8px] md:px-[2vw] '>  
                <ul className='w-full flex flex-row items-center justify-between gap-2'>
                    <ul>
                        <li>
                            <Logo/>
                        </li>
                    </ul>
                    <ul className='hidden md:flex flex-row items-center justify-center font-medium w-full  text-sm text-[--clr-base-text]'>
                        {sitemap.map((item,index)=>(
                            <NestedNavbarItem  
                              key={index}
                              label={item.section}
                              isOpen={openIndex === index}
                              onToggle={handleToggle}
                              index={index}
                            >
                                <div className='flex flex-col gap-2 text-sm'>
                                    {item.pages.map((item,index)=>(
                                        <Link href={item.path} key={index}>
                                            <div className='flex flex-col hover:opacity-75'>
                                                <span key={index}>{item.title}</span>
                                                <span key={index} className='text-xs opacity-75'>{item.description}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </NestedNavbarItem>
                        ))}
                    </ul>
                    <ul>
                        <li>
                            <SearchBar/>
                        </li>
                    </ul>     
                </ul>
                {/*MOBILE NAVBAR RESPONSIVE CONTENT*/}
                <ul className='md:hidden w-full flex flex-row items-center justify-end  gap-2'>
                    <Menu onClick={()=>setOpenMobileNav(!openMobileNav)} />
                    {openMobileNav && 
                    <div className='md:hidden fixed top-2 left-2 right-2 bg-[--clr-base] border border-[--clr-base-accent] shadow-md rounded-xl'> 
                        <div className='w-full h-auto relative font-semibold flex flex-col gap-2 p-4 rounded-xl'>
                            <ul className='mt-12 flex flex-col' onClick={handleMobileNavState}>
                                <li onClick={handleMobileNavState} className='inline-block border-b border-[--clr-base-accent] py-2 hover:bg-[--clr-grey-light]  cursor-pointer'>
                                    <Link href='/explore'>Explore</Link>
                                </li>
                                <li onClick={handleMobileNavState} className='inline-block border-b border-[--clr-base-accent] py-2 hover:bg-[--clr-grey-light]  cursor-pointer'>
                                    <Link href='/community'>Community</Link>
                                </li>
                            </ul>
                            <X onClick={handleMobileNavState} className='absolute top-2 right-4 cursor-pointer'/>
                        </div>
                    </div>}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;