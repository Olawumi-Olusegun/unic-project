"use client"

import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface RenderContentProps {
    content: string;
}

// Create a custom renderer for marked
const renderer = new marked.Renderer();

renderer.code = ({ text, lang = 'plaintext' }: { text: string; lang?: string }) => {
    const validLang = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
    const highlighted = hljs.highlight(text, { language: validLang }).value;
    return `<pre><code class="hljs ${validLang}">${highlighted}</code></pre>`;
};


const RenderContent: React.FC<RenderContentProps> = ({ content }) => {


    const [htmlContent, setHtmlContent] = useState<{ __html: string }>({ __html: '' });
    const [isMounted, setIsMounted] = useState(false)

    React.useEffect(() => {
        const generateHtml = async () => {
            const html = await marked(content);
            setHtmlContent({ __html: html });
        };

        generateHtml();
    }, [content]);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null;


    return <div className="prose py-2 rounded-md w-[350px] lg:w-full " dangerouslySetInnerHTML={htmlContent} />;


};

export default RenderContent;

export const CodeBlocks = ({ content }: { content: { text: string; isBot: boolean } }) => {



    const extractCodeFromString = (messages: string): string[] => {
        let messageArray: string[] = [];

        if (messages.includes('*')) {
            messageArray = messages.split('* ').filter(Boolean).map(message => {
                return message.replace(/\*/g, '').trim();
            });
            return messageArray;
        }

        return [];
    }


    const isCodeBlock = (textContext: string) => {
        if (textContext.includes("=") ||
            textContext.includes(";") ||
            textContext.includes("[") ||
            textContext.includes("]") ||
            textContext.includes("{") ||
            textContext.includes("}") ||
            textContext.includes("#") ||
            textContext.includes("//")
        ) {
            return true;
        } else {
            return false;
        }
    }

    const messageBlocks = extractCodeFromString(content.text);


    return (
        <>
            <div className="flex flex-col rounded-md">
                {!messageBlocks && <div className="bg-[#202020] p-5 rounded-md">
                    {content.text}
                </div>
                }
                {
                    messageBlocks?.map((message, index) => {
                        if (isCodeBlock(message)) {
                            return (
                                <div className="rounded-md flex flex-col text-wrap w-full max-w-[350px] sm:max-w-[500px] lg:min-w-full" key={`message-${index}`}>
                                    <SyntaxHighlighter style={coldarkDark} language="javascript">
                                        {message}
                                    </SyntaxHighlighter>
                                </div>
                            );
                        } else {
                            return (
                                <div className="bg-[#202020] p-5 py-3 text-wrap" key={`message-${index}`}>
                                    {message}
                                </div>
                            );
                        }
                    })
                }
            </div>
        </>
    )
}
