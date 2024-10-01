import { cn } from '@/utils/cn';
import React, { HtmlHTMLAttributes } from 'react'

interface ChatDisplayProps extends HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
}

interface HeaderProps extends HtmlHTMLAttributes<HTMLHeadElement> {
    className?: string;
}

interface TextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
    className?: string;
}

interface ButtonsProps extends HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
}

const ChatDisplay = ({ children, className = '', ...props }: ChatDisplayProps) => {
    return (
        <div className={cn(`mb-20 py-5 flex flex-col gap-3 rounded-md w-[90%] md:w-fit md:max-w-[70%]`, className)} {...props}>
            {children}
        </div>
    )
}


const Header = ({ children, className = '', ...props }: HeaderProps) => {
    return <h2 className={cn(`px-5 text-[#969696] font-semibold`, className)} {...props}>{children}</h2>
}

const Text = ({ children, className = '', ...props }: TextProps) => {
    return <p className={cn(`px-5 rounded-md`, className)} {...props}>{children}</p>
}

const Buttons = ({ children, className = '', ...props }: ButtonsProps) => {
    return <div className={cn(`flex items-center gap-1.5 bg-[#202020] rounded-md w-fit p-3 py-2`, className)} {...props}>{children}</div>
}


ChatDisplay.Header = Header;
ChatDisplay.Text = Text;
ChatDisplay.Buttons = Buttons;


export default ChatDisplay