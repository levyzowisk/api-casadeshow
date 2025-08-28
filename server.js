const express = require('express');
const app = express();
const example = require('./src/routes/example')
const eventRoute = require('./src/routes/event/event.route');
const handlerError = require('./src/middleware/error');
const port = 3000;

app.use(express.json());

app.use('/api', example.router);
app.use('/api/event', eventRoute.router);
app.use(handlerError);

app.listen(port, () => {
    console.log("App listening on port: " + port);
    
})