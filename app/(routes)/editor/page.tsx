"use client";

import React, { useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic';

import EditorPreview from '@/app/(components)/EditorPreview';
import Button from '@/app/(components)/Button';
import 'react-quill/dist/quill.snow.css';


const inputString = "[include-url: [https://en.wikipedia.org/wiki/Large_language_model] max_execution_time:300 filter:true store:true]";

const Editor = () => {
    const ReactQill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

    const [isMounted, setMounted] = useState(false);
    const [showPreviewEditor, setShowPreviewEditor] = useState(false);
    const [command, setCommand] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isMounted) return null;



    return (
        <>
            <div className="flex flex-col gap-3 p-4 h-full ">
                <div className=" w-full bg-white overflow-y-scroll">
                    {
                        showPreviewEditor
                            ? <EditorPreview value={result} />
                            : <ReactQill onChange={setCommand} value={command} theme='snow' className='h-[60vh] text-black' />
                    }
                </div>
                <div className="flex items-center gap-2">
                    {
                        result && <Button onClick={() => setShowPreviewEditor((prevState) => !prevState)} className='border-2 border-white/10 text-white/80 p-2 py-1 rounded-md '>Toggle Editor</Button>
                    }

                    <Button onClick={() => setCommand(inputString)} className='bg-[#333333] border-2 border-transparent text-white/80 p-2 py-1 rounded-md '>Insert</Button>
                </div>
            </div>
        </>
    )
}

export default Editor