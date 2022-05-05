import React from 'react'

const recipe = ({title, cal, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            
            <img src={image} alt=""/>
            <p>{cal}</p>
        </div>
    )
}

export default recipe