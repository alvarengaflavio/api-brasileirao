const { connect } = require('mongoose');

function connectToDatabase() {
  connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MONGO-DB');
    })
    .catch((err) => {
      return console.log(`Error connecting to the database: ${err}`);
    });
}

module.exports = connectToDatabase;
