"use client"
import { useEffect, useState } from 'react';
import Button from './Button'
import WebScrapping from './WebScrapping';
import Command from './Command';
import { ModalType } from '@/types';
import axios from 'axios';
import Link from 'next/link';

const ChatInput = () => {

    const [isOpen, setIsOpen] = useState(true);

    const [modalType, setModalType] = useState<ModalType>("")
    const [command, setCommand] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false)

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


    const handleDataScrapping = async () => {

        try {
            setIsLoading(true);
            const { data } = await axios.get(`/api/scrape-data?url=${command}`);

            if (data) {
                setResult(data);
            }

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!command) return;
        handleDataScrapping();
    }, [command])

    return (
        <>
            <div className="fixed bottom-0 w-[100%] md:w-[80%] mx-auto bg-[#121212] px-10 ">
                <div className="relative">

                    <button onClick={() => handleShowModal("command")} className='min-w-full flex items-center justify-between gap-2 text-xs md:text-base p-2 text-gray-400 rounded-md bg-transparent outline-none border-2 border-[#202020] focus-visible:outline-[#202020] focus-visible:outline-offset-0'>
                        <p className='text-start truncate'>Type '/' for quick access to the command menu. Use '||' to enter multiple prompts.</p>
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