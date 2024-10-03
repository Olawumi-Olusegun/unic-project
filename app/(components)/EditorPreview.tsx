"use client";

import React, { useEffect, useMemo, useState } from 'react'
import 'react-quill/dist/quill.bubble.css';
import dynamic from 'next/dynamic';

interface EditorPreviewProps {
    value: string;
}

const EditorPreview = ({ value }: EditorPreviewProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const ReactQill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className='bg-white'>
            <ReactQill value={value} theme='bubble' className='h-[60vh] text-black' />
        </div>
    )
}

export default EditorPreview