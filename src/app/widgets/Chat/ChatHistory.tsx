'use client'

import {useContext, useEffect, useState} from 'react'
import { ChatContext } from './context/ChatContext';
import AvatarComponent from '@/app/radixComponents/Avatar/AvatarComponent';


export default function ChatHistory(){
    const { messages } = useContext(ChatContext);
    const [ historico, setHistorico ] = useState([]);

    function gotoBottom(id:string){
        var element = document.getElementById(id);
        element!.scrollTop = element!.scrollHeight;
     }

    useEffect(() => {
        setHistorico(messages)
        gotoBottom('chat');
    }, [messages]);
    
    return(
        <div id='chat' className='overflow-y-auto h-60'>
            {historico.map((message:any, idx:number) => {
                if(message.type == 'user'){
                    return <div className='m-3 flex justify-between text-left w-[80%] items-center'>
                        <AvatarComponent 
                            url_image='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80' 
                            username={message.type} />
                        <p className='w-[100%] p-2 bg-slate-200 ml-2 rounded text-xs dark:text-slate-100 dark:bg-slate-500'>
                            {message.message}
                        </p>
                    </div>
                }

                return <div className='m-3 flex justify-between text-left w-[80%] items-center'>
                    <p className='w-[100%] p-2 bg-slate-200 mr-2 rounded text-xs dark:text-slate-100 dark:bg-slate-500'>
                        {message.message}
                    </p>
                    <AvatarComponent username={message.type} />
                </div>
            })}
        </div>
    )
}