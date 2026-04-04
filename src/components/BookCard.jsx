import { NavLink } from "react-router";

function BookCard({ book }) {


  return (
    <div
      key={book.id}
      className="bg-[#fdfaf6] border border-[#d7ccc8] border-l-[6px] border-l-[#4a3728] p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center sm:text-left sm:items-start rounded-r-md"
    >
      {/* Portada: Ajustada para que sea responsive */}
      <img
        src={book.image}
        alt={"portada " + book.title}
        className="w-full h-48 object-cover mb-4 rounded-sm shadow-sm border border-[#ede0d4]"
      />

      {/* Título: Café oscuro, fuente con serifa */}
      <h3 className="font-serif text-lg font-bold text-[#2c241e] leading-tight mb-1 line-clamp-2">
        {book.title}
      </h3>

      {/* Autor: Beige oscuro / Café claro */}
      <p className="text-[#8b5a2b] text-sm italic mb-4">{book.author}</p>

      {/* Botón: Estilo etiqueta de archivo */}
      <NavLink className="mt-auto w-full" to={'/book/'+book.id}>
        <button className="w-full py-2 bg-[#e5d3b3] hover:bg-[#d7ccc8] text-[#4a3728] text-xs uppercase tracking-widest font-bold transition-colors border border-[#c4a484]/30">
          Ver más
        </button>
      </NavLink>
    </div>
  );
}
export default BookCard;
