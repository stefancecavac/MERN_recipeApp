import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecipeContextProvider } from './context/recipeContext.jsx'
import { UserContextProvider } from './context/userContext.jsx'
import { InteractionContextProvider } from './context/interactionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <UserContextProvider>
      <InteractionContextProvider>
        <RecipeContextProvider>
          <App />
        </RecipeContextProvider>
      </InteractionContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
