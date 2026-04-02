import { createContext, useContext } from "react";
import { useNavigate } from "react-router";
import fetchHandler from "../../utils/fetch";

const LibrosContext = createContext()


const LibrosProvider = ({children})=>{
    
    const navigate = useNavigate()

    const handleDelete = (id)=>{
        const fetchDeleteBook = async () =>{
            try {
                const resp = await fetchHandler('http://localhost:3000/books/' + id,{
                    method: 'DELETE',
                })
                if(resp){
                    console.log(resp)
                }
            } catch (error) {
                console.log(error)
                //SweetAlert
            }
        }
        fetchDeleteBook()
        navigate('/')
    }

      const handleAgregarLibro = async (nuevoLibro) => {
        try {
            await fetchHandler('http://localhost:3000/books',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoLibro)
            })
        } catch (error) {
            console.log(error)
        }
    }


    const handleEditLibro = async (libroEditado, id) => {
        try {
            await fetchHandler('http://localhost:3000/books/' + id,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(libroEditado)
            })
        //SweetAlert
        } catch (error) {
            console.log(error)
        }
    }

    const data = {
        handleDelete,
        handleAgregarLibro,
        handleEditLibro

    }

    return <LibrosContext.Provider value={data}>{children}</LibrosContext.Provider>
}






export {LibrosProvider}
export default LibrosContext