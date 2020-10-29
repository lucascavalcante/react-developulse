import React, { useState } from "react";
import { useCity } from "../../context/City";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import "./index.css";

function ContactForm() {
	const [values, setValues] = useState(null);
	const [message, setMessage] = useState("");
	const { cities, setState, isLoading } = useCity();
	const states = [
		"AB",
		"BC",
		"MB",
		"NB",
		"NL",
		"NT",
		"NU",
		"ON",
		"PE",
		"SK",
		"QC",
		"YT",
	];

	function handleChange(event) {
		const target = event.target;
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
		if (target.name === "state") {
			setState(target.value);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<>
			{isLoading && (
				<div id="dark-screen">
					<div>Wait...</div>
				</div>
			)}
			<div className="container">
				<div>{message}</div>
				<div className="formContact">
					<form onSubmit={handleSubmit}>
						<div>
							First Name <br />
							<Input
								name="firstName"
								type="text"
								onChange={handleChange}
								required="required"
								maxLength="40"
							/>
						</div>
						<div>
							Last Name <br />
							<Input
								name="lastName"
								type="text"
								onChange={handleChange}
								required="required"
								maxLength="40"
							/>
						</div>
						<div>
							Street Address <br />
							<Input
								name="address"
								type="text"
								onChange={handleChange}
								required="required"
								maxLength="128"
							/>
						</div>
						<div>
							Unit / Apt <br />
							<Input
								name="unit"
								type="text"
								onChange={handleChange}
								maxLength="128"
							/>
						</div>
						<div>
							State / Territory / Province <br />
							<Dropdown
								name="state"
								onChange={handleChange}
								defaultOption="Select a State"
								options={states}
								required="required"
							/>
						</div>
						<div>
							City <br />
							<Dropdown
								name="city"
								onChange={handleChange}
								defaultOption="Select a State Before"
								options={cities && cities}
								required="required"
							/>
						</div>
						<div>
							Email <br />
							<Input
								name="email"
								type="email"
								onChange={handleChange}
								required="required"
								maxLength="128"
							/>
						</div>
						<div>
							<Button type="submit" label="Entrar" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default ContactForm;
