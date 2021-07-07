const express = require("express");
const path = require("path");
const app = express();

app.use('/static', express.static(__dirname + '/public'));


app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log("Servidor corriendo en el puerto "+ PORT);
})