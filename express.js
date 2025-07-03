const express = require('express');
const app = express();
app.get('/',(req,res) =>{
    res.sendFile(__dirname +'/index.html');
})
app.get('/contact',(req,res) =>{
    res.sendFile(__dirname +'/contact.html');
})
app.listen(3000,() =>{
    console.log('Server is running at http:///localhost:3000');
})

