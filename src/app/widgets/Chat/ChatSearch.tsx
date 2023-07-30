'use client'
import { useContext, useEffect, useState } from 'react'
import AvatarComponent from '../../radixComponents/Avatar/AvatarComponent';
import { ChatContext } from './context/ChatContext';
import { Send } from 'lucide-react'

interface ChatSearchProps{
    
}

export default function ChatSearch({}: ChatSearchProps){
    const { setHistorico } = useContext(ChatContext)
    const [search, setSearch] = useState("")
    const [error, setError] = useState(false)

    function sendMessage(){
        // limpeza dos dados
        if(search == ""){
            return false
        };
        setHistorico({type:"user", message: search})
        setSearch('');
    }
    
    const handleKeyPress = (event:any) => {
        if (event.key === 'Enter') {
          // Chame a função que deseja executar quando o Enter for pressionado.
          sendMessage();
        }
    };


    return (
        <div className="w-max h-20 divide-y mt-auto flex justify-evenly">
           <AvatarComponent username='FG' url_image='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'/>
           <input 
            onKeyDown={handleKeyPress}
            value={search} 
            onChange={(ev) => setSearch(ev.target.value)} 
            className='w-[15rem] rounded-md h-10 ml-5 p-2 text-sm shadow-md focus:border-slate-300' />
           <button type='button' onClick={sendMessage} className='w-10 h-10 bg-emerald-300 rounded-full flex items-center justify-center ml-4 hover:bg-emerald-600'>
            <Send size={20} color='#FFFFFF'/>
           </button>
        </div>
    )
}