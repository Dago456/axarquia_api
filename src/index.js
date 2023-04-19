import app from "./app";
import './database'
require("dotenv").config();

const port = process.env.PORT;
app.listen(port, console.log("Conectado al puerto ", port));
