const express = require('express');
const app = express();
const example = require('./src/routes/example')
const eventRoute = require('./src/routes/event/event.route')
const port = 3000;

app.use('/api', example.router);
app.use('/api/event', eventRoute.router);

app.listen(port, () => {
    console.log("App listening on port: " + port);
    
})