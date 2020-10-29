import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import FormData from "form-data";
import { check, validationResult } from "express-validator";

const router = express.Router();
const jsonParser = bodyParser.json();

router.post("/contact-form", jsonParser, async (req, res) => {
	let httpCode;
	const data = {};

	await check("firstName", "First Name invalid")
		.notEmpty()
		.custom((value) => value && value.length <= 40)
		.run(req);

	await check("lastName", "Last Name invalid")
		.notEmpty()
		.custom((value) => value && value.length <= 40)
		.run(req);

	await check("address", "Street Address invalid")
		.notEmpty()
		.custom((value) => value && value.length <= 128)
		.run(req);

	await check("unit", "Unit/Apt invalid")
		.custom((value) => value && value.length <= 128)
		.run(req);

	await check("email", "Email invalid")
		.notEmpty()
		.isEmail()
		.custom((value) => value && value.length <= 128)
		.run(req);

	await check("state", "Province invalid")
		.notEmpty()
		.custom((value) => value && value.length <= 32)
		.run(req);

	await check("city", "City invalid")
		.notEmpty()
		.custom((value) => value && value.length <= 32)
		.run(req);

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		httpCode = 400;
		data.errors = errors.array({ onlyFirstError: true });
	} else {
		const { firstName, lastName, address, unit, state, city, email } = req.body;

		let formData = new FormData();
		formData.append("Name", `${firstName} ${lastName}`);
		formData.append("Address", address);
		formData.append("Address2", unit);
		formData.append("City", city);
		formData.append("Province", state);
		formData.append("Email", email);

		const contactApi = await axios.post(
			"https://imc-hiring-test.azurewebsites.net/Contact/Save",
			formData,
			{ headers: formData.getHeaders() }
		);

		try {
            httpCode = contactApi.data.StatusCode;
            data.message = contactApi.data.Status;
        } catch (error) {
            httpCode = error.response.data.StatusCode;
            data.message = error.response.data.Status;
        }
	}

	res.status(httpCode).send(data);
});

module.exports = (app) => {
	app.use("/", router);
};
