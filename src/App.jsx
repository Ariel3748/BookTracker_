import { BrowserRouter, Route, Routes } from "react-router"
import FromCRUD from "./components/FormCRUD"
import BookContainer from "./components/BookContainer"
import NavBar from "./components/NavBar"
import BookCardDetail from "./components/BookCardDetail"

function App() {


  const libro = {
      "id": "4",
      "title": "Crónica de una muerte anunciada",
      "author": "Gabriel García Márquez",
      "image": "https://m.media-amazon.com/images/I/718VvX8vXzL._AC_UF1000,1000_QL80_.jpg",
      "comments": 
        "Fatalismo puro desde la primera frase."
      
    }
  return (
    <>

      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<BookContainer/>}/>
          <Route path="/formCrud" element={<FromCRUD/>}/>
          <Route path="/book/:id" element={<BookCardDetail/>}/>
          <Route path='/edit/:id' element={<FromCRUD flag={1}/>}/>
            
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
