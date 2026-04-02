import { useEffect, useState } from "react"
import BookCard from "./BookCard"
import fetchHandler from "../../utils/fetch"


function BookContainer(){


  const [books, setBooks] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(()=>{
    const getBooks = async () => {
        try {
            const data = await fetchHandler('http://localhost:3000/books/')
            if(data){
                setBooks(data)
            }
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoad(false)
        }
    }
    getBooks()
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

