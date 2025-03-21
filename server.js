import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { router } from "./src/routes.js";

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(router);

app.listen(port, () => {
  console.log(`Servidor escutando em: http://localhost:${port}`);
});
