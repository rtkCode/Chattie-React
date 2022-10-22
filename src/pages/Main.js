import { useState, useEffect } from 'react'

import Navigation from './../components/Navigation'
import ChatItem from './../components/ChatItem'
import Contact from './../components/Contact'
import useLocalStorage from './../hooks/useLocalStorage'

import './../styles/Main.css'

function Main() {
    const [contacts, setContacts] = useLocalStorage("contacts", [])
    const [showNewContact, setShowNewContact] = useState(false)

    const contactList = contacts.map((contact) => {
        return <ChatItem key={contact.username} receiver={contact.username} />
    })

    return (
        <>
            <div className="routers-height">
                <div className="main-nav">
                    <h1>Chats</h1>
                    <div className="main-add" onClick={() => setShowNewContact(!showNewContact)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 512"><path fill="#ffffff" d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                        New
                    </div>
                </div>
                {contactList}
                {/* <ChatItem receiver={"User2"} /> */}
            </div>
            <Navigation />
            {showNewContact ? <Contact setShowNewContact={setShowNewContact} /> : <div></div>}
        </>
    );
  }
  
  export default Main;