import { StateCreator } from "zustand";

interface ScrapeState  {
    command: string;
    response: string;
    editorCommand: string;
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
    scrapeNewData: (value) => set(state => {
       
    }),
    setResponse: (value) => set(state => {
        state.response = value;
    }),
    setCommand: (value) => set(state => {
        state.command = value;
    }),
    setEditorCommand: (value) => set(state => {
        state.editorCommand = value;
    }),
})