
import { ReactNode } from "react"
import { ChatProvider } from "./context/ChatContext"

interface ChatRootProps{
    children: ReactNode
}

export default function ChatRoot({children}: ChatRootProps){
    return(
        <ChatProvider>
            <div className="fixed right-4 bottom-5 w-96 h-96 bg-slate-50 rounded-md shadow-sm flex flex-col p-3">
                {children}
            </div>
        </ChatProvider>
    )
}