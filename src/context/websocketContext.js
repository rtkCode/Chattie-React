import {useState, useEffect, useRef, createContext} from "react"
import { w3cwebsocket as WS } from "websocket";

const WebsocketContext = createContext()

function WebsocketContextProvider(props) {
    const [messages, setMessages] = useState([])

    // receiver is who you chat with
    const [receiver, setReceiver] = useState("")

    const websocket = useRef(null);

    useEffect(()=>{
        // clear messages
        setMessages([])

        // establish connection
        const ws = new WS('wss://messages.tiantianx2.repl.co');
        ws.onmessage = (message) => {
            // console.log(message)
            const [msgText, msgSender, msgReceiver] = JSON.parse(message.data)
            if(msgSender === receiver || msgSender === "") 
                setMessages(prev => [...prev, {data: msgText, received: true}])
        }
        websocket.current = ws

        return () => {
            ws.close()
        }
    }, [receiver])
    
    function sendMessage(text, sender, receiver) {
        websocket.current.send(JSON.stringify([text, sender, receiver]))
        setMessages(prev => [...prev, {data: text}])
    }
    
    return (
        <WebsocketContext.Provider value={{messages, sendMessage, setReceiver}}>
            {props.children}
        </WebsocketContext.Provider>
    )
}

export {WebsocketContextProvider, WebsocketContext}