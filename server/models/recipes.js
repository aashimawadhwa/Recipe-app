import mongoose from "mongoose";
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
    tittle: {
        type: String,
        require: true
    },

    content: String,
    recipe:String,

}, {timestamps:true});
const recipe = mongoose.model('reciepe', recipeSchema)
export default recipe;