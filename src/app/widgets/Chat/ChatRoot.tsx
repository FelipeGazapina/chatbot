'use client'

import { ReactNode, useEffect, useState } from "react"
import {  ChatProvider } from "./context/ChatContext"
import { MessageSquare, X } from 'lucide-react'

interface ChatRootProps{
    children: ReactNode
}

export default function ChatRoot({children}: ChatRootProps){
    const [closed, setClosed] = useState<boolean>(false);
    
    return(
        <ChatProvider>
            { closed ? 
                <div title="chatbot" className="rounded-full w-10 h-10 bg-slate-100 dark:bg-slate-600 fixed right-4 bottom-5 flex justify-center items-center text-slate-600 dark:text-slate-100   hover:cursor-pointer" onClick={() => setClosed(false)}>
                    <MessageSquare  />
                </div>:
                <div className="fixed right-4 bottom-5 w-96 h-96 bg-slate-50 rounded-md shadow-sm flex flex-col p-3 dark:bg-slate-50 dark:bg-opacity-10 dark:border border-slate-500">
                    <div className="absolute top-5 right-5 hover:cursor-pointer dark:text-slate-100" onClick={() => setClosed(true)}> <X size={16}/></div>
                    {children}
                </div>
            }
        </ChatProvider>
    )
}