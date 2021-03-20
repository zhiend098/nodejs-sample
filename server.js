const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/User_Routes');

const app = express();


const PORT = process.env.PORT || 3000


app.use(express.json()) // parses application/json
app.use(express.urlencoded({ extended: true }))


const url = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.bs0jo.mongodb.net/mia_database?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


app.use(userRouter);

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

