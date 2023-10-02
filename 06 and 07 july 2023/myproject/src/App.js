// 06-07-2023 

import{BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./function/Menu"
import Home from "./function/Home"
import About from "./function/About"
import Contact from "./function/Contact"
import News from "./function/News"
import Footer from "./function/Footer"
function App(){
    return(
        <>
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/news" element={<News/>} />
            <Route path="*" element={<h2>404 page not found</h2>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
        </>
    )
}
export default App