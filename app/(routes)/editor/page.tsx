"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic';

import EditorPreview from '@/app/(components)/EditorPreview';
import Button from '@/app/(components)/Button';
import 'react-quill/dist/quill.snow.css';
import { useCombineStore } from '@/store';
import { useShallow } from 'zustand/react/shallow';
import appConstants from '@/app/(constants)';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { scrapeWebsiteData } from '@/services';
import toast from 'react-hot-toast';
import { LoaderCircle } from "lucide-react"
import axios, { CancelTokenSource } from 'axios';

const Editor = () => {
    const ReactQill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

    const [isMounted, setIsMounted] = useState(false);
    const [showPreviewEditor, setShowPreviewEditor] = useState(false);
    const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

    const queryClient = useQueryClient();

    const { response, editorCommand, setResponse, setEditorCommand } = useCombineStore(useShallow((state) => ({
        response: state.response.trim(),
        editorCommand: state.editorCommand.trim(),
        setResponse: state.setResponse,
        setEditorCommand: state.setEditorCommand,
    })));

    // perform data scraping using tanstack query
    const { data, isLoading, error } = useQuery({
        queryKey: ["scrape-data"],
        queryFn: async () => {
            cancelTokenSourceRef.current = axios.CancelToken.source();
            return await scrapeWebsiteData(`/api/scrape-data?url=${editorCommand}`, cancelTokenSourceRef.current.token)
        },
        enabled: !!editorCommand,
    });

    const handleEditorChange = (value: string) => {
        setEditorCommand(value);
    };

    const handleStopGeneration = () => {
        if (cancelTokenSourceRef.current) {
            cancelTokenSourceRef.current.cancel('Request canceled by the user.');
            queryClient.cancelQueries({ queryKey: ["scrape-data"] });
        }
    };

    useEffect(() => {
        if (data && data !== response) {
            setResponse(data);
        }
        if (error) toast.error(error.message)
    }, [data, error, setResponse, response]);

    useEffect(() => {
        setIsMounted(() => true);
    }, []);


    if (!isMounted) return null;


    return (
        <>
            <div className="flex flex-col gap-3 p-4 h-full ">
                <div className=" w-full bg-white overflow-y-scroll">
                    {
                        showPreviewEditor
                            ? <EditorPreview value={response} />
                            : <ReactQill onChange={handleEditorChange} value={editorCommand} theme='snow' className='h-[60vh] text-black' />
                    }
                </div>
                <div className="flex items-center gap-2">
                    {
                        response && <Button onClick={() => setShowPreviewEditor((prevState) => !prevState)} className='border-2 border-white/10 text-white/80 p-2 py-1 rounded-md '>Toggle Editor</Button>
                    }

                    <Button onClick={() => setEditorCommand(appConstants.INPUT_STRING)} className='bg-[#333333] border-2 border-transparent text-white/80 p-2 py-1 rounded-md '>
                        <span>Insert</span>
                    </Button>
                    {isLoading && (
                        <Button
                            disabled={!isLoading}
                            onClick={handleStopGeneration} className='bg-red-500 border-2 border-transparent text-white/80 p-2 py-1 rounded-md '>
                            <span>Stop</span>
                            <LoaderCircle size={20} className='animate-spin' />
                        </Button>
                    )

                    }
                </div>
            </div>
        </>
    )
}

export default Editor