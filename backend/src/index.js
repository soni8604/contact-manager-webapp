const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')
dotenv.config();
const port = process.env.PORT
const app = express()
const user = require('./routes/user');
const contacts = require('./routes/Contacts')
app.use(cors())

mongoose.connect('mongodb+srv://dhananjaytab88:ug4BTwUP4R3Cstby@cluster0.lgjyo.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds timeout for selecting server
    socketTimeoutMS: 30000 
})
.then(() => {
    console.log('Database connected successfully');
})
.catch((err) => {
    console.error('Database connection error:', err);
});
app.use('/', user)
app.use('/contact', contacts)


app.get('*', (req, res) => {
    res.status(404).send("404 Page Not Found")
    console.log("Hello");

})

app.listen(process.env.PORT || '8080', () => { console.log(`server started on port : http://127.0.0.1:8080/`) })