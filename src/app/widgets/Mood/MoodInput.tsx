'use client'
import {useContext, useState} from 'react'
import { MoodContext } from './context/MoodContext';

export default function MoodInput(){
    const { addMoodMessage } = useContext(MoodContext);
    const [ textarea, setTextarea ] = useState<any>({})

    return(
        <div className="w-[20em] h-[12em] rounded-md bg-white p-4 flex-column">
            <h2 className="text-slate-800 ">O que você está pensando?</h2>
            <textarea value={textarea.mood} onChange={(ev) => setTextarea({mood: ev.target.value})} className="w-[20em] h-20 shadow-md mt-5 text-left p-2 text-sm" />
            <button onClick={() => addMoodMessage(textarea)} className="py-1 px-4 bg-emerald-400 rounded-md text-white mt-2"> send </button>
        </div>
    )
}