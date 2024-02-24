import { createContext, useReducer } from "react";



export const RecipeContext = createContext()

export const RecipeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RECIPES':
            return {
                recipes: action.payload
            }
        case 'SET_RECIPE':
            return {
                SingleRecipe: action.payload,
                recipes:state.recipes
            }
        case 'POST_RECIPE':
            return {
                recipes: [action.payload, ...state.recipes]
                
            }
        case 'DELETE_RECIPE':
            return {
                recipes: state.recipes.filter((recipe) => recipe._id !== action.payload._id)
            }

    }
}

export const RecipeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(RecipeReducer, {
        recipes: []
    })
    console.log(state)

    return (
        <RecipeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </RecipeContext.Provider>
    )

}