import React from 'react'
import style from './recipe.module.css'

const recipe = ({title, cal, image, ing}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
                <div className={style.para}>
                    <ol>
                        {ing.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                </div>
                <img className={style.image} src={image} alt=""/>
                <div >
                    <p><b>Calories {cal.toFixed(2)}</b></p>
                </div>
        </div>
    )
}

export default recipe