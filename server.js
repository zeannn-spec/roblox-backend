const express = require("express");
const app = express();

app.use(express.json());

let donations = [];
let donationId = 0;

app.post("/webhook", (req, res) => {
    donationId++;

    const donation = {
        id: donationId,
        donor: req.body.donator_name,
        amount: req.body.amount_raw,
        message: req.body.message || ""
    };

    donations.push(donation);

    console.log("Donasi baru:", donation);

    res.sendStatus(200);
});

app.get("/donation", (req, res) => {
    res.json(donations);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`RUNNING ${PORT}`);
});
