const express = require('express');
const app = express();
const example = require('./src/routes/example');
const eventRoute = require('./src/routes/event/event.route');
const userRoute = require('./src/routes/user/user.route');
const authRoute = require('./src/routes/auth/auth.route');
const handlerError = require('./src/middleware/error');
const port = 3000;
require('dotenv').config();


app.use(express.json());

app.use('/api', example.router);
app.use('/api/event', eventRoute.router);
app.use('/api/user', userRoute.router);
app.use('/api/auth', authRoute.router);
app.use(handlerError);

app.listen(port, () => {
    console.log("App listening on port: " + port);
    
})