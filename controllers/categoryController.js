const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

const addCategoryController = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.send("Category Added Successfully!");
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

const deleteCategoryController = async (req, res) => {
  const categoryId = req.params.id;
  try {
    await Category.findByIdAndDelete(categoryId);
    res.send("Category Deleted Successfully!");
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

const editCategoryController = async (req, res) => {
  const categoryId = req.params.id;
  const updateData = req.body;
  try {
    await Category.findByIdAndUpdate(categoryId, updateData);
    res.send("Category Updated Successfully!");
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

const getCategoryController = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

module.exports = {
  addCategoryController,
  deleteCategoryController,
  editCategoryController,
  getCategoryController,
};
