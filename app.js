const express = require("express");

const controller = require("./controller/controller");
const app = express();

app.use(express.json({ limit: "10kb" }));

app.get("/", controller.googleBot);

const port = 3000;
const server = app.listen(port, () => {
	console.log(`App running on prt ${port}....`);
});

process.on("unhandledRejection", (err) => {
	console.log(err.name, err.message);
	server.close(() => {
		process.exit(1);
	});
});
