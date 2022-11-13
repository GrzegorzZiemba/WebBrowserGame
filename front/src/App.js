import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Kingdom from "./pages/Kingdom";
import './App.js'
import LoginComponent from "./components/LoginComponent";
import MainPage from "./pages/MainPage";
import "./App.css"

function App() {
	return (
		<div className="viewport-height">
		<Router>
			<Routes>
				<Route path="/" exact element={<MainPage/>} />
				<Route path="/login" exact element={<LoginComponent />} />
				<Route path="/kingdom" exact element={<Kingdom />} />
			</Routes>
		</Router>
		</div>
	);
}

export default App;
