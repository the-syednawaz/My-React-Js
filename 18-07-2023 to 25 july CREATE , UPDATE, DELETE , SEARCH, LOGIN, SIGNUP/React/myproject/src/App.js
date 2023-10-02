import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UserCreate from './components/UserCreate'
import UserRead from './components/UserRead'
import UserUpdate from './components/UserUpdate'
import UserSearch from './components/UserSearch'
import Footer from './components/Footer'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/read' element={<UserRead/>}/>
          <Route path='/create' element={<UserCreate/>}/>
          <Route path='/update/:id' element={<UserUpdate/>}/>
          <Route path='/search' element={<UserSearch/>}/>
          </Routes>
          <Footer/>
          </BrowserRouter>
    </>
  )
}
export default App
