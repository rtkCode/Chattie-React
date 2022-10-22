import { useState, useContext, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";

import { WebsocketContext } from "../context/websocketContext"
import useLocalStorage from './../hooks/useLocalStorage'

import './../styles/Chat.css'

function Chat(props) {
    const [message, setMessage] = useState("")

    const {messages, sendMessage, setReceiver} = useContext(WebsocketContext)

    const location = useLocation()

    const receiver = location.state.receiver

    useEffect(() => {
        setReceiver(receiver)
    }, [])

    const [user, setUser] = useLocalStorage("user", "")

    const navigate = useNavigate();

    const messageBubbles = messages.map(msg => 
        <div className={`message-bubble ${msg.received ? "message-bubble-left" : "message-bubble-right"}`} key={Math.random()}>
            {msg.data.toString()}
        </div>
    )

    function handleMessageChange(e) {
        setMessage(e.target.value)
    }

    return (
        <div className="chat">
            <div className="chat-header">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512" onClick={() => navigate(-1)}><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                <strong className="chat-name">{receiver}</strong>
                <span id="placeholder"></span>
            </div>
            <div className="chat-content">
                {messageBubbles}
            </div>
            <div className="chat-input">
                <textarea onChange={handleMessageChange} value={message} />
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="chat-send" 
                    height="25" width="25" viewBox="0 0 384 512" 
                    onClick={() => {sendMessage(message, user, receiver); setMessage("")}}><path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
            </div>
        </div>
    );
  }
  
  export default Chat;