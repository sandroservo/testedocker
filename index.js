const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('hello World com nodeaaa troquei');
})

app.listen(3333, () => {
    console.log('is running service 🚀')
});