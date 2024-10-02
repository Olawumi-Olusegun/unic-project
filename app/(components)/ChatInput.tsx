import { useState } from 'react';
import Button from './Button'
import CommandModal from './modals/CommandModal'


const ChatInput = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <div className="fixed bottom-0 w-[100%] md:w-[80%] mx-auto bg-[#121212] px-10">
                <div className="relative">


                    <button onClick={() => setIsOpen(true)} className='min-w-full flex items-center justify-between gap-2 text-xs md:text-base p-3 pr-2 text-gray-400 rounded-md bg-transparent outline-none border-2 border-[#202020] focus-visible:outline-[#202020] focus-visible:outline-offset-0'>
                        <p className='text-start'>Type '/' for quick access to the command menu. Use '||' to enter multiple prompts.</p>
                        <span className='min-w-fit ml-auto flex items-center gap-2 duration-300 hover:bg-white/5 p-2 rounded-md'>
                            <img src={`/assets/icons/command.png`} alt="command" />
                            <img src={`/assets/icons/paper-plane-sharp-solid.png`} alt="paper-plane-sharp-solid" className='w-5 h-5' />
                        </span>
                    </button>

                </div>

                <div className="flex items-center justify-between gap-1.5 my-2 w-full">
                    <div className="flex items-center justify-between gap-3">
                        <Button>
                            <img src={`/assets/icons/slash.png`} alt="slash" className='size-[18px]' />
                            <span className='hover:text-white/80 text-xs md:text-base '>Commands</span>
                        </Button>
                        <Button>
                            <img src={`/assets/icons/quote-left-sharp.png`} alt="quote-left-sharp" className='size-[18px]' />
                            <span className='hover:text-white/80 text-xs md:text-base '>Prompts</span>
                        </Button>
                        <Button>
                            <img src={`/assets/icons/user-sharp-solid.png`} alt="user-sharp-solid" className='size-[18px]' />
                            <span className='hover:text-white/80 text-xs md:text-base '>Personas</span>
                        </Button>
                        <Button>
                            <img src={`/assets/icons/plus-sharp-solid.png`} alt="plus-sharp-solid" className='size-[18px]' />
                            <span className='hover:text-white/80 text-xs md:text-base '>Add</span>
                        </Button>

                    </div>

                    <div className="flex items-center gap-1.5">
                        <span className='text-sm text-[#797979]'>32/618</span>
                    </div>
                </div>



            </div>
            <CommandModal isModalOpen={isOpen} ShowModal={setIsOpen}>
                <CommandModal.Body className='w-full md:w-[50%] rounded-md bg-[#202020] mx-auto h-auto flex flex-col'>
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
                                    className='p-2 rounded-md text-sm placeholder:text-[#797979] bg-transparent outline-none border-none focus-visible:outline-white/5 focus-visible:outline-offset-0 flex-1' />
                                <div className="flex items-center gap-2">
                                    <Button className='border-2 border-white/10 text-white/80 p-2 py-1 rounded-md '>Advanced</Button>
                                    <Button className='bg-[#333333] border-2 border-transparent text-white/80 p-2 py-1 rounded-md '>Insert</Button>
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
                                    placeholder='Search Term'
                                    className='p-2 rounded-md text-sm placeholder:text-[#797979] bg-transparent outline-none border-none focus-visible:outline-white/5 focus-visible:outline-offset-0 flex-1' />
                                <div className="flex items-center gap-2">
                                    <Button className='border-2 border-white/10 text-white/80 p-2 py-1 rounded-md '>Advanced</Button>
                                    <Button className='bg-[#333333] border-2 border-transparent text-white/80 p-2 py-1 rounded-md '>Insert</Button>
                                </div>
                            </div>
                        </div>


                    </div>
                </CommandModal.Body>
            </CommandModal>
        </>
    )
}

export default ChatInput