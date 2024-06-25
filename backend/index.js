import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { MongooseError } from "mongoose";
import e from "express";

const app = express();

app.get("/", (request, response) => {
	console.log(request);
	return response.status(234).send("Test");
});

app.listen(PORT, () => {
	console.log(`App is listening to port: ${PORT}`);
});

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log('App connected to database');
	})
	.catch((error) => {
		console.log(error);
	});