

const RecipeCard = ({ recipe }) => {


    return (
        <div className="shadow-md rounded-xl overflow-hidden text-sm relative">
            <img className="bg-black w-full object-cover h-44 sm:h-52" src="/image.jpeg" alt='recipe '></img>
            <div className="bg-red-600 p-1 rounded-xl text-white flex m-2 justify-between absolute bottom-0">
                <p className=" font-bold text-lg  ">{recipe.title}</p>
            </div>
            <small className="text-white  bg-red-600 rounded-full p-1 absolute top-0 m-2">{recipe.cookTime} mins
            </small>
           

        </div>
    )

}

export default RecipeCard