import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginAccount, logoutAccount } from "./store/actions/userActions";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes,
} from "react-router-dom";
import Kingdom from "./components/Kingdom";
import LoginComponent from "./components/LoginComponent";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" exact element={<LoginComponent />} />
				<Route path="/kingdom" exact element={<Kingdom />} />
			</Routes>
		</Router>
	);
}

export default App;
