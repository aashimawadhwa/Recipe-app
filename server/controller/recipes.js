import mongoose  from "mongoose";
import Recipe from "../models/recipes.js";

export const readRecipes = async (req,res)=>{
    try{
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
      
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
export const createRecipe = async (req,res)=>{
    const recipe = new Recipe(req.body);

    try{
        await recipe.save();
        res.status(201).json(recipe);
      
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

export const updateRecipe = async(req,res)=>{
    const {id}=req.params;
    const {tittle,content,recipe}=req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`the id ${id} is not valid`)
    }
    const recipe_new={tittle,content,recipe,_id:id}
    await Recipe.findByIdAndUpdate(id,recipe_new,{new:true})
    res.json(recipe_new);
}

export const deleteRecipe = async(req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`the id ${id} is not valid`)
    }
    await Recipe.findByIdAndRemove(id);
    res.json({message:'Recipe deleted successfully'});
}