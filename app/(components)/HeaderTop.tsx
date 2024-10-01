"use client"
import { SidebarProps } from '@/types';
import Link from 'next/link'
import React from 'react'


const HeaderTop = ({ sidebar }: SidebarProps) => {

    const { toggleSidebar } = sidebar;

    return (
        <div className='flex items-center gap-2 justify-between py-2 px-4'>
            <button onClick={toggleSidebar} type='button' className="flex items-center text-xl font-bold gap-1 md:opacity-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <div className="flex items-center ">
                <Link href="#" className="flex items-center px-3 py-2 text-base hover:bg-white/5 rounded-md">
                    Dashboard
                </Link>
                <Link href="#" className="flex items-center px-3 py-2 text-base hover:bg-white/5 rounded-md">
                    My Apps
                </Link>
                <Link href="#" className="flex items-center px-3 py-2 text-base hover:bg-white/5 rounded-md">
                    App Store
                </Link>
            </div>
            <button type='button' className="text-xl flex items-center gap-1 ">
                <span className='rounded-full p-1 size-9 bg-blue-500 text-sm text-center text-black flex items-center justify-center'>AP</span>
                <img src={`/assets/icons/caret-down.png`} alt="caret-down" className='size-2' />
            </button>
        </div>
    )
}

export default HeaderTop