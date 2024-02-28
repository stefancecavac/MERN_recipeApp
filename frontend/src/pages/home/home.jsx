import { Link } from "react-router-dom"
import FilterCard from "../../components/filters/filterCard"
import RecipeCard from "../../components/recipes/recipeCard"
import { UseRecipeContext } from "../../hooks/useRecipeHook"
import { useEffect, useState } from "react"
import { UseUserContext } from "../../hooks/useUserHook"
import LoadingSkeleton from "../loading/LoadingSkeleton"



const Home = () => {
    const [search, setSearch] = useState('')
    const { recipes, dispatch } = UseRecipeContext()
    const { user } = UseUserContext()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getRecipes = async () => {
            try {
                let url = `http://localhost:4000/api/recipes`
                if (search.trim() !== '') {
                    url += `?title=${search}`;
                }
                const response = await fetch(url, {

                })
                const json = await response.json()


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
    }, [dispatch, user, search])



    return (

        <div className="flex flex-col sm:w-full m-3 sm:m-10 sm:mt-4">
        <FilterCard search={search} onSearchChange={setSearch}></FilterCard>
        <p className="text-2xl mx-auto sm:text-7xl font-bold text-gray-800 mb-10">Most delicious <br></br><span className="text-red-600">Cook me</span> recipes</p>
        <p className="font-bold  text-gray-700 mb-10">There are <span className="text-red-600">{recipes && recipes.length}</span> recipes to cook!</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {loading ? (
                <LoadingSkeleton />
            ) : (
                recipes.map((recipe) => (
                    <Link to={`/recipes/${recipe._id}`} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-100' key={recipe._id}>
                        <RecipeCard recipe={recipe} />
                    </Link>
                ))
            )}
        </div>
    </div>
    )
}

export default Home