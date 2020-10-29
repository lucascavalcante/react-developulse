import axios from "axios";

const externalApi = axios.create({
	baseURL: "https://imc-hiring-test.azurewebsites.net/",
});

const internalApi = axios.create({
	baseURL: "http://localhost:3001",
});

export { externalApi, internalApi };
