"use client"
import { useEffect, useRef, useState } from 'react';
import Button from './Button'
import WebScrapping from './WebScrapping';
import Command from './Command';
import { ModalType } from '@/types';
import Link from 'next/link';
import { useShallow } from 'zustand/react/shallow';
import { useCombineStore } from '@/store';
import { useQuery } from '@tanstack/react-query';
import { scrapeWebsiteData } from '@/services';
import toast from 'react-hot-toast';
import axios, { CancelTokenSource } from 'axios';
import { useDebounce } from '../(hooks)/useDebounce';

const ChatInput = () => {

    const [isOpen, setIsOpen] = useState(true);

    const [modalType, setModalType] = useState<ModalType>("");
    const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

    const { command, response, setResponse, setCommand } = useCombineStore(useShallow((state) => ({
        command: state.command.trim(),
        setResponse: state.setResponse,
        response: state.response,
        setCommand: state.setCommand,
    })));

    const debouncedCommand = useDebounce(command, 3000);

    // perform data scraping using tanstack query
    const { data, error } = useQuery({
        queryKey: ["scrape-data"],
        queryFn: async () => {
            cancelTokenSourceRef.current = axios.CancelToken.source();
            return await scrapeWebsiteData(`/api/scrape-data?url=${command}`, cancelTokenSourceRef.current.token)
        },
        enabled: !!debouncedCommand,
    });

    const handleShowModal = (modalType: ModalType) => {
        setIsOpen(true);
        setModalType(modalType)
    }

    // OPEN COMMAND MODAL USING KEYBOARD SHORTCUT "cmd+return" FOR MAC OR "ctrl+Enter" FOR WINDOWS
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
                setIsOpen(true);
                setModalType("command")
            }
        };

        // ADD KEYDOWN EVENT
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            // CLEANUP KEYDOWN EVENT SIDE-EFFECT
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);



    useEffect(() => {
        if (!command) return;

        if (data && data !== response) {
            setResponse(data);
        }

        if (error) {
            let errorMessage = "";
            if (axios.isCancel(error)) {
                errorMessage = "Request canceled";
            } else {
                errorMessage = "Error fetching LLM response";
            }
            toast.error(errorMessage);
        }
    }, [command, data, error, setResponse, response]);




    return (
        <>
            <div className="fixed z-[400px] bottom-0  px-10 w-full md:w-[calc(100%-16rem)] bg-[#121212]  ">
                <div className="relative">

                    <button onClick={() => handleShowModal("command")} className='w-full hover:bg-white/5 duration-300 flex items-center justify-between gap-2 text-xs md:text-base p-2 text-gray-400 rounded-md bg-transparent outline-none border-2 border-[#202020] focus-visible:outline-[#202020] focus-visible:outline-offset-0'>
                        <p className='text-start truncate'>{"Type '/' for quick access to the command menu. Use '||' to enter multiple prompts."}</p>
                        <span className='min-w-fit ml-auto flex items-center gap-2 duration-300 hover:bg-white/5 p-2 rounded-md'>
                            <img src={`/assets/icons/command.png`} alt="command" />
                            <img src={`/assets/icons/paper-plane-sharp-solid.png`} alt="paper-plane-sharp-solid" className='w-5 h-5' />
                        </span>
                    </button>

                </div>

                <div className="flex items-center justify-between gap-1.5 my-2 w-full">
                    <div className="flex items-center justify-between gap-3">
                        <Button onClick={() => handleShowModal("command")}>
                            <img src={`/assets/icons/slash.png`} alt="slash" className='size-[18px]' />
                            <span className='hover:text-white/80 text-xs md:text-base '>Commands</span>
                        </Button>
                        <Button onClick={() => handleShowModal("webscrapping")}>
                            <img src={`/assets/icons/quote-left-sharp.png`} alt="quote-left-sharp" className='size-[18px]' />
                            <span className='hover:text-white/80 text-xs md:text-base '>Prompts</span>
                        </Button>
                        <Button>
                            <img src={`/assets/icons/user-sharp-solid.png`} alt="user-sharp-solid" className='size-[18px]' />
                            <span className='hover:text-white/80 text-xs md:text-base '>Personas</span>
                        </Button>
                        <Link href={"/editor"} className='flex items-center gap-2' >
                            <img src={`/assets/icons/plus-sharp-solid.png`} alt="plus-sharp-solid" className='size-[18px]' />
                            <span className='hover:text-white/80 text-xs md:text-base '>Add</span>
                        </Link>

                    </div>

                    <div className="flex items-center gap-1.5">
                        <span className='text-sm text-[#797979]'>32/618</span>
                    </div>
                </div>
            </div>

            {modalType === "command" && <Command isOpen={isOpen} setIsOpen={setIsOpen} command={command} setModalType={setModalType} setCommand={setCommand} />}
            {modalType === "webscrapping" && <WebScrapping isOpen={isOpen} setIsOpen={setIsOpen} setModalType={setModalType} />}


        </>
    )
}

export default ChatInput