import { Routes, Route } from "react-router-dom";

import Main from './pages/Main'
import Settings from "./pages/Settings";
import Chat from "./pages/Chat";
import Contact from "./components/Contact";
import { WebsocketContextProvider } from "./context/websocketContext"
import './App.css';

function App() {
  	return (
		<WebsocketContextProvider>
			<div className="App">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="settings" element={<Settings />} />
					<Route path="chat" element={<Chat />} />
				</Routes>
			</div>
		</WebsocketContextProvider>
  	);
}

export default App;
