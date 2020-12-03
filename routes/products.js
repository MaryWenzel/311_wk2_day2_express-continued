const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')

// GET PRODUCTS
router.get('/products', productController.list);

// GET PRODUCT BY ID
router.get('/products/:id', productController.show)

// CREATE NEW PRODUCT
router.post('/products', productController.create);

module.exports = router