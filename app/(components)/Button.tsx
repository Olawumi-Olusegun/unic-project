import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
    return <button type='button' className={`flex items-center justify-center gap-2 p-1 ${className}`} {...props}>{children}</button>
}

export default Button