import './App.css'
import React, {useEffect, useState} from 'react'
import Recipe from './Recipe'

const App = () => {
	const [recipes, setRecipes] = useState([])
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('chicken')

	const APP_ID = process.env.REACT_APP_APP_ID
	const APP_KEY = process.env.REACT_APP_API_KEY
	const URI = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

	useEffect(() =>{
		getRecipes()
	}, [query])

	const getRecipes = async () => {
		try {
			const res = await fetch(URI);
			const data = await res.json();
			setRecipes(data.hits || []);
		} catch (error) {
			console.error("API Fetch Error:", error);
			setRecipes([]);
		}
	}

	const updateSearch = e => {
		setSearch(e.target.value)
	}

	const getSearch = e => {
		e.preventDefault()
		setQuery(search)
		setSearch('')
	}

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input type="text" placeholder="Search Recipe" className='search-bar' value={search} onChange={updateSearch} />
				<button type="submit" className="search-btn">Search</button>
			</form>
			<div className="recipes">
				{recipes?.map(recipe => (
					<Recipe 
					title={recipe.recipe.label} 
					cal={recipe.recipe.calories} 
					image={recipe.recipe.image} 
					ing={recipe.recipe.ingredients} 
					/>
				))}
			</div>
			
		</div>
	)
}

export default App
