import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {

    return(
        <div className="recipe-box">
            {/* <h1>{check.length < 0 && "No results" }</h1> */}

            <h1>{title}</h1>
            <p>Calories: {(calories).toFixed(2)}</p>
            <img src={image} alt={title} />
            <ul>
                {ingredients.map((ingredients, index) => (
                    <li key={index}>{ingredients.text}</li>
                ))}
            </ul>
        </div>
    );

};

export default Recipe;