'use client'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react';

export default function Button(){
    const [theme, setTheme] = useState('light');
    
    function clickEvent(ev:any){
        let html_classes = document.querySelector('html')?.classList
        if(html_classes!.value == 'light'){
            setTheme("dark")
            html_classes!.replace('light', 'dark');
        }else{
            setTheme("light")
            html_classes!.replace('dark', 'light');
        }
    }

    return(
        <button onClick={clickEvent} className="w-5 h-5 rounded-full absolute top-5 right-5">
            {theme == 'light'? <Moon className='text-slate-800' />: <Sun className='text-slate-100' />}
        </button>
    )
}