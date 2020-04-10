import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';



const App = () => {
  const APP_ID = "******";
  const APP_KEY = "*************************";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);


  const getRecipes = async () => {
    const response = await fetch("https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}"
  );
    const data = await response.json(); 
    setRecipes(data.hits);
    console.log(data.hits);
  };


    // response.json - this is going to format it in a way that we can work very easily with the data
    // take time because we are requesting from an external API, so we don't know when the info comes back... add await
    // any external request that you're fetching will have to be made with async away or alternatively with normal promises with dot then...

    /* 
    fetch(tps://api.edamam.com)
    then(response => {
    response.json
    });
    */


  const updateSearch = e => {


  }



  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={} />
        <button className="search-button" type="submit">
          SEARCH
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
