const express = require('express');
const router = express.Router();
const pool = require('../database');
const upload = require('../multer');
const cloudinary = require('../cloudinary');

router.post('/add/product', upload.single('thumbnail'), async (req, res) => {
    try {
        const { path } = req.file;
        const { title, description, price, category_name } = req.body;
        const result = await cloudinary.uploader.upload(path);
        const thumbnail = result.secure_url;
        const newProduct = await pool.query("INSERT INTO products (title, description, thumbnail, price, category_name) VALUES ($1, $2, $3, $4, $5) RETURNING *", [title, description, thumbnail, price, category_name]);
        res.status(200).json(newProduct.rows);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await pool.query("SELECT * FROM products;");
        res.status(200).json(products.rows);
    } catch (error) {
        res.status(500).json(error);
    }
}); 

router.delete('/delete/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await pool.query("DELETE FROM products WHERE id = $1", [id]);
        if(response.rowCount == 1) 
            res.status(200).json({messsage: "product deleted successfully"});
        else
            res.status(500).json({message: "Product not found"});
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
        res.status(200).json(product.rows);
    } catch (error) {
        res.status(500).json(error);
    }
}); 

module.exports = router;