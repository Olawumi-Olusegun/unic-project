import { StateCreator } from "zustand";

interface Message {
    text: string;
    isBot: boolean;
}

interface ScrapeState  {
    command: string;
    response: string;
    editorCommand: string;
    messages: Message[]
}

interface ScrapeActions  {
    scrapeNewData: (value: string) => void;
    setResponse: (value: string) => void;
    setCommand: (value: string) => void;
    setEditorCommand: (value: string) => void;
}

export interface ScrapeSliceProps extends ScrapeState, ScrapeActions {}

export const scrapeSlice: StateCreator<ScrapeSliceProps, [['zustand/immer', never]], [], ScrapeSliceProps> = (set, get) => ({
    command: "",
    response: "",
    editorCommand: "",
    messages: [],
    scrapeNewData: (value) => set(state => {
       
    }),
    setResponse: (value) => set(state => {
        state.response = value;
        if(value.trim()) {
            state.messages.push({ text: value, isBot: true })
        }
    }),
    setCommand: (value) => set(state => {
        state.command = value;
        if(value.trim()) {
            state.messages.push({ text: value, isBot: false })
        }
    }),
    setEditorCommand: (value) => set(state => {
        state.editorCommand = value;
        if(value.trim()) {
            state.messages.push({ text: value, isBot: false })
        }
    }),
})