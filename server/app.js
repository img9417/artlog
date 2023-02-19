const express = require('express');
const app = express();
const port = 5174;
const mongoose = require('mongoose');
const { Art } = require("./models/art");
const cors = require('cors');

app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/artlog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/artslist', (req, res) => {
    Art.find({}, (err, arts) => {
        let artsMap = [];
        arts.forEach(art => {
            artsMap.push({...art._doc});
        });

        artsMap.sort((a, b) => {
            if(a.name < b.name) return 1;
            else return -1;
        })

        res.send(artsMap);
    })
})

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})