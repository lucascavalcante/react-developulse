import React from "react";
import CityProvider from "./context/City";
import ContactForm from "./pages/ContactForm";
import "./App.css";

function App() {
	return (
		<div className="App">
			<CityProvider>
				<ContactForm />
			</CityProvider>
		</div>
	);
}

export default App;
