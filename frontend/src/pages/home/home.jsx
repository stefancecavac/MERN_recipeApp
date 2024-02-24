import { Link} from "react-router-dom"
import FilterCard from "../../components/filters/filterCard"
import RecipeCard from "../../components/recipes/recipeCard"
import { UseRecipeContext } from "../../hooks/useRecipeHook"
import { useEffect } from "react"
import { UseUserContext } from "../../hooks/useUserHook"


const Home = () => {
    const { recipes, dispatch } = UseRecipeContext()
    const { user} = UseUserContext()

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/recipes`,{
                   
                })
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
    }, [dispatch ,user])


    return (
        <div className="flex flex-col sm:w-full sm:m-10 sm:mt-4 ">
            <FilterCard></FilterCard>
            <p className="text-7xl font-bold text-gray-800 mb-10 ">Most delicious <br></br><span className="text-red-600">Cook me</span> recepies</p>
            <p className="font-bold text-gray-700 mb-10">There are   <span className="text-red-600">{recipes.length}</span> recipes to cook!</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {recipes && recipes.map((recipe) => (
                   <Link to={`/${recipe._id}`} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105  duration-100' key={recipe._id}>
                    <RecipeCard  recipe={recipe} ></RecipeCard></Link> 

                ))}
            </div>
        </div>
    )
}

export default Home