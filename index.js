const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/times.route');
const connectToDatabase = require('./src/database/database');

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
app.use('/brasileirao', routes);

app.listen(port.port, () => {
  console.log(`Server listening on ${port.url+String(port.port)}`);
});

/* npm run dev */
