'use client'

import { createContext, useState , ReactNode} from 'react'; 


export const ChatContext = createContext({} as any);

export function ChatProvider({children}: {children:ReactNode}){
    const [messages, setMessages] = useState<any>([]);

    function setHistorico(object:any){
        setMessages((state:any) => [...state, object])
        consultJson(object.message)
    }
    
    async function consultJson(message:string){
        let fetch_data = await fetch('/database/words.json');
        let response_machine = {};
        if(fetch_data.status != 200){
            response_machine = {type:"MC", message:"Desculpe estou tendo alguns problemas tecnicos."};
            setMessages((state:any) => [...state, response_machine]);
            return;
        }

        let data = await fetch_data.json();
        const searchWords = message.trim().toLowerCase().split(' ');
        
        if (searchWords.length === 0) {
            response_machine = {type:"MC", message:"Desculpe precisa questionar algo para que eu possa lhe responder."};
            setMessages((state:any) => [...state, response_machine]);
            return;
        }

        const filteredData = data.filter((item:any) => {
            const itemKeywords = item.keywords.map((keyword:any) => keyword.toLowerCase());
            return searchWords.some((word) => itemKeywords.includes(word));
        });

        if(filteredData.length === 0){
            response_machine = {type:"MC", message:"Desculpe não entendi muito bem o que você está procurando, pode repetir?"};
            setMessages((state:any) => [...state, response_machine]);
            return;
        }
        
        response_machine = {type:"MC", message: filteredData[0].answer}
        setMessages((state:any) => [...state, response_machine]);
    }

    return (
        <ChatContext.Provider value={{ messages, setHistorico}}>
            {children}
        </ChatContext.Provider>
    )
}