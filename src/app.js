const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname + "/views/login.html")));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/login.html", (req,res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/register.html", (req,res) => {
    res.sendFile(__dirname + "/views/register.html");
});

const PORT = procces.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});