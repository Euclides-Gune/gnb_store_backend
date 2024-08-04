const express = require('express');
const category_router = express.Router();
const pool = require('../database');

category_router.get('/categories', async (req, res) => {
    try {
        const categories = await pool.query("SELECT * FROM category");
        res.status(200).json(categories.rows);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports  = category_router;