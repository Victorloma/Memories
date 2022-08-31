import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import corse from "corse";


const app = express();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://DBuser:DBuser123@memories.i2zhak3.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.POR || 5000;

// mongoose.connect(CONNECTION_URL, { useNewParser:})