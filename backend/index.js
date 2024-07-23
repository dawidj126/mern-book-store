import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { MongooseError } from "mongoose";
import e from "express";
import { Book } from "./models/bookModel.js";
import bookRoutes from "./routes/bookRoutes.js"

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
	console.log(request);
	return response.status(234).send("Test");
});

app.use("/books", bookRoutes);

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log("App connected to database");
		app.listen(PORT, () => {
			console.log(`App is listening to port: ${PORT}`);
		});
	})
	.catch(error => {
		console.log(error);
	});
