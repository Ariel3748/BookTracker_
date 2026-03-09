import { useEffect, useState } from "react"
import { useParams } from "react-router"

function FromCRUD({flag=0}){

  if(flag==1){
  console.log("Hay que editar")
  }

  const formInicial = {
  title: '',
  author: '',
  image: '',
  comments: ''
  }

  const [load,setLoad] = useState(false)
  const[book,setBook] = useState('0')
  const [form, setForm] = useState(formInicial)

  const {id} = useParams()

  const titulo = flag ? "Formulario de Edicion" : "Registro de Nuevo Volumen"

    
      useEffect(()=>{
        const fetchBook = async ()=>{//Se puede exportar en un get
          try{
              const resp = await fetch('http://localhost:3000/books/' + id)
              console.log("fetch a ",'http://localhost:3000/books/' + id )
              const data = await resp.json()
              console.log(data)
              setLoad(false)
              setForm(data)
    
          }
          catch(err){
            console.log("Fallo la carga")
          }
        }
        if(flag){fetchBook()}
      },[])
    
    

      if(load){
        return(
        <div className="text-center py-20 font-serif text-[#8b5a2b]">Cargando...</div>
        )}








  const handleEditLibro = async (libroEditado) => {
    try {
        const fetchCarga = await fetch('http://localhost:3000/books/' + id,{
          method:'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(libroEditado)
      }) 
      console.log("Salio bien el put")
    } catch (error) {
      console.log(error)
    }
  }


  const handleAgregarLibro = async (nuevoLibro) => {
    try {
        const fetchCarga = await fetch('http://localhost:3000/books',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(nuevoLibro)
      }) 
      console.log("Salio bien el post")
    } catch (error) {
      console.log(error)
    }
  }

  const handleControlFormulario = (e)=>{

    console.log(e.target.name)
    console.log(e.target.value)

    const formularioModificado = {...form, [e.target.name]: e.target.value}
    console.log(formularioModificado)
    setForm(formularioModificado)
    
  }

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    console.log("funciona el preventDefault")
    !flag ? handleAgregarLibro(form) : handleEditLibro(form)
  }


  return(
      <>
        <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center p-4">
          <form 
            className="w-full max-w-lg bg-[#fdfaf6] border-2 border-[#d7ccc8] p-8 shadow-xl rounded-sm relative overflow-hidden"
            onSubmit={handleSubmitForm}
          >
            {/* Detalle decorativo: Líneas de "Ficha de Biblioteca" */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[#4a3728]"></div>
            
            <h2 className="font-serif text-2xl text-[#4a3728] mb-6 border-b border-[#e5d3b3] pb-2 italic font-bold">
              {titulo}
            </h2>

            <div className="flex flex-col gap-5">
              
              {/* Campo Título */}
              <div className="flex flex-col gap-1">
                <label htmlFor="title" className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold">
                  Título del Libro
                </label>
                <input 
                  type="text" name="title" id="title" placeholder="Ej: Rayuela" value={form.title} onChange={handleControlFormulario}
                  className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
                />
              </div>

              {/* Campo Autor */}
              <div className="flex flex-col gap-1">
                <label htmlFor="author" className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold">
                  Autor / Escritor
                </label>
                <input 
                  type="text" name="author" id="author" placeholder="Julio Cortázar" value={form.author} onChange={handleControlFormulario}
                  className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
                />
              </div>

              {/* Campo Portada (File) */}
              <div className="flex flex-col gap-1">
                <label htmlFor="image" className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold">
                  Imagen de Portada
                </label>
                <input 
                  type="text" name="image" id="image" placeholder="Link"value={form.image} onChange={handleControlFormulario}
                  className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
                />
              </div>

              {/* Campo Comentarios */}
              <div className="flex flex-col gap-1">
                <label htmlFor="comments" className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold">
                  Observaciones
                </label>
                <textarea 
                  name="comments" id="comments" rows="3" placeholder="Notas sobre la edición..." value={form.comments} onChange={handleControlFormulario}
                  className="bg-[#faf7f2] border border-[#d7ccc8] p-3 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif resize-none"
                />
              </div>

              {/* Botón Submit */}
              <button 
                type="submit"
                className="mt-4 w-full bg-[#4a3728] text-[#fdfaf6] py-3 font-sans text-sm uppercase tracking-[0.3em] font-bold hover:bg-[#2c241e] transition-all shadow-md active:scale-[0.98]"
              >
                Guardar en Colección
              </button>
            </div>
          </form>
        </div>
      </>
  )
}

export default FromCRUD