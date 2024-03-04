require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

const db = require('./models');

db.sequelize.sync().then(() => {
      app.listen(port, () => {
            console.log(`UDCBD Server Running on ${port}`);
      })
});
