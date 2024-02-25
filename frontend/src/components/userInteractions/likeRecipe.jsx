import { useInteractionContext } from "../../hooks/useInteractionHook";
import {  useParams } from "react-router-dom";
import { UseUserContext } from "../../hooks/useUserHook";


const LikeRecipe = () => {
    const { recipeId } = useParams()

    const {likes, dispatch } = useInteractionContext()
    const { user } = UseUserContext()
 
  
    const handleLike = async () => {
        const response = await fetch(`http://localhost:4000/api/recipes/${recipeId}/like`, {
            method: 'POST',
            credentials: 'include',
        })
        const json = await response.json()

        if(!response.ok){
            window.location.href = 'http://localhost:5173/user/login';
           }

        if (response.ok) {
            dispatch({ type: 'POST_LIKE', payload: json })
        }

    }
    return (
        <p><svg onClick={handleLike} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className={`w-8 h-8 text-red-600  hover:fill-red-600  hover:cursor-pointer ${likes && likes.likes.includes(user && user._id) ? "fill-red-600 transition ease-in-out delay-50 hover:-translate-y-1" : "fill-none "}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        </p>
    )
}

export default LikeRecipe