const express = require("express");
const app = express();
import pj from "../package.json";
import routes from "./routes/routes";
const morgan = require("morgan");
const cors = require("cors");
app.use(morgan("tiny"));
app.use(cors());
app.set("pj", pj);

app.use(express.json()) 

app.get("/", (req, res) => {
  res.json({
    name: app.get("pj").name,
    descripcion: app.get("pj").description,
    version: app.get("pj").version,
    autor: app.get("pj").author,
  });
});

routes(app);

export default app;
