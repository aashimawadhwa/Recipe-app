import express from 'express';
import {createRecipe, deleteRecipe, readRecipes, updateRecipe } from '../controller/recipes.js';

const router = express.Router();
router.get('/', readRecipes);
router.post('/', createRecipe);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);
 export default router;