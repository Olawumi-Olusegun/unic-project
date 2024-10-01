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
                <div className='flex items-center justify-center gap-2 bg-[#202020] rounded-md overflow-hidden'>

                    <Button className='p-2.5 rounded-md'> Stream </Button>

                    <Button className='p-2.5 rounded-md'> Parallel </Button>

                    <Button className='bg-[#E4E4E4] text-[#202020] font-semibold p-2.5'>
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