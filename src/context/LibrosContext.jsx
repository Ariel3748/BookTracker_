import { createContext, useContext } from "react";
import { useNavigate } from "react-router";
import fetchHandler from "../../utils/fetch";
import Swal from "sweetalert2";

const LibrosContext = createContext()


const LibrosProvider = ({children})=>{
    
    const navigate = useNavigate()

    const handleDelete = (id)=>{
        const fetchDeleteBook = async () => { 
        await Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, borrarlo',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const resp = await fetchHandler('http://localhost:3000/books/' + id, {
                        method: 'DELETE',
                    });
                    if (resp) {
                    await Swal.fire({
                        title:'¡Borrado!',
                        text:'El libro ha sido eliminado correctamente.',
                        icon: 'success',
                        confirmButtonColor: '#d33',
                        confirmButtonText: 'Okey',
                        
                    });
                    navigate('/')
                    }
                } catch (error) {
                    Swal.fire('Error', 'No se pudo eliminar el libro.', 'error');
                }
            }
        });
    }
    fetchDeleteBook()

    }

      const handleAgregarLibro = async (nuevoLibro) => {
        try {
            const resp = await fetchHandler('http://localhost:3000/books',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoLibro)
            })
            if(resp){
                await Swal.fire({
                        title:'¡Agregado!',
                        text:'El libro ha sido agregado correctamente.',
                        icon: 'success',
                        confirmButtonColor: '#d33',
                        confirmButtonText: 'Okey',
                        
                    });
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }

    }


    const handleEditLibro = async (libroEditado, id) => {
        try {
            const resp = await fetchHandler('http://localhost:3000/books/' + id,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(libroEditado)
            })
        if(resp){
            console.log(resp)
            await Swal.fire({
                        title:'¡Editado!',
                        text:'El libro ha sido editado correctamente.',
                        icon: 'success',
                        confirmButtonColor: '#d33',
                        confirmButtonText: 'Okey',
                        
                    });
            navigate('/')
        }
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