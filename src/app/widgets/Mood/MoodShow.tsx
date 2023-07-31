'use client'
import {useContext} from 'react'
import { MoodContext } from './context/MoodContext';

export default function MoodShow(){
    const {moodMessages} = useContext(MoodContext);

    return(
        <div className='w-[45em] h-48 overflow-y-auto ml-5 bg-white rounded'>
            {moodMessages.map((mood:any, idx:number) => 
                    <div key={idx}>
                        {mood.mood}
                    </div>
                )}
        </div>
    )
}