const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <h2>{recipe.recipe.label}</h2>
          <p>Calories: {Math.round(recipe.recipe.calories)}</p>
          <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
            View Recipe
          </a>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
