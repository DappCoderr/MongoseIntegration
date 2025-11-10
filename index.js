import express from "express";
import dotenv from "dotenv"
import {connectDB} from "./config/connectDB.js"
import apiRoute from "./router/api.router.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.json());
app.use('/crm/api', apiRoute);

// run the server
app.listen(PORT, () => {
  console.log(`Server started and listening on PORT - ${PORT}`);
  connectDB();
});
