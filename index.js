const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/times.route');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/brasileirao', routes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

/* npm run dev */
