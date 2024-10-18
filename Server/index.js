const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./router/todoRoute");
require("dotenv").config();

const app = express();
PORT = 3050;

app.use(cors());
app.use(express.json());
app.use("/api/v1", todoRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database is connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT);
})