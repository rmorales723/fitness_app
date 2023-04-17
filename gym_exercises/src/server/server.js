const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());

app.get("/data", (req, res) => {
    return res.json[{
        someSecretData: "Shhh!",
    }]
});

app.listen(3010, () => console.log('App running on port: 3010'));