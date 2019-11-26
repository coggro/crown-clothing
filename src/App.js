import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header.component";
import Homepage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/ShopPage/ShopPage.component";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage.component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
