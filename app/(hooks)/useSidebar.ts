
import { useEffect, useState } from 'react'

const useSidebar = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const [isLibraryOpen, setIsLibraryOpen] = useState(false);

    const toggleLibrary = () => {
        setIsLibraryOpen((prevState) => !prevState);
    };

    const toggleSidebar = () => {
        setSidebarOpen((prevState) => !prevState)
    }

    useEffect(() => {
        const handleScreenResize = () => {
            if (window.innerWidth >= 0) {
                setSidebarOpen(false); 
            }
          };
      
          window.addEventListener('resize', handleScreenResize);

          return () => {
            window.removeEventListener('resize', handleScreenResize);
          };

    }, [])

    return { isSidebarOpen, toggleSidebar, isLibraryOpen, toggleLibrary }
}

export default useSidebar 