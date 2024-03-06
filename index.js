require("dotenv").config();
const express = require("express");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors({
      origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "https://udcbd-bd.web.app",
            "https://udcbd-bd.firebase.app",
      ],
}))

const db = require("./models");

// Routers
const linkRouter = require("./routes/links");
app.use("/api/v1/links", linkRouter);

db.sequelize.sync().then(() => {
      app.listen(port, () => {
            console.log(`UDCBD Server Running on ${port}`);
      })
});
