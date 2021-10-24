import * as api from '../api';
export const readRecipes = async () => {
    try{
        const {data} = await api.readRecipes()
        return data;
    } catch(error){
        console.log(error)
        
    }
}

export const createRecipe = async (recipe) => {
    try{
        const {data} = await api.createRecipe(recipe);
        return data;
    } catch(error){
        console.log(error)
        
    }
}
export const updateRecipe = async (id,recipe) => {
    try{
        const {data} = await api.updateRecipe(id,recipe);
        return data;
    } catch(error){
        console.log(error)
        
    }
}

export const deleteRecipe = async (id) => {
    try{
        await api.deleteRecipe(id)
    } catch(error){
        console.log(error)
        
    }
}

