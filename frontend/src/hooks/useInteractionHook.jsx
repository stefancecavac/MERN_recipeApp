import { useContext } from "react"
import { InteractionContext } from "../context/interactionContext"



export const useInteractionContext = () => {
    const context = useContext(InteractionContext)
    
    if(!context){
        throw Error('useInteractionContext must be used inside of interactionContextProvider')
    }
    return context
}