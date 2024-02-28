

const RecipeCard = ({ recipe }) => {

    const averageRating = () => {
        if (!recipe.reviews || recipe.reviews.length === 0) {
            return 0;
        }

        const totalRating = recipe.reviews.reduce((acc, review) => acc + review.rating, 0);
        const average = totalRating / recipe.reviews.length;

        return average;
    };
    const avgRating = averageRating();

    
    return (
        <div className="shadow-md rounded-xl overflow-hidden text-sm relative">
            <img className="bg-black w-full object-cover h-44 sm:h-52" src="/image.jpeg" alt='recipe '></img>
            <div className="bg-red-600 p-1 rounded-xl text-white flex flex-col m-2 justify-between absolute bottom-0">
                <p className=" font-bold text-lg  ">{recipe.title}</p>
                <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <svg
                            key={index}
                            className={`w-4 h-4 ${index <= avgRating ? 'text-yellow-300' : 'text-gray-500'
                                } ms-1`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                </div>
            </div>
            <small className="text-white  bg-red-600 rounded-full p-1 absolute top-0 m-2">{recipe.cookTime} mins  </small>
            <small className="text-red-600  bg-white rounded-full p-1 absolute top-0 right-0 m-2">{recipe.likes.length} Likes</small>

        </div>
    )

}

export default RecipeCard