import {BrowserRouter , Routes , Route } from 'react-router-dom'

import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <div className=' grid sm:flex '>
      <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route index element={<Home></Home>}></Route>
      </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App
