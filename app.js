import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
import session from "express-session";
import AuthController from "./users/auth-controller.js";

const app = express();
app.use(
    session({
        secret:"any string",
        resave:false,
        saveUninitialized:true,
    })
);

app.use(
    cors({
        credentials:true,
        origin:"http://localhost:3000",
    })
);
app.use(express.json());
const port=process.env.PORT || 4000;

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);

app.listen(process.env.PORT || 4000);



