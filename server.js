const express = require("express");
const app = express();

app.use(express.json());

let lastDonation = {};

app.get("/", (req, res) => {
    res.send("Backend Roblox Aktif!");
});

app.post("/webhook", (req, res) => {
    console.log("Saweria:", req.body);

    lastDonation = {
        nama: req.body.donator || "Unknown",
        pesan: req.body.message || "",
        nominal: req.body.amount || 0
    };

    res.sendStatus(200);
});

app.get("/donation", (req, res) => {
    res.json(lastDonation);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`RUNNING ${PORT}`);
});
