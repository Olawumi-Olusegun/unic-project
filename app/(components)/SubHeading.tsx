import React from 'react'
import Button from './Button'
import Link from 'next/link'


const SubHeading = () => {
    return (
        <div className='flex items-center justify-between gap-2 border-y border-y-[#202020]'>

            <div className="px-2.5 w-full flex items-center md:justify-between justify-center gap-2">
                <Link href={"#"} className="hidden md:flex items-center gap-2">
                    Frontend Task
                    <img src={`/assets/icons/pen.png`} alt="pen" className='size-3' />
                </Link>
                <div className='flex items-center my-1.5 justify-center bg-[#202020] rounded-md overflow-hidden'>

                    <Button className='self-center hover:bg-white/5 duration-300 px-4 py-2.5 text-sm'> Stream </Button>

                    <Button className='self-center hover:bg-white/5 duration-300 px-4 py-2.5 text-sm'> Parallel </Button>

                    <Button className='bg-[#E4E4E4] text-[#202020] hover:bg-white/70 duration-300 text-sm font-semibold self-center px-4 py-2'>
                        Sequential
                    </Button>

                </div>
                <div className=" items-center gap-1 hidden md:flex">
                    <Button className='duration-300 px-3 h-9 bg-white/5 flex items-center justify-center rounded-md'>
                        chatgpt4.0
                    </Button>
                    <Button className='size-9 duration-300 bg-white/5 flex items-center justify-center rounded-md'>
                        <img src={`/assets/icons/split-sharp-solid.png`} alt="split-sharp-solid" />
                    </Button>
                    <Button className='size-9 duration-300 bg-white/5 flex items-center justify-center rounded-md'>
                        <img src={`/assets/icons/arrow-down.png`} alt="arrow-down" />
                    </Button>
                    <Button className='size-9 duration-300 bg-white/5 flex items-center justify-center rounded-md'>
                        <img src={`/assets/icons/share-sharp-solid.png`} alt="share-sharp-solid" />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default SubHeading