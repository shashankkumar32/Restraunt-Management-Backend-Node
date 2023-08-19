const express = require('express');

const {
    addCategoryController,
    deleteCategoryController,
    editCategoryController,
    getCategoryController,
} = require("./../controllers/categoryController");
const router = express.Router();

// Add a new category
router.post('/add-category', addCategoryController);

// Delete a category by ID
router.delete('/delete-category/:id', deleteCategoryController);

// Edit a category by ID
router.put('/edit-category/:id', editCategoryController);

// Get all categories
router.get('/get-categories', getCategoryController);

module.exports = router;
