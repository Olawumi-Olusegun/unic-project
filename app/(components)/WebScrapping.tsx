"use client"

import React, { useState } from 'react'
import Button from './Button';
import CommandModal from './modals/CommandModal';
import { ModalType } from '@/types';


interface WebScrappingProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
}



const WebScrapping = ({ isOpen, setIsOpen, setModalType }: WebScrappingProps) => {

    return (
        <>
            <CommandModal isModalOpen={isOpen} ShowModal={setIsOpen} setModalType={() => setModalType("webscrapping")}>
                <CommandModal.Body className='w-full md:w-[70%] rounded-md bg-[#202020] mx-auto h-auto flex flex-col'>

                    <div className="flex flex-col gap-3 p-4">

                        <div className="flex items-center justify-between gap-3 border-b border-b-white/10">
                            <div className="flex items-center gap-2 py-3 flex-1">

                                <div className='bg-green-900/20 p-1 rounded-full text-green-700'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-check"><path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <span className='text-base truncate w-[90%]'>Cyprus - Cyprus Mail</span>
                                    <span className='text-xs text-[#9B9B9B]'>cyprus-mail.com</span>
                                </div>
                            </div>

                            <span className='text-green-800'>Complete</span>
                        </div>

                        <div className="flex items-center justify-between gap-3 border-b border-b-white/10">
                            <div className="flex items-center gap-2 pb-3 flex-1">

                                <div className='bg-green-900/20 p-1 rounded-full text-green-700'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-check"><path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <span className='text-base truncate w-[90%]'>Cyprus - Cyprus</span>
                                    <span className='text-xs text-[#9B9B9B]'>cyprus-mail.com</span>
                                </div>
                            </div>

                            <span className='text-green-800'>Complete</span>
                        </div>

                        <div className="relative flex items-center justify-between gap-3 border-b border-b-white/10">
                            <div className="flex items-center gap-2 pb-3 flex-1">

                                <div className='bg-[#2D2D2D] p-1 rounded-full text-white/80'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x">
                                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                    </svg>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <span className='text-base truncate w-[90%] '>Breaking News, Latest News and Videos | CNN </span>
                                    <span className='text-xs text-[#9B9B9B]'>edition.cnn.com</span>
                                </div>
                            </div>

                            <span className='text-[#9B9B9B]'>Accessing</span>
                            <div className="absolute bottom-0 left-0 bg-[#2AABBC] h-[4px] w-[50%] "  ></div>
                        </div>

                        <div className="relative flex items-center justify-between gap-3 border-b border-b-white/10">
                            <div className="flex items-center gap-2 pb-3 flex-1">

                                <div className='bg-[#2D2D2D] p-1 rounded-full text-white/80'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x">
                                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                    </svg>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <span className='text-base truncate w-[90%]'>Cyprus - Google Search</span>
                                    <span className='text-xs text-[#9B9B9B]'>google.com</span>
                                </div>
                            </div>

                            <span className='text-[#9B9B9B]'>Accessing</span>
                            <div className="absolute bottom-0 left-0 bg-[#2AABBC] h-[4px] w-[30%] "  ></div>
                        </div>

                        <div className="flex items-center justify-between gap-3 border-b border-b-white/10">
                            <div className="flex items-center gap-2 pb-3 flex-1">

                                <div className='bg-[#2D2D2D] p-1 rounded-full text-white/80'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x">
                                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                    </svg>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <span className='text-base truncate w-[90%]'>Cyprus - Google Search</span>
                                    <span className='text-xs text-[#9B9B9B]'>google.com</span>
                                </div>
                            </div>

                            <span className='text-[#9B9B9B]'>Accessing</span>
                        </div>

                        <div className="flex items-center justify-between gap-3 border-b border-b-white/10">
                            <div className="flex items-center gap-2 pb-3 flex-1">

                                <div className='bg-[#2D2D2D] p-1 rounded-full text-white/80'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x">
                                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                    </svg>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <span className='text-base truncate w-[90%]'>World - Cyprus Mail</span>
                                    <span className='text-xs text-[#9B9B9B]'>cyprus-mail.com</span>
                                </div>
                            </div>

                            <span className='text-[#9B9B9B]'>Accessing</span>
                        </div>

                    </div>
                    <CommandModal.Footer className='bg-[#2D2D2D] p-3 py-4 justify-between'>
                        <Button type='button' className="w-fit flex items-center gap-3">
                            <div className='bg-[#1E1E1E] p-1 w-fit rounded-full text-white/80'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-x">
                                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                </svg>
                            </div>
                            <span>Cancel All</span>
                        </Button>
                        <span className='text-[#9B9B9B] text-xs'>Searching 8 of 10 websites</span>
                    </CommandModal.Footer>

                </CommandModal.Body>
            </CommandModal>
        </>
    )
}

export default WebScrapping