const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
  console.log(`Server stated and listening on PORT - ${PORT}`);
});
