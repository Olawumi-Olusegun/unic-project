import React, { createContext, useContext, ReactNode, HtmlHTMLAttributes, useRef, useEffect } from 'react';
import Button from '../Button';
import { cn } from '@/utils/cn';
import { ModalType } from '@/types';

// ModalContextType type for internal use in the Modal
interface ModalContextType {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


// CloseModalProps type for internal use in the Modal
interface CloseModalProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

// HeaderProps type for internal use in the Modal
interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
}

// ModalContext
const ModalContext = createContext<ModalContextType>({ isOpen: false, setIsOpen: () => { } });


// Hook to use the modal context in any component
export const useModalContext = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModalContext must be used within a ModalProvider');
    }
    return context;
};

// Define the modal component props
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    isModalOpen: boolean;
    ShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
    modalType?: ModalType;
}
// Define the modal component props
interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}
interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

// Main Modal component
const CommandModal = ({ className = '', isModalOpen, ShowModal, modalType, setModalType, children, ...props }: ModalProps) => {

    const modalRef = useRef<HTMLDivElement | null>(null);

    const contextValue = { isOpen: isModalOpen, setIsOpen: ShowModal };

    useEffect(() => {

        // Handle keyboard button events 
        const handleEscKeyPress = (event: KeyboardEvent) => {
            // Ensures the set the view to top
            window.scrollTo(0, 0);

            // Close Modal on ESCAPE KEY press
            if (modalRef?.current && event.key === 'Escape') {
                ShowModal(false);
                setModalType('')
            }

        }

        if (typeof window !== undefined) {
            if (isModalOpen) {
                document.body.style.overflow = "hidden";
                document.addEventListener("keydown", handleEscKeyPress);
            }
        }

        // Cleanup side effects
        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("keydown", handleEscKeyPress);
        }

    }, [isModalOpen, ShowModal]);

    if (!isModalOpen) {
        return null
    }

    return (
        <ModalContext.Provider value={contextValue}>
            <div ref={modalRef} onClick={() => ShowModal(false)} className={cn("fixed p-2 flex items-center justify-center z-50 inset-0 bg-white bg-opacity-5 backdrop-blur-md h-dvh w-full  ", className)} {...props}>
                {children}
            </div>
        </ModalContext.Provider>
    );
};

// Compound components
const Header = ({ children, className, ...props }: HeaderProps) => (
    <div className={cn("w-full relative border-b p-3 px-4 border-white/10 flex items-center gap-4 ", className)} {...props}>
        <h2 className="flex items-center gap-2">
            {children}
        </h2>
        <CloseButton />
    </div>
);

const Body = ({ children, className, ...props }: ModalBodyProps) => (
    <div onClick={(event) => event.stopPropagation()} className={cn("flex flex-col gap-3 ", className)} {...props}>
        {children}
    </div>
);


const Footer = ({ children, className, ...props }: ModalFooterProps) => {
    return (
        <div className={cn("w-full flex items-center gap-3", className)} {...props}>
            {children}
        </div>
    )
}

// Modal close button
const CloseButton = ({ className = '', ...props }: CloseModalProps) => {
    const { setIsOpen } = useContext(ModalContext);
    return (
        <>
            <Button onClick={() => setIsOpen(false)} type='button' className={cn("h-8 w-8 p-1 outline-none absolute top-2 right-4 focus-visible:outline-offset-0 focus-visible:outline-white/30 flex items-center justify-center rounded-full border border-none hover:bg-white/5", className)} {...props}>
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
            </Button>
        </>
    );
};

CommandModal.Header = Header;
CommandModal.Body = Body;
CommandModal.CloseButton = CloseButton;
CommandModal.Footer = Footer;

export default CommandModal;
