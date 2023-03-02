const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { Art } = require("./models/art");
const cors = require('cors');
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/api/artslist', (req, res) => {
    Art.find({}, (err, arts) => {
        let artsMap = [];
        arts.forEach(art => {
            artsMap.push({...art._doc});
        });

        artsMap.sort((a, b) => {
            if(a.date < b.date) return 1;
            else return -1;
        })

        res.send(artsMap);
    })
})

app.post('/api/insert', (req, res) => {
    const art = new Art(req.body);
    
    art.save((err, artInfo) => {
        if(err) return res.json({success: false, err});
        return res.status(200).json({
            success: true,
            id: artInfo._id
        })
    });
})

app.post('/api/delete', (req, res) => {
    Art.findOneAndDelete({_id: req.body._id}, (err, art) => {
        if(!art) {
            return res.json({
                message: "No art found."
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "art deleted."
            })
        }
    });
})

app.post('/api/edit', (req, res) => {
    Art.findOneAndUpdate({_id: req.body._id}, {$set: req.body}, {new: true}, (err, art) => {
        if(!art) {
            return res.json({
                message: "No art found."
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "art updated.",
                id: art._id
            })
        }
    });
})

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
})