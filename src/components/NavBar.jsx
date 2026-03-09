import { NavLink } from "react-router"

function NavBar(){


    return(
        <>
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-[#ede0d4] border-b-2 border-[#4a3728] shadow-sm mb-8 sticky top-0 z-50">
    
    <NavLink to="/">
    {/* Bienvenida: Estilo manuscrito/serif */}
    <h2 className="font-serif text-xl md:text-2xl text-[#2c241e] italic font-semibold tracking-tight mb-4 md:mb-0">
        BookTracker <span className="text-[#8b5a2b] not-italic"></span>
    </h2>
    </NavLink>

    {/* Enlace: Estilo etiqueta de cuero o botón de archivo */}
    <NavLink 
        to="/formCrud" 
        className="group relative inline-flex items-center px-6 py-2 bg-[#4a3728] text-[#fdfaf6] font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all hover:bg-[#5d4037] hover:shadow-lg active:translate-y-0.5"
    >
        <span className="mr-2 text-lg">+</span>
        Agregar libro!
        
        {/* Decoración sutil de borde interno */}
        <div className="absolute inset-1 border border-[#fdfaf6]/20 pointer-events-none"></div>
    </NavLink>

</nav>
        </>
    )


}

export default NavBar