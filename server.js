const express = require('express');
const app = express();
const example = require('./src/routes/example')

const port = 3000;

app.use('/api', example.router);

app.listen(port, () => {
    console.log("App listening on port: " + port);
    
})