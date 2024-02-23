

const RecipeCard = ({ recipe }) => {


    return (
        <div className="shadow rounded-xl overflow-hidden text-sm relative">
            <img className="bg-black w-full object-cover h-44 sm:h-60" src="/image.jpeg" alt='recipe'></img>
            <div className="flex m-2 justify-between">
                <p className="font-bold text-gray-600">{recipe.title}</p>
                <p>{recipe.mealType}</p>
            </div>
            <div className="text-white font-bold bg-red-600 rounded-full p-1 absolute top-0 m-2">{recipe.cookTime} mins
            </div>
            <div className="flex justify-around m-2 border-t-2 border-gray-200">
                <p>{recipe.likes.length}</p>
                <p>{recipe.reviews.length}</p>

            </div>

        </div>
    )

}

export default RecipeCard