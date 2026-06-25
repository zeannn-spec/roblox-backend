const express = require("express");
const app = express();

app.use(express.json());

let lastDonation = {};
let donationId = 0;

app.post("/webhook", (req, res) => {
    donationId++;

    lastDonation = {
        id: donationId,
        donor: req.body.donator_name,
        amount: req.body.amount_raw,
        message: req.body.message || ""
    };

    console.log("Donasi baru:", lastDonation);

    res.sendStatus(200);
});

app.get("/donation", (req, res) => {
    res.json(lastDonation);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`RUNNING ${PORT}`);
});
