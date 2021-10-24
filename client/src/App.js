import { useEffect } from "react";
import Preloader from "./components/preloader";
import{createRecipe,readRecipes, updateRecipe, deleteRecipe } from "./functions";
import { useState } from "react";
import history from './history';
import './style.css';

function App() {

const [recipe, setRecipe] = useState({tittle: '' , content:'',recipe:''});
const[recipes,setRecipes]=useState(null);  
const [currentId, setCurrentId] = useState(0);
useEffect(() => {
 let currentRecipe = currentId!==0?recipes.find(recipe=>recipe._id===currentId):{tittle:'',content:'',recipe:''}
 setRecipe(currentRecipe);
}, [currentId]);
useEffect(() => {
    const fetchData = async() => {
      // e.preventDefault();
      const result = await readRecipes();
      setRecipes(result);
    };
    fetchData();
  },[currentId]);
  const clear=()=>{
    setCurrentId(0);
    setRecipe({tittle:'',content:'',recipe:''})
  }
  useEffect(() => {
    const clearField = (e) => {
      if(e.keyCode === 27){
       clear()
      }
    }
    window.addEventListener('keydown', clearField)
  return () => window.removeEventListener('keydown', clearField)
},[])
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (currentId===0) {
      const result = await createRecipe(recipe)
      setRecipes([...recipes,result])
      clear();
    }
    else{
      await updateRecipe(currentId,recipe)
      clear()
    }
   
  }
  const removeRecipe = async(id) => {
    await deleteRecipe(id);
    const recipesCopy = [...recipes];
    recipesCopy.filter(recipe => recipe._id !== id);
    setRecipes(recipesCopy);
  }
  return (
   <div classname="container">
  <div className="row">
   
    <form className="col s12" onSubmit={onSubmitHandler}> 
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">local_dining </i>
          <input id="icon_prefix" type="text" className="validate" 
          value={recipe.tittle}
              onChange={e=>setRecipe({...recipe,tittle:e.target.value})}
          />
          <label htmlFor="icon_prefix">What You Call Your Dish?</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">fastfood</i>
          <input id="icon_telephone" type="tel" className="validate" 
          value={recipe.content}
          onChange={e=>setRecipe({...recipe,content:e.target.value})}
          />
          <label htmlFor="icon_telephone">Ingridients</label>
        </div>
      </div>
      
      <div className="row">
  <div className="input-field col s12">
  <i className="material-icons prefix">menu_book</i>

    <textarea id="textarea1" className="materialize-textarea" 
    value={recipe.recipe}
              onChange={e=>setRecipe({...recipe,recipe:e.target.value})}

    />
    <label htmlFor="textarea1"> Recipe</label>
  </div>
</div>
<div className="row center-align">
        <button className="waves-effect waves-light btn">Add Recipe</button>
       
      </div>
    </form>
    <div className="row center-align">
        <button className="waves-effect waves-light btn"  onClick={() => history.push('/Main')}>Preview Recipe</button>
       
      </div>
   {
     !recipes ? <Preloader/>:recipes.length>0? <div className="collection">
       {recipes.map(recipe=>(
                 <ul key={recipe._id} 
                 onClick={()=>setCurrentId(recipe._id)}
                 className="N/A transparent"><div><h3>{recipe.tittle}</h3><a href="#!" onClick={()=>removeRecipe(recipe._id)} className="secondary-content"><i className="material-icons black-text">delete</i></a></div></ul>

       ))}

    
   </div>:<div><h5>No Recipe , Show Us Some Food Man !!</h5></div>
   }
   
  </div>
</div>


  );
}

export default App;
