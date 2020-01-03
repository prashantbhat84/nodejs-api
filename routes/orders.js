const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling get request to /orders"
  });
});
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Order created"
  });
});
router.get("/:orderid", (req, res, next) => {
  const id = req.params.orderid;
  res.status(200).json({
    message: `order fetched with order id ${id}`
  });
});
router.delete("/:orderid", (req, res, next) => {
  const id = req.params.orderid;
  res.status(200).json({
    message: `order deleted with order id ${id}`
  });
});

module.exports = router;
