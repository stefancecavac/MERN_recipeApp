import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'
import DetailedPage from './pages/detailedPage/detailedPage'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import LikedRecipes from './pages/likedRecipes/likedRecipes'
import AddRecipe from './pages/addRecipe/addRecipe'
import { UseUserContext } from './hooks/useUserHook'
import NotFound from './pages/404/notFound'

function App() {

  const { user } = UseUserContext()

  return (
    <div className='grid sm:flex bg-white bg-repeat  ' style={{ backgroundImage: 'url("/bg.jpeg")' }}>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route index element={<Home></Home>}></Route>

          <Route path='/recipes/:recipeId' element={<DetailedPage></DetailedPage>}></Route>
          <Route path='/recipes/add-recipe' element={user ? (<AddRecipe></AddRecipe>) : (<Navigate to='/user/login'></Navigate>)}></Route>

          <Route path='/recipes/liked-recipes' element={user ? (<LikedRecipes></LikedRecipes>) : (<Navigate to='/user/login'></Navigate>)}></Route>


          <Route path='/user/login' element={user ? (<Navigate to='/'></Navigate>) : (<Login></Login>)}></Route>
          <Route path='/user/register' element={user ? (<Navigate to='/'></Navigate>) : (<Register></Register>)}></Route>
          <Route path='/*' element={<NotFound></NotFound>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
