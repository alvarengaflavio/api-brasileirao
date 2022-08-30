const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./src/database/database');
const teamRouter = require('./src/routes/team.route');
const tournamentRouter = require('./src/routes/tournament.route');
// const swaggerRouter = require('./src/routes/swagger.route');

const app = express();
const port = {};

process.env.NODE_ENV !== 'production'
  ? (require('dotenv').config(),
    (port.port = process.env.devPORT),
    (port.url = process.env.devURL))
  : ((port.port = process.env.PORT), (port.url = port.port));

connectToDatabase();

app.use(express.json());
app.use(cors());

app.use('/teams', teamRouter);
app.use('/tournament', tournamentRouter);
// app.use('/api-docs', swaggerRouter);

app.listen(port.port, () => {
  console.log(`Server listening on ${port.url + String(port.port)}`);
});

/* npm run dev */
