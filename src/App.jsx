import { BrowserRouter, Route, Routes } from "react-router"
import FromCRUD from "./components/FormCRUD"
import BookContainer from "./components/BookContainer"
import NavBar from "./components/NavBar"
import BookCardDetail from "./components/BookCardDetail"
import Rutas from "./rutas/Rutas"
import { LibrosProvider } from "./context/librosContext"

function App() {

  return (
    <>

      <BrowserRouter>
      <LibrosProvider>
      <NavBar/>
      <Rutas/>
      </LibrosProvider>
      </BrowserRouter>
    </>
  )
}

export default App
