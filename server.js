const express = require('express');
const app = express();
const example = require('./src/routes/example');
const eventRoute = require('./src/routes/event/event.route');
const userRoute = require('./src/routes/user/user.route');
const authRoute = require('./src/routes/auth/auth.route');
const artistRoute = require('./src/routes/artist/artist.route');
const sectorRoute = require('./src/routes/sector/sector.route');
const saleRoute = require('./src/routes/sale/sale.route')
const handlerError = require('./src/middleware/error');
const { createBullBoard } = require('@bull-board/api');
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');
const { ExpressAdapter } = require('@bull-board/express');
const basicAuth = require('express-basic-auth');
const { queues } = require('./src/lib/Queue');
const port = 3000;
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml'); 

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

app.use('/api', example.router);
app.use('/api/events', eventRoute.router);
app.use('/api/users', userRoute.router);
app.use('/api/auths', authRoute.router);
app.use('/api/artists', artistRoute.router);
app.use('/api/sectors', sectorRoute.router);
app.use('/api/sales', saleRoute.router);
app.use(handlerError);

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [
    new BullMQAdapter(queues.ticketSaleQueue),
    new BullMQAdapter(queues.emailNotificationQueue)
  ],
  serverAdapter: serverAdapter,
});


app.use('/admin/queues', basicAuth({
    users: { 'admin': 'senha123' },
    challenge: true,
}), serverAdapter.getRouter());

app.listen(port, () => {
    console.log("App listening on port: " + port);
});

require('./src/jobs/ticketSaleWorker');
require('./src/jobs/emailWorker');