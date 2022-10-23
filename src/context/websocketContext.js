import {useState, useEffect, useRef, createContext} from "react"
import { w3cwebsocket as WS } from "websocket";

import useLocalStorage from './../hooks/useLocalStorage'

const WebsocketContext = createContext()

function WebsocketContextProvider(props) {
    const [messages, setMessages] = useState([])

    // receiver is who you chat with
    const [receiver, setReceiver] = useState("")

    const [user, setUser] = useLocalStorage("user", "")

    const websocket = useRef(null);

    useEffect(()=>{
        // clear messages
        setMessages([])

        const auth = {
            user,
            publicKey: "0"
        }

        // establish connection
        const ws = new WS('wss://messages.tiantianx2.repl.co', [auth.user, auth.publicKey]);
        ws.onmessage = (message) => {
            const {text, sender, receiver} = JSON.parse(message.data)
            setMessages(prev => [...prev, {data: text, received: true}])
        }
        websocket.current = ws

        return () => {
            ws.close()
        }
    }, [receiver])
    
    function sendMessage(text, sender, receiver) {
        websocket.current.send(JSON.stringify({
            text, 
            sender, 
            receiver
        }))
        setMessages(prev => [...prev, {data: text}])
    }
    
    return (
        <WebsocketContext.Provider value={{messages, sendMessage, setReceiver}}>
            {props.children}
        </WebsocketContext.Provider>
    )
}

export {WebsocketContextProvider, WebsocketContext}