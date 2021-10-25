import express from  'express';
import dotenv from 'dotenv';
import  mongoose  from 'mongoose';
import cors from 'cors';
import recipeRoutes from './routes/recipes.js';
const app = express ();
dotenv.config();
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use('/recipes', recipeRoutes)



app.get('/',(req, res)=>{
     res.send('welcome to server')
})
const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.mongodb,{useUnifiedTopology:true, useNewUrlParser:true}).then(()=>app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))).catch(err=>console.log(err))


mongoose.connect(process.env.URL,{useUnifiedTopology:true, useNewUrlParser:true}).then(()=>console.log(`server is running on port ${PORT}`)).catch(err=>console.log(err))
app.listen(PORT)