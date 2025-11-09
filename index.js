const express = require('express');
const db = require('./config/connectDB');
const apiRoute = require('./router/api.router');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.json());
app.use('/crm/api', apiRoute);

// run the server
app.listen(PORT, () => {
  console.log(`Server started and listening on PORT - ${PORT}`);
  db.connectDB();
});
