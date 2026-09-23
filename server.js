const express = require('express');
const app = express();
const PORT = 5555;
const flowers = require("./data/flowers")

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
})


app.get('/peacelily', (req, res) => {
    res.sendFile( __dirname + '/public/peacelily.html')
})

app.get('/rose', (req, res) => {
    res.sendFile( __dirname + '/public/rose.html')
})

app.get('/orchid', (req, res) => {
    res.sendFile( __dirname + '/public/orchid.html')
})

app.get('/sunflower', (req, res) => {
    res.sendFile( __dirname + '/public/sunflower.html')
})

app.get('/tulip', (req, res) => {
    res.sendFile( __dirname + '/public/tulip.html')
})

app.get('/hibiscus', (req, res) => {
    res.sendFile( __dirname + '/public/hibiscus.html')
})

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
})


app.listen(PORT, () =>{
    console.log('Server running on http://localhost:5555')
})


