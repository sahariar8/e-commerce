"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Navbar = () => {

    const pathName = usePathname();
    const links = [
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },
        {
            title:'Contact',
            path:'/contact'
        }
    ]

  return (
    <nav className='bg-slate-800 flex justify-between items-center px-8 py-2'>
        <h6>My <span className='text-green-500'>Commerce</span></h6>
        <ul className='flex justify-between items-center space-x-4'>
              
            {
                links?.map((link)=><Link className={`${pathName === link.path && "text-green-500"}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
            
        </ul>
    </nav>
  )
}

export default Navbar