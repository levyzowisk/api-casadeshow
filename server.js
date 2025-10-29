const express = require('express');
const app = express();
const example = require('./src/routes/example');
const eventRoute = require('./src/routes/event/event.route');
const userRoute = require('./src/routes/user/user.route');
const authRoute = require('./src/routes/auth/auth.route');
const artistRoute = require('./src/routes/artist/artist.route');
const sectorRoute = require('./src/routes/sector/sector.route');
const handlerError = require('./src/middleware/error');
const port = 3000;
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs'); // 👈 Adiciona esta linha
const swaggerDocument = YAML.load('./openapi.yaml'); // 👈 Carrega o arquivo YAML

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // 👈 Adiciona esta linha

app.use('/api', example.router);
app.use('/api/events', eventRoute.router);
app.use('/api/users', userRoute.router);
app.use('/api/auths', authRoute.router);
app.use('/api/artists', artistRoute.router);
app.use('/api/sectors', sectorRoute.router);
app.use(handlerError);


if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log('App listening on port: ' + port);
  });
}

app.listen(port, () => {
    console.log("App listening on port: " + port);
});