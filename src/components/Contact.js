import { useState, useEffect, useRef } from "react"

import useLocalStorage from '../hooks/useLocalStorage'

import "./../styles/Contact.css"

function Contact(props) {
    const [newContact, setNewContect] = useState("")
	const [contacts, setContacts] = useLocalStorage("contacts", [])

	const inputRef = useRef(null);
	
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	function addContact(){
		props.setShowNewContact(false)
		setContacts([...contacts, {username: newContact}])
		window.location.reload()
	}

    return (
		<div className="model">
			<div className="contact">
				<div className="contact-title">
					<div className="placeholder">Close</div>
					<strong>New Contact</strong>
					<div className="Close" onClick={() => props.setShowNewContact(false)}>Close</div>
				</div>
				<div className="contact-content">
					<input ref={inputRef} value={newContact} onChange={(e) => setNewContect(e.target.value)} />
					<div className="contact-add" onClick={addContact}>Add</div>
				</div>
			</div>
		</div>
    );
  }
  
  export default Contact;