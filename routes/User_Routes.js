const express = require('express');
const { findById } = require('../models/User_Model');
const userModel = require('../models/User_Model');
const app = express();

app.get('/users', async (req, res) => {
    const users = await userModel.find({});
    try {
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/', async (req, res) => {
    res.send('Hello World!')
});

app.patch('/updateuser', async (req, res) => {
    const user = await userModel.findOneAndUpdate({ username: req.body.username}, req.body);
    try {
        res.send(users);
    }catch (err) {
        res.status(500).send(err);
    }
});

app.post('/finduser', async (req, res) => {
    console.log(req.body)
    try {
        const user = await userModel.findOne({ username: req.body.username, password: req.body.password });
        if (!user) {
            res.status(404)
            res.json({
                message: `Cannot find an User with the username: ${req.body.username}`
            })
            res.end()
            return
        } else {
            res.status(200).send(user)
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
});

app.post('/users', async (req, res) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});



module.exports = app