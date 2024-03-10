const express = require("express");

const router = express.Router();

// List products route GET request handler
router.get("/admin/products", (req, res) => {});

// Create new product route GET request handler
router.get("/admin/products/new", (req, res) => {});

module.exports = router;
