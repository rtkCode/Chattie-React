import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { WebsocketContext } from "../context/websocketContext"
import './../styles/ChatItem.css'

function ChatItem(props) {
    const navigate = useNavigate();
    const receiver = props.receiver
    const {setReceiver} = useContext(WebsocketContext)

    return (
        <div className="chat-item" onClick={() => {navigate('/chat', { state: {receiver} }); setReceiver(receiver)}}>
            <div className="chat-avatar">
                <img src={`https://avatars.dicebear.com/api/adventurer-neutral/${receiver}.svg`} />
            </div>
            <div className="chat-info">
                <div className="chat-preview">
                    <strong>{receiver}</strong>
                    <div>Placeholder</div>
                </div>
                <div className="chat-placeholder"></div>
            </div>
        </div>
    );
  }
  
  export default ChatItem;