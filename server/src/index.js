const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path = require("path");
const { userRoute, eventRoute, transactionRoute } = require("./routes");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

// const db = require("../src/models");
// db.sequelize.sync({ force: true });

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

const eventRouter = require("./routes/eventRoute");
app.use("/event", eventRouter)

const ticketRouter = require('./routes/ticketRouter');
app.use("/ticket", ticketRouter);

const filterRouter = require('./routes/filterRouter');
app.use("/filter", filterRouter);


app.use("/uploads", express.static(path.join(__dirname, "./public/image")));


app.listen(PORT, (req, res) =>{
    console.log(`server listening on port ${PORT}`);
})

const corsOptions = {
  origin: "http://localhost:3000", // Sesuaikan port jika front-end Anda berjalan di port yang berbeda
  optionsSuccessStatus: 200, // beberapa browser legacy tidak mendukung 204
};

// Gunakan CORS dengan opsi tersebut
app.use(cors(corsOptions));

app.use("/api/auth", userRoute);
app.use("/api", eventRoute);
app.use("/api", transactionRoute);

app.listen(PORT, (req, res) => {
  console.log(`server listening on port ${PORT}`);
});
