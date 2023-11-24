import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import Kingdom from "./pages/Kingdom";
import LoginComponent from "./components/LoginComponent";
import MainPage from "./pages/MainPage";

import "./App.js";
import "./App.css";

function App() {
  return (
    <div className="viewport-height">
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/login" exact element={<LoginComponent />} />
          <Route element={<ProtectedRoutesComponent />}>
            <Route path="/kingdom" exact element={<Kingdom />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
