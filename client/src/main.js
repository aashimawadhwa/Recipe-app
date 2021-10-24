import { useEffect } from "react";
import Preloader from "./components/preloader";
import{readRecipes} from "./functions";
import { useState } from "react";


function App() {

// const [recipe, setRecipe] = useState({tittle: '' , content:'',recipe:''});
const[recipes,setRecipes]=useState();  

useEffect(() => {
    const fetchData = async() => {
      const result = await readRecipes();
      setRecipes(result);
    };
    fetchData();
  },[]);

  return (
   <div classname="container">
  <div className="row">
    

   {
     !recipes ? <Preloader/>:recipes.length>0? <div className="collection">
       {recipes.map(recipe=>(
                <div class="row">
                <div class="col s12 m12">
                  <div class="blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title black-text"><h2>&nbsp;<i className="material-icons prefix">local_dining </i>&nbsp;&nbsp;{recipe.tittle}</h2></span>
                      <h4 class="black-text"> &nbsp;< i className="material-icons prefix ">fastfood</i> &nbsp;&nbsp; Ingredients </h4>
                      <h5>&nbsp;&nbsp;{recipe.content}</h5>
                      <h4 class="black-text"> &nbsp;<i className="material-icons prefix">menu_book</i> &nbsp;&nbsp;Recipe</h4>
                      <h6><pre>{recipe.recipe}</pre></h6>
                    </div>
                   
                  </div>
                </div>
              </div>
                        
       ))}
    
   </div>:<div><h5>No Recipe , </h5></div>
   }
   
  </div>
</div>

  );
}

export default App;
