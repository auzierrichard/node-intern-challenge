const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);
routes.get('/products/:id',ProductController.read);
routes.put('/products/:id',ProductController.update);
routes.post('/products',ProductController.create);
routes.delete('/products/:id',ProductController.destroy);




module.exports = routes;