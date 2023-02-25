const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Express with HTML</h1>');
})

app.listen(8080); 
console.log(`Server running on port 8080`);