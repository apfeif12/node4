require("dotenv").config();
const express = require("express");
const server = express();

server.use(express.json());

if (process.env.NODE_ENV === "development") {
    const cors = require("cors");
    server.use(cors());
}

server.use("*", (req, res) => {
    res.send("<h1>Success</h1>");
});

const port = process.env.PORT || 9000;

server.listen(port, () => {
    console.log(`Server is alive on port ${port}`);
});
