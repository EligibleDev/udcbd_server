require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())

const db = require('./models');

// Routers
const linkRouter = require("./routes/links");
app.use("/api/v1/links", linkRouter);

db.sequelize.sync().then(() => {
      app.listen(port, () => {
            console.log(`UDCBD Server Running on ${port}`);
      })
});
