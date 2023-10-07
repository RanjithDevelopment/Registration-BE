const express = require("express");
const cors = require('cors');
const db = require("./connect.js");
const dotenv =require("dotenv");
const register = require("./routers/registerRouter")
dotenv.config();
db();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/register',register);

app.listen(process.env.PORT);