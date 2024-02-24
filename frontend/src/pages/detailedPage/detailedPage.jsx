import { useEffect} from "react"
import { useParams } from "react-router-dom"
import { UseRecipeContext } from "../../hooks/useRecipeHook"
import LikeRecipe from "../../components/userInteractions/likeRecipe"
import { useInteractionContext } from "../../hooks/useInteractionHook"


const DetailedPage = () => {
    const { recipeId } = useParams()
    const { SingleRecipe, dispatch } = UseRecipeContext()
    const {dispatch:interactionDispatch} = useInteractionContext()

    useEffect(() => {
        const fetchSingleRecipe = async () => {
            const response = await fetch(`http://localhost:4000/api/recipes/${recipeId}`,{
                credentials:'include'
            })
            const json = await response.json()

            if (response.ok) {
                interactionDispatch({type:'SET_LIKES', payload:json})
                dispatch({ type: 'SET_RECIPE', payload: json })
            }
        }
        fetchSingleRecipe()
    }, [dispatch, recipeId ,interactionDispatch])



    return (
        <div className="m-10 sm:w-full">
            {SingleRecipe &&
                <div>
                    <p className="mx-10 md:mx-16 lg:mx-52 bg-red-600 rounded-full p-1 shadow-md text-white text-5xl text-center">{SingleRecipe.title}</p>
                    <div className="mt-5 flex items-center justify-around bg-white shadow rounded-full p-1">
                        <p className="flex items-center"><svg className="mr-3 h-10 w-10 " fill="red" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 222.5 222.5" xmlSpace="preserve" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M222.5,179.196v5c0,4.143-3.357,7.5-7.5,7.5H7.5c-4.143,0-7.5-3.357-7.5-7.5v-5c0-4.143,3.357-7.5,7.5-7.5H215 C219.143,171.696,222.5,175.054,222.5,179.196z M215.75,155.354c0,4.143-3.357,7.5-7.5,7.5h-194c-4.143,0-7.5-3.357-7.5-7.5 c0-52.252,38.55-95.669,88.702-103.307C95,50.543,94.75,48.953,94.75,47.304c0-9.098,7.402-16.5,16.5-16.5s16.5,7.402,16.5,16.5 c0,1.649-0.25,3.239-0.702,4.743C177.2,59.684,215.75,103.102,215.75,155.354z M103.566,73.537c-1.01-4.018-5.082-6.449-9.102-5.447 c-1.192,0.3-29.421,7.585-47.612,29.125c-15.424,18.264-17.379,41.078-17.454,42.04c-0.325,4.129,2.759,7.74,6.889,8.064 c0.2,0.016,0.398,0.023,0.596,0.023c3.876,0,7.16-2.982,7.469-6.912c0.015-0.188,1.618-18.922,13.962-33.538 c14.961-17.716,39.416-24.153,39.815-24.257C102.141,81.623,104.574,77.552,103.566,73.537z"></path> </g></svg>{SingleRecipe.servings} Servings</p>
                        <p>{SingleRecipe.calories} Cal</p>
                        <LikeRecipe></LikeRecipe>
                    </div>
                </div>

            }
            <div className="bg-white shadow mt-10 md:flex justify-between rounded-lg  ">
                <div className="w-full overflow-hidden rounded-lg">
                    <img className="w-full object-cover" src='/image.jpeg'></img>
                </div>

                <div className="p-5 w-full">
                    {SingleRecipe &&
                        <p className="text-red-600 text-2xl font-bold">{SingleRecipe.description}</p>
                    }

                </div>
            </div>

            <div>
                <div>
                    {SingleRecipe &&
                        <div className=" p-1 my-5 flex justify-around bg-white shadow rounded-full">
                            <p className="flex items-center"><svg className="mr-3 w-9 h-9" fill="red" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.577 40.577" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="b170_utensil"> <path d="M36.124,18.043c4.467-4.465,5.795-10.381,2.967-13.213c-2.829-2.826-8.747-1.5-13.213,2.967 c-3.837,3.838-5.354,8.74-3.916,11.842l-0.598,0.6l-4.465-4.465c2.629-2.627,2.155-4.316,2.155-4.316L9.706,2.113L0,11.816 l9.35,9.35c0,0,1.854,0.301,4.312-2.156l4.467,4.463l-0.957,0.959l-0.998-0.996L5.458,34.148l4.311,4.316l10.718-10.715l-1-0.998 l0.962-0.957l1.841,1.84l-0.628,0.627l9.908,9.91l4.492-4.494l-9.909-9.908L25.526,24.4l-1.845-1.842l0.604-0.6 C27.383,23.398,32.287,21.883,36.124,18.043z M38.191,11.125l-9.347,9.346l-1.081-1.078l9.351-9.348L38.191,11.125z M36.034,8.965 l-9.349,9.35l-1.078-1.082l9.351-9.342L36.034,8.965z M32.799,5.73l1.077,1.078l-9.346,9.35l-1.08-1.082L32.799,5.73z"></path> </g> <g id="Capa_1_122_"> </g> </g> </g></svg>{SingleRecipe.prepTime} Mins</p>
                            <p className="flex items-center"><svg className="mr-3 w-10 h-10" fill="red" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M252.7998,102.3999,224,124v60a32.03667,32.03667,0,0,1-32,32H64a32.03667,32.03667,0,0,1-32-32V124L3.2002,102.3999a7.9998,7.9998,0,0,1,9.5996-12.7998L32,104V88A16.01833,16.01833,0,0,1,48,72H208a16.01833,16.01833,0,0,1,16,16v16l19.2002-14.3999a7.9998,7.9998,0,0,1,9.5996,12.7998ZM160,56a8.00039,8.00039,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8.00039,8.00039,0,0,0,160,56Zm-32,0a8.00039,8.00039,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8.00039,8.00039,0,0,0,128,56ZM96,56a8.00039,8.00039,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8.00039,8.00039,0,0,0,96,56Z"></path> </g></svg>{SingleRecipe.cookTime} Mins</p>
                        </div>
                    }
                </div>
            </div>

            <div className="flex justify-between gap-3">
                {SingleRecipe &&
                    <div className=" flex flex-col p-5 w-full  justify-around bg-white shadow rounded">
                        <p className="mb-5 text-red-600 text-2xl font-bold">Ingredients:</p>
                        {SingleRecipe.ingredients && SingleRecipe.ingredients.map((ingredient) => (
                            <ol className="list-disc marker:text-red-600 mx-10 text-gray-700" key={ingredient._id}>
                                <li >{ingredient.name}</li>
                                <p >{ingredient.amount}</p>
                            </ol>
                        ))}
                    </div>
                }

                {SingleRecipe &&
                    <div className=" p-5 w-full flex flex-col justify-around bg-white shadow rounded">
                        <p className="mb-5 text-red-600 text-2xl font-bold">Instructions:</p>
                        {SingleRecipe.instructions && SingleRecipe.instructions.map((instruction) => (
                            <ol className="list-disc marker:text-red-600  mx-10 text-gray-700" key={instruction._id}>
                                <li >{instruction.name}</li>
                                <span >{instruction.step}</span>
                            </ol>
                        ))}
                    </div>
                }
            </div>




        </div>
    )
}

export default DetailedPage