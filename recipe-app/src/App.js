import './App.css'
import React, {useEffect, useState} from 'react'
import Recipe from './Recipe'

const App = () => {
	const APP_ID = '9266f04c'
	const APP_KEY = '1889da8282aecb3f856beca919cf40c4'
	const URI = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

	const [recipes, setRecipes] = useState([])

	useEffect(() =>{
		getRecipes()
	}, [])

	const getRecipes = async () => {
		const res = await fetch(URI)
		const data = await res.json()
		setRecipes(data.hits)
		console.log(data.hits)
	}

	return (
		<div className="App">
			<form className="search-form">
				<input type="text" placeholder="Search Recipe" className='search-bar'/>
				<button type="submit" className="search-btn">Search</button>
			</form>
			{recipes.map(recipe => (
				<Recipe title={recipe.recipe.label} cal={"calories" + recipe.recipe.calories} image={recipe.recipe.image}/>
			))}
		</div>
	)
}

export default App