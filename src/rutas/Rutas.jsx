import { Route, Routes } from "react-router"
import BookCardDetail from "../components/BookCardDetail"
import BookContainer from "../components/BookContainer"
import FromCRUD from "../components/FormCRUD"

const Rutas = () => {

return(
    <>
        <Routes>
                <Route path="/" element={<BookContainer/>}/>
                <Route path="/formCrud" element={<FromCRUD/>}/>
                <Route path="/book/:id" element={<BookCardDetail/>}/>
                <Route path='/edit/:id' element={<FromCRUD flag={1}/>}/>
                    
        </Routes>
    
    
    
    </>
)}

export default Rutas