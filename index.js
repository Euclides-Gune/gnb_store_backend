const express = require('express');
const router = require('./routes/products');
const category_router = require('./routes/category');
const cors = require('cors');
require('dotenv').config({});
const app = express();

const port = process.env.PORT || 4000;

app.use(category_router);
app.use(router);
app.use(cors());

app.listen(port, () => console.log(`server running on http://localhost:${port}`));