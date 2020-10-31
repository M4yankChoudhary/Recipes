import React, {useState, useEffect} from 'react';
import './App.css';
import './components/Recipe';
import Recipe from './components/Recipe';
import loading from './media/loading.gif';

const App = () => {

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY; 

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [url, setURL] = useState(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
    const getRecipes = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json()
      setRecipes(data.hits);
      setIsLoading(false);
  };
    getRecipes();
  },[url]);
    
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    setURL(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
  };

  return (
    <div className="App">
      <h1 className="app-name">RecipeApp</h1>
      <form onSubmit={getSearch}   className="search-form">
        <input autoFocus className="search-bar" type="text" value={search} onChange={updateSearch}
        onKeyPress={ e => {
            if(e.key === 'Enter')
            {
              document.getElementById('btn').click();
            }
          }
        }
        placeholder="Try a new recipe today." />
        <button id="btn" className="search-button" type="submit">Search</button>
      </form>
      {isLoading ? <img className="loading" src={loading} alt="" /> : ""}
      <div className="row">
        {recipes.map((recipe, index ) => (
          <Recipe
            className="column"
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );

};

export default App;
