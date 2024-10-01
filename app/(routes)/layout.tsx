"use client"
import React from 'react'
import Sidebar from '../(components)/Sidebar';
import HeaderTop from '../(components)/HeaderTop';
import useSidebar from '../(hooks)/useSidebar';
import SubHeading from '../(components)/SubHeading';

type MainLayoutType = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutType) => {

    const sidebar = useSidebar();

    return (
        <div className='h-dvh flex'>
            <Sidebar sidebar={sidebar} />
            <main className='flex-1 flex flex-col'>
                <HeaderTop sidebar={sidebar} />
                <SubHeading />
                {children}
            </main>
        </div>
    )
}

export default MainLayout