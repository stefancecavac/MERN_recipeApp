
import { createContext, useReducer } from "react";



export const InteractionContext = createContext()

export const InteractionReducer = (state, action) => {
    switch (action.type) {
        case 'POST_LIKE':
            return {
                likes: action.payload,
            }
            case 'SET_LIKES':
            return {
                likes: action.payload,

            }
            case 'POST_REVIEW':
            return {
                reviews: action.payload,

            }
            case 'SET_REVIEWS':
            return {
                reviews: action.payload,

            }
   
            default:
                return state
    }
}

export const InteractionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(InteractionReducer, {
        likes: [],
        reviews:[]
    })
    console.log(state)

    return (
        <InteractionContext.Provider value={{ ...state, dispatch }}>
            {children}
        </InteractionContext.Provider>
    )

}