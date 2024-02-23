import FilterCard from "../../components/filters/filterCard"
import RecipeCard from "../../components/recipes/recipeCard"
import { UseRecipeContext } from "../../hooks/useRecipeHook"
import { useEffect } from "react"


const Home = () => {
    const { recipes, dispatch } = UseRecipeContext()

    useEffect(() => {


        const getRecipes = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/recipes`)
                const json = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SET_RECIPES', payload: json })
                }
            }
            catch (error) {
                console.log(error)
            }

        }
        getRecipes()
    }, [dispatch])


    return (
        <div className="flex flex-col sm:w-full m-5 ">
            <FilterCard></FilterCard>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                {recipes && recipes.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe} ></RecipeCard>

                ))}
            </div>
        </div>
    )
}

export default Home