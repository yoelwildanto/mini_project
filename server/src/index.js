const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
})

// const db = require("../src/models")
// db.sequelize.sync({alter:true})

const PORT = process.env.PORT || 8000;

const app = new express();

app.use(bodyParser.json());
app.use(
    cors({
        origin:[
            process.env.WHITELISTED_DOMAIN &&
            process.env.WHITELISTED_DOMAIN.split(" "),
        ],
    })
);

const Router = require("./routes/Router");
app.use("/ticketzone", Router)

app.listen(PORT, (req, res) =>{
    console.log(`server listening on port ${PORT}`);
})