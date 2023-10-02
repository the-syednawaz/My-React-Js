import React from 'react'
import Menu from './Menu'
import Data from './Data'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
    {/* <Route path='/' element={<Data category="all"/>}/> */}
    <Route path='headphone' element={<Data category="headphone"/>}/>
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
