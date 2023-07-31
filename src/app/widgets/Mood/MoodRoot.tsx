import { ReactNode } from "react"
import { MoodProvider } from "./context/MoodContext"


interface MoodRootProps{
    children: ReactNode
}
export default function MoodRoot({children}: MoodRootProps){
    return(
        <MoodProvider>
            <div className="flex">
                {children}
            </div>
        </MoodProvider>
    )
}
