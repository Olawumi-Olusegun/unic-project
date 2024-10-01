"use client";
import React from 'react'
import Link from 'next/link';
import { SidebarProps } from '@/types';



const Sidebar = ({ sidebar }: SidebarProps) => {

    const { isSidebarOpen, toggleSidebar, isLibraryOpen, toggleLibrary } = sidebar;

    return (
        <aside className={`fixed top-0 left-0 h-dvh bg-[#121212] border-r border-r-[#202020] p-4 text-white md:translate-x-0 transform transition-transform duration-300 ease-in-out md:static flex flex-col gap-2 w-64 z-50 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} `}>
            <div className="flex flex-col gap-4">
                <button type='button' onClick={toggleSidebar} className="text-xl font-bold text-[15px flex items-center gap-1">
                    <img src={`/assets/icons/UNIC-logo.png`} alt="UNIC-logo" />
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 duration-300 text-[15px] text-start text-black font-bold py-2 px-4 rounded-full w-full">
                    + New Chat
                </button>
            </div>

            <ul className="flex-1 flex flex-col gap-4">
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2 text-[15px] text-white hover:bg-white/5 rounded-md">
                        <img src={`/assets/icons/clock-rotate-left.png`} alt="clock-rotate-left" className='size-3' />
                        Recents
                    </Link>
                </li>
                <li className="relative">
                    <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-white/5 rounded-md"
                        aria-expanded={isLibraryOpen}
                        onClick={toggleLibrary}
                    >
                        <div className="flex items-center gap-2 text-white text-[15px]">
                            <img src={`/assets/icons/book-blank.png`} alt="book-blank" className=' size-3' />
                            Library
                        </div>
                        <svg className={`w-4 h-4 transform transition-transform duration-300 ${isLibraryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    <ul className={`grid duration-300 ${isLibraryOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="w-full duration-300 overflow-hidden">
                            <li>
                                <Link href="#" className="block px-4 py-2 text-[15px] text-white/80 hover:bg-white/5 rounded-md">Lists</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 text-[15px] text-white/80 hover:bg-white/5 rounded-md">Personas</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 text-[15px] text-white/80 hover:bg-white/5 rounded-md">Agents</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 text-[15px] text-white/80 hover:bg-white/5 rounded-md">Projects</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 text-[15px] text-white/80 hover:bg-white/5 rounded-md">Prompts</Link>
                            </li>
                        </div>
                    </ul>
                </li>

                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2 text-[15px] text-white hover:hover:bg-white/5 rounded-md">
                        <img src={`/assets/icons/cloud.png`} alt="cloud" className=' size-3' />
                        App Files
                    </Link>
                </li>

            </ul>

            <div className="w-full mt-auto flex flex-col gap-2">
                <div className="w-full mt-auto flex flex-col bg-[#202020] rounded-md overflow-hidden">
                    <div className="w-full p-3.5 text-[15px]">
                        <span className='block text-white/80'>125,000 tokens left</span>
                        <span className='block text-xs text-[#666666]'>~145,000 words</span>
                    </div>
                    <span className='bg-[#282828] text-xs px-3.5 py-1.5 w-full'>See My Plan</span>
                </div>

                <Link href={"#"}>
                    <span className="flex items-center gap-2 px-4 py-2 text-[15px] text-white/80 hover:bg-white/5 rounded-md">
                        <img src={`/assets/icons/arrow-up.png`} alt="arrow-up" className='size-3' />
                        <span>Shared</span>
                    </span>
                </Link>

                <Link href={"#"}>
                    <span className="flex items-center gap-2 px-4 py-2 text-[15px] text-white/80 hover:bg-white/5 rounded-md">
                        <img src={`/assets/icons/trash-can.png`} alt="trash-can" className='h-full size-3' />
                        <span>Recently Deleted</span>
                    </span>
                </Link>

            </div>

        </aside>
    )
}

export default Sidebar