import { useEffect, useState } from "react"
import { Navigate, NavLink, useNavigate, useParams } from "react-router"

function BookCardDetail(){

    const [load,setLoad] = useState(true)
    const[book,setBook] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        const fetchBook = async ()=>{//Se puede exportar en un get
          try{
              const resp = await fetch('http://localhost:3000/books/' + id)
              console.log("fetch a ",'http://localhost:3000/books/' + id )
              const data = await resp.json()
    
              setBook(data)
              setLoad(false)
    
          }
          catch(err){
            console.log("Fallo la carga")
          }
        }
        fetchBook()
      },[])


      const handleDelete = ()=>{
        const fetchDeleteBook = async ()=>{//Se puede exportar en un get
          try{
              const resp = await fetch('http://localhost:3000/books/' + id,{
                    method: 'DELETE',
                })
              console.log("fetch a ",'http://localhost:3000/books/' + id,"delete" )
              const data = await resp.json()
              console.log(data)
          }
          catch(err){
            console.log("Fallo el borrado")
          }
        }
        
        fetchDeleteBook()
        navigate('/')
      }

      if(load){
        return(
        <div className="text-center py-20 font-serif text-[#8b5a2b]">Cargando...</div>
        )
      }

    return(
        <>
<div className="max-w-4xl mx-auto my-10 p-4 sm:p-8 bg-[#fdfaf6] border-2 border-[#d7ccc8] shadow-2xl relative rounded-sm">
    {/* Decoración de borde superior tipo carpeta */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4a3728]"></div>

    <div className="flex flex-col md:flex-row gap-8">
        
        {/* Lado Izquierdo: Portada */}
        <div className="w-full md:w-1/3 shrink-0">
            <div className="border-4 border-[#ede0d4] shadow-lg rounded-sm overflow-hidden">
                <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>

        {/* Lado Derecho: Información */}
        <div className="w-full md:w-2/3 flex flex-col">
            
            {/* Título y Autor */}
            <div className="border-b border-[#e5d3b3] pb-4 mb-6">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2c241e] mb-2 leading-tight">
                    {book.title}
                </h1>
                <p className="font-serif italic text-xl text-[#8b5a2b]">
                    por {book.author}
                </p>
            </div>

            {/* Calificación / Metadatos 
            <div className="mb-6">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#a1887f] font-bold">
                    Calificación:
                </span>
                <p className="text-lg text-[#4a3728] font-serif">
                    {book.rating || "Sin calificar"} / 5
                </p>
            </div> */}

            {/* Observaciones: Estilo cuadro de texto antiguo */}
            <div className="flex-grow mb-8">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#a1887f] font-bold block mb-2">
                    Observaciones:
                </span>
                <div className="bg-[#faf7f2] border border-[#d7ccc8] p-4 text-[#4a3728] font-serif italic leading-relaxed min-h-[120px] rounded-sm">
                    {book.comments || "No hay observaciones registradas para este volumen."}
                </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex gap-4 mt-auto">
                <NavLink to={'/edit/'+book.id}>
                <button className="flex-1 bg-[#4a3728] text-[#fdfaf6] py-2 font-sans text-xs uppercase tracking-widest font-bold hover:bg-[#2c241e] transition-colors border border-[#4a3728]">
                    Editar Ficha
                </button>
                </NavLink>
                <button onClick={handleDelete} className="flex-1 bg-transparent text-[#8b0000] py-2 font-sans text-xs uppercase tracking-widest font-bold border border-[#8b0000]/30 hover:bg-[#8b0000] hover:text-white transition-all">
                    Eliminar
                </button>
            </div>

        </div>
    </div>
</div>
        </>
    )

}

export default BookCardDetail