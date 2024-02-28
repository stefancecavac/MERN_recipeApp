import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { UseRecipeContext } from "../../hooks/useRecipeHook"

import RecipeCard from "../../components/recipes/recipeCard"
import { UseUserContext } from "../../hooks/useUserHook"

const LikedRecipes = () => {
    const { recipes, dispatch } = UseRecipeContext()
    const [loading, setLoading] = useState(true)
    const { user } = UseUserContext()

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/recipes/liked-recipes`, {
                    credentials: 'include'
                })
                const json = await response.json()

                if (!response.ok) {
                    setLoading(false)
                }

                if (response.ok) {
                    setLoading(false)
                    dispatch({ type: 'SET_RECIPES', payload: json })
                }
            }
            catch (error) {
                console.log(error)
            }

        }
        getRecipes()
    }, [dispatch])

    if (loading) {
        return <p className="flex flex-col sm:w-full m-5 sm:m-10 sm:mt-4 " >loading ...</p>
    }
    return (
        <div className="flex flex-col sm:w-full m-5 sm:m-10 sm:mt-4 ">
        
            {!user ? (<p className="flex   m-auto w-full text-6xl">Login in to see liked recipies</p>) : (
                <>
                    <p className="text-gray-700 text-4xl font-bold mb-10">Your  <span className="text-red-600" >liked</span> recipes:</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  ">
                        {recipes && recipes.map((recipe) => (
                            <Link to={`/recipes/${recipe._id}`} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105  duration-100' key={recipe._id}>
                                <RecipeCard recipe={recipe} ></RecipeCard></Link>

                        ))}
                    </div>


                </>
            )}
        </div>


    )
}

export default LikedRecipes