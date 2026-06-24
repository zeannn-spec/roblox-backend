const express = require("express");

const app = express();

app.use(express.json());

let donations =[];

app.get("/", (req,res) => {
    res.send("Backend Roblox Aktif!");
});

app.get("/api", (req, res) => {
    res.json({
        status: "Online",
        game: "Vade Club"
    });
});

// Simulasi donasi masuk
app.get("/donate/:username/:amount", (req, res) => {

    donations.push({
        username: req.params.username,
        amount: Number(req.params.amount)
    });

    res.json({
        success: true,
        data: donations
    });
});

// Cek donasi masuk
app.get("/check/:username", (req, res) => {

    const username = req.params.username;

    const result = donations.find(
        d => d.username === username
    );

    if(result){
        res.json(result);
    }else{
        res.json({
            message: "Tidak ada donasi"
        });
    }
});


app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
});
