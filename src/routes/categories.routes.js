const { Router } = require('express');
const router = Router();
const {getAllCategories, getCategory, createCategory, deleteCategory, updateCategory} = require('../controllers/categories.controller')
const pool = require('../db');


router.get('/categories', getAllCategories);

router.get('/categories/:id', getCategory);

router.post('/categories', createCategory);

router.delete('/categories/:id', deleteCategory);

router.put('/categories/:id', updateCategory);

module.exports = router;