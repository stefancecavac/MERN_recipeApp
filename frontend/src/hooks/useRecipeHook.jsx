import { useContext } from "react"
import { RecipeContext } from "../context/recipeContext"


export const UseRecipeContext = () => {
    const context = useContext(RecipeContext)
    
    if(!context){
        throw Error('useRecipeContext must be used inside of recipeContextProvider')
    }
    return context
}