import axios from 'axios';
const url ="http://localhost:5000/recipes";
export const readRecipes =() => axios.get(url);
export const createRecipe = newRecipe => axios.post(url, newRecipe);
export const updateRecipe=(id,updatedRecipe)=>axios.patch(`${url}/${id}`,updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${url}/${id}`);