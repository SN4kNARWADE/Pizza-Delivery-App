const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const Pizza = require('../models/pizzaModel');
const db = require("./db");

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute');

app.use('/api/pizzas/',pizzasRoute);

app.get("/", (req, res) => {
    res.send("Server is running on port " + port);
});

// app.get("/getpizzas", (req, res) => {
//     Pizza.find({}, (err, docs) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error fetching pizzas");
//         } else {
//             res.send(docs);
//         }
//     });
// });

app.listen(port, () => console.log('Server running on port ' + port));