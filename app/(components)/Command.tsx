"use client"
import React from 'react'
import CommandModal from './modals/CommandModal'
import Button from './Button';
import { ModalType } from '@/types';

interface CommandProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
    setCommand: React.Dispatch<React.SetStateAction<string>>;
    command: string;
}

const inputString = "[include-url: [https://en.wikipedia.org/wiki/Large_language_model] max_execution_time:300 filter:true store:true]";

const Command = ({ isOpen, setIsOpen, setModalType, setCommand, command }: CommandProps) => {

    return (
        <CommandModal isModalOpen={isOpen} ShowModal={setIsOpen} setModalType={() => setModalType("command")}>
            <CommandModal.Body className='w-full md:w-[50%] border border-white/5 rounded-md bg-[#202020] mx-auto h-auto flex flex-col'>
                <CommandModal.Header>
                    <div className="flex items-center gap-2">
                        <img src={`/assets/icons/slash.png`} alt="slash" className='size-[18px]' />
                        <span>Command</span>
                    </div>
                </CommandModal.Header>
                <div className="flex flex-col gap-3 p-4">

                    <div className="flex flex-col gap-5 bg-[#121212] p-5 rounded-md ">
                        <div className="flex items-center gap-2 h-10 w-full ">
                            <img src={`/assets/icons/earth-shape.png`} alt="earth-shape" className='size-4' />
                            <span>Web Search</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 w-full">
                            <input
                                type="text"
                                placeholder='Search Term'
                                value={command}
                                onChange={(event) => setCommand(event.target.value)}
                                className='p-2 rounded-md text-sm placeholder:text-[#797979] bg-transparent outline-none border-none focus-visible:outline-white/5 focus-visible:outline-offset-0 flex-1' />
                            <div className="flex items-center gap-2">
                                <Button className='border-2 border-white/10 text-white/80 p-2 py-1 rounded-md '>Advanced</Button>
                                <Button onClick={() => setCommand(inputString)} className='bg-[#333333] border-2 border-transparent text-white/80 p-2 py-1 rounded-md '>Insert</Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 bg-[#121212] p-5 rounded-md ">
                        <div className="flex items-center gap-2 h-10 w-full ">
                            <img src={`/assets/icons/link.png`} alt="link" className='size-4' />
                            <span>Include url</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 w-full">
                            <input
                                type="text"
                                placeholder='Enter URL'
                                className='p-2 rounded-md text-sm placeholder:text-[#797979] bg-transparent outline-none border-none focus-visible:outline-white/5 focus-visible:outline-offset-0 flex-1' />
                            <div className="flex items-center gap-2">
                                <Button className='border-2 border-white/10 text-white/80 p-2 py-1 rounded-md '>Advanced</Button>
                                <Button onClick={() => setCommand(inputString)} className='bg-[#333333] border-2 border-transparent text-white/80 p-2 py-1 rounded-md '>Insert</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </CommandModal.Body>

        </CommandModal>
    )
}

export default Command