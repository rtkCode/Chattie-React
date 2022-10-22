import Navigation from './../components/Navigation'
import useLocalStorage from './../hooks/useLocalStorage'

import './../styles/Settings.css'

function Settings() {
	const [user, setUser] = useLocalStorage("user", "")

    return (
		<>
			<div className="routers-height">
				<div className="profile">
					<img className="big-avatar" alt="avatar" src={`https://avatars.dicebear.com/api/adventurer-neutral/${user}.svg`} />
					{/* <div className="username">{user}</div> */}
					<input className="username" value={user} onChange={(e) => setUser(e.target.value)}></input>
				</div>
			</div>
			<Navigation />
		</>
    );
  }
  
  export default Settings;