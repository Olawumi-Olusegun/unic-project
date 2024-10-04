"use client"

import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

interface RenderContentProps {
    content: string;
}

// Create a custom renderer for marked
const renderer = new marked.Renderer();

renderer.code = ({ text, lang = 'plaintext' }: { text: string; lang?: string }) => {
    const validLang = lang && hljs.getLanguage(lang) ? lang : 'plaintext'; // Check if the language is valid
    const highlighted = hljs.highlight(text, { language: validLang }).value; // Use highlight.js for syntax highlighting
    return `<pre><code class="hljs ${validLang}">${highlighted}</code></pre>`; // Return highlighted code block
};

marked.setOptions({ renderer: renderer });

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
        if (!isMounted) {
            setIsMounted(true)
        }
    }, [])

    if (!isMounted) return null;


    return <div className="prose max-w-none" dangerouslySetInnerHTML={htmlContent} />;
};

export default RenderContent;
