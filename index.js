import cors from "cors";
import * as dotenv from "dotenv";
import express from 'express';
import { connectToDatabase } from "./config/db.config.js";
import { listRouter } from "./routes/list.route.js";

dotenv.config();

const app = express();
connectToDatabase();
app.use(cors({ origin: process.env.REACT_APP_URL }));

app.use(express.json());
app.use("/lists", listRouter);

app.listen(4001, () => {
    console.log('Listening on port 4001');
});