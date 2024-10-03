
export type SidebarProps = {
    sidebar: {
        isSidebarOpen: boolean;
        toggleSidebar: () => void;
        isLibraryOpen: boolean;
        toggleLibrary: () => void;
    }
}

export type ModalType = "command" | "webscrapping" | "editor" | "";