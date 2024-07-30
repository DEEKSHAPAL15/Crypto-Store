import React from 'react'
import Navbar from './components/Navbar'
import PageNotFound from './screens/PageNotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './screens/Register'
import Login from './screens/Login'
import CoinPage from './screens/CoinPage'
import Home from './screens/Home'
import Cart from './screens/Cart'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<PrivateRoute/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='coin/:id' element={<CoinPage/>}/>
      <Route path='cart' element={<Cart/>}/>
      </Route>
      </Routes>
      </Router>
  )
}

export default App
