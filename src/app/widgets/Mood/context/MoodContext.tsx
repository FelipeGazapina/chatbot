'use client'

import { createContext, useState , ReactNode} from 'react'; 


export const MoodContext = createContext({} as any);

export function MoodProvider({children}: {children:ReactNode}){
    const [moodMessages, setMoodMessages] = useState<any>([])

    function addMoodMessage(object:any){
        setMoodMessages((state:any) => [...state, object])
    }

    return (
        <MoodContext.Provider value={{moodMessages, addMoodMessage}}>
            {children}
        </MoodContext.Provider>
    )
}