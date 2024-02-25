import { useParams } from "react-router-dom"
import { useInteractionContext } from "../../hooks/useInteractionHook"
import { useState } from "react"
import { UseRecipeContext } from "../../hooks/useRecipeHook"



const ReviewComponent = () => {
    const [rating, setRating] = useState()
    const [comment, setComment] = useState()


    const { dispatch } = useInteractionContext()
    const { SingleRecipe } = UseRecipeContext()
    const { recipeId } = useParams()

    

    const handleReview = async () => {
        const response = await fetch(`http://localhost:4000/api/recipes/${recipeId}/review`, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({ rating, comment }),
            credentials: 'include'
        })
        const json = await response.json()

        if(!response.ok){
            window.location.href = 'http://localhost:5173/user/login';
        }
        if (response.ok) {
            dispatch({ type: 'SET_REVIEWS', payload: json })

        }

    }



    return (

        <div className=" mt-5 flex flex-col justify-center">
            <p className="mb-5">Comments:</p>
            {SingleRecipe && SingleRecipe.reviews.map((review) => (
                <div className="gap-10 p-2 bg-white rounded-md shadow-md mb-5 flex justify-around  " key={review._id}>
                    <p className=" p-1 text-red-600 font-bold border-r-2 border-red-600 ">{review.userId.userName}</p>
                    <div className=" w-full">
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <svg
                                    key={index}
                                    className={`w-4 h-4 ${index <= review.rating ? 'text-yellow-300' : 'text-gray-500'
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
                        <p>{review.comment}</p>
                    </div>
                </div>
            ))}

            <div className="flex flex-col">
                <div className="flex items-center">
                    <span>Select Rating: </span>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <label key={index} className="ml-2">
                            <input
                                type="radio"
                                value={index}
                                checked={index === rating}
                                onChange={() => setRating(index)}
                                style={{ display: 'none' }}
                            />
                            <svg
                                className={`w-4 h-4 cursor-pointer ${index <= rating ? 'text-yellow-300' : 'text-gray-300'
                                    }`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                                onClick={() => setRating(index)}
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </label>
                    ))}
                </div>

                <textarea className=" bg-white rounded-mg shadow-md p-2 mb-5" placeholder="Leave a comment"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}></textarea>
                <button  className="flex  text-white bg-red-600 border-2  items-center justify-center mx-auto  mb-5 p-2 text-1xl font-bold rounded-lg hover:bg-white hover:text-red-600 border-red-600 transition duration-400 " type='submit' onClick={handleReview}>Post Review</button>
            </div>
        </div>)
}

export default ReviewComponent