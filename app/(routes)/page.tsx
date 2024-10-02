"use client"
import React from 'react'
import TextDisplay from '../(components)/ChatDisplay'
import Button from '../(components)/Button'
import ChatInput from '../(components)/ChatInput'

const MainPage = () => {

    return (
        <>
            <div className='relative my-16 px-10 w-full flex-1 flex flex-col gap-4 h-screen overflow-y-auto no-scrollbar'>

                <TextDisplay className='bg-[#15272A]'>
                    <TextDisplay.Header>
                        DEFAULT Persona
                    </TextDisplay.Header>
                    <TextDisplay.Text className='bg-transparent'>
                        World-Class React/Front-End Developer
                    </TextDisplay.Text>
                </TextDisplay>

                <TextDisplay className='bg-transparent px-0'>
                    <TextDisplay.Header className='px-0'>
                        World-Class React/Front-End Developer . ChatGPT 4o
                    </TextDisplay.Header>
                    <TextDisplay.Text className='px-0'>
                        How can I help you today to ensure your prompts yield the best possible results?
                    </TextDisplay.Text>
                    <TextDisplay.Buttons>
                        <Button className='size-8 duration-300 hover:bg-white/5 flex items-center justify-center rounded-md '>
                            <img src={`/assets/icons/sharp-solid.png`} alt="sharp-solid" className='size-4' />
                        </Button>
                        <Button className='size-8 duration-300 hover:bg-white/5 flex items-center justify-center rounded-md'>
                            <img src={`/assets/icons/arrow-down.png`} alt="arrow-down" className='size-3' />
                        </Button>
                        <Button className='size-8 duration-300 hover:bg-white/5 flex items-center justify-center rounded-md'>
                            <img src={`/assets/icons/split-sharp-solid.png`} alt="split-sharp-solid" className='size-3' />
                        </Button>
                    </TextDisplay.Buttons>
                </TextDisplay>

                <TextDisplay className='ml-auto bg-transparent'>

                    <TextDisplay.Text className='text-white/80 px-0 '>
                        Create a responsive login form component in React using functional components and hooks. The form should include fields for a username and password, with validation rules: the username must be an email address, and the password should be at least 8 characters long. Include state management for form inputs, error messages for validation, and a submit button that triggers a mock API call to authenticate the user. Style the form using CSS-in-JS with styled-components or a similar library, ensuring it looks good on both desktop and mobile screens.
                    </TextDisplay.Text>
                    <TextDisplay.Buttons>
                        <Button className='size-8 duration-300 hover:bg-white/5 flex items-center justify-center rounded-md '>
                            <img src={`/assets/icons/sharp-solid.png`} alt="sharp-solid" className='size-4' />
                        </Button>
                        <Button className='size-8 duration-300 hover:bg-white/5 flex items-center justify-center rounded-md'>
                            <img src={`/assets/icons/arrow-down.png`} alt="arrow-down" className='size-3' />
                        </Button>
                        <Button className='size-8 duration-300 hover:bg-white/5 flex items-center justify-center rounded-md'>
                            <img src={`/assets/icons/split-sharp-solid.png`} alt="split-sharp-solid" className='size-3' />
                        </Button>
                    </TextDisplay.Buttons>
                </TextDisplay>

                <TextDisplay className='ml-auto'>
                    <TextDisplay.Text className='text-white/80  bg-[#202020] py-5'>
                        Create a responsive login form component in React using functional components and hooks. The form should include fields for a username and password, with validation rules: the username must be an email address, and the password should be at least 8 characters long. Include state management for form inputs, error messages for validation, and a submit button that triggers a mock API call to authenticate the user. Style the form using CSS-in-JS with styled-components or a similar library, ensuring it looks good on both desktop and mobile screens.
                    </TextDisplay.Text>
                    <TextDisplay.Buttons>
                        <Button className='size-8 duration-300 hover:bg-white/5 flex items-center justify-center rounded-md '>
                            <img src={`/assets/icons/sharp-solid.png`} alt="sharp-solid" className='size-4' />
                        </Button>
                        <Button className='size-8 duration-300 hover:bg-white/5 flex items-center justify-center rounded-md'>
                            <img src={`/assets/icons/arrow-down.png`} alt="arrow-down" className='size-3' />
                        </Button>
                        <Button className='size-8 duration-300 hover:bg-white/5 flex items-center justify-center rounded-md'>
                            <img src={`/assets/icons/split-sharp-solid.png`} alt="split-sharp-solid" className='size-3' />
                        </Button>
                    </TextDisplay.Buttons>
                </TextDisplay>
            </div>
            <ChatInput />
        </>
    )
}

export default MainPage