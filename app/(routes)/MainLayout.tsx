import React from 'react'

type MainLayoutType = {
    children: React.ReactNode;
}


const MainLayout = ({ children }: MainLayoutType) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default MainLayout