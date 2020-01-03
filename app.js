const express = require("express");
const app = express();
const logger = require("morgan");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const fs = require("fs");
const month = new Date().getMonth();
const year = new Date().setUTCFullYear();
const dt = parseInt(new Date().getDate() + month + year);

app.use(
  logger("common", {
    stream: fs.createWriteStream("./logs/log.txt", { flags: "a" })
  })
);
app.use(logger("dev"));

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;
