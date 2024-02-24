import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'
import DetailedPage from './pages/detailedPage/detailedPage'
import Login from './pages/auth/login'
import Register from './pages/auth/register'

function App() {

  return (
    <div className='grid sm:flex bg-white bg-repeat  ' style={{ backgroundImage: 'url("/bg.jpeg")' }}>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route index element={<Home></Home>}></Route>

          <Route path='/:recipeId' element={<DetailedPage></DetailedPage>}></Route>

          <Route path='/user/login' element={<Login></Login>}></Route>
          <Route path='/user/register' element={<Register></Register>}></Route>


        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
