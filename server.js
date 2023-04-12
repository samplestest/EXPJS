const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = 8001;
const Routes = require("./Routes");

app.use(express.json());
app.use(express.urlencoded());

app.use(Routes)

app.listen(PORT, () => { console.log("Server Is Running:", PORT) })

mongoose.connect('mongodb+srv://tutorial:tutorial123@cluster0.pb19n.mongodb.net/e-commerce?retryWrites=true&w=majority', () => {
    console.log("MongoDB connect!")
})

