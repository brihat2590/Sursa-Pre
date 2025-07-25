
import { BrowserRouter,
  Routes,Route
 } from "react-router-dom"
 import Home from "./pages/Home"
 
import { Navbar } from "./components/ui/Navbar"
import Footer from "./components/ui/Footer"
export default function App(){
  return(
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          

        </Routes>
      <Footer/>
      
      </BrowserRouter>

    </div>
  
      
  )
}