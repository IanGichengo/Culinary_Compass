const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();

// Create a new recipe
router.post('/', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get a recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update a recipe by ID
router.put('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
