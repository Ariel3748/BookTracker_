import { useEffect, useState } from "react"
import BookCard from "./BookCard"


function BookContainer(){


  const [books, setBooks] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(()=>{
    const fetchBooks = async ()=>{//Se puede exportar en un get
      try{
          const resp = await fetch('http://localhost:3000/books')
          const data = await resp.json()

          setBooks(data)
          setLoad(false)

      }
      catch(err){
        console.log("Fallo la carga")
      }
    }
    fetchBooks()
  },[])

  if(load){return <div className="text-center py-20 font-serif text-[#8b5a2b]">Abriendo los archivos...</div>;}









    return(

        <>
            <div className="min-h-screen bg-[#faf7f2] p-4 md:p-8">
                

                <h2 className="text-[#4a3728] font-serif text-2xl mb-8 border-b border-[#d7ccc8] pb-2 max-w-6xl mx-auto">
                    Catálogo de Libros
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {books.map((b) => {
                        return <BookCard key={b.id} book={b}/>
                    })}
                </div>
            </div>
        </>
    )

}

export default BookContainer

