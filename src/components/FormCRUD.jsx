import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchHandler from "../../utils/fetch";
import LibrosContext from "../context/librosContext";
import { StarRating } from "react-flexible-star-rating";
import Swal from "sweetalert2";

function FromCRUD({ flag = 0 }) {
  const formInicial = {
    title: "",
    author: "",
    image: "",
    comments: "",
    status:"",
    rating: "",
  };

  const [load, setLoad] = useState(true);
  const [book, setBook] = useState("0");
  const [form, setForm] = useState(formInicial);
  const { id } = useParams();
  const { handleAgregarLibro, handleEditLibro } = useContext(LibrosContext);
  const [rating, setRating] = useState(0);
  const [initialValue, setInitialValue] = useState(0);

  const titulo = flag ? "Formulario de Edicion" : "Registro de Nuevo Volumen";

  useEffect(() => {
    const fetchBook2 = async () => {
      try {
        const data = await fetchHandler("http://localhost:3000/books/" + id);
        if (data) {
          setForm(data);
          setInitialValue(data.rating);
          setLoad(false)
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (flag) {
      fetchBook2();
    }
    else{
      setLoad(false)
    }
  }, []);

  if (load) {
    return (
      <div className="text-center py-20 font-serif text-[#8b5a2b]">
        Cargando...
      </div>
    );
  }

    const validarForm = ()=>{
    if(!form.title){
      return ("El titulo es necesario")
    }
    if(!form.author){
      return("El autor es necesario")
    }
  }

  const handleControlFormulario = (e) => {
    const formularioModificado = {
      ...form,
      [e.target.name]: e.target.value,
      rating: rating,
    };
    setForm(formularioModificado);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const err = validarForm()
    if(err){
      Swal.fire(err)
    }
    else{
      !flag ? handleAgregarLibro(form) : handleEditLibro(form, id);
    }
    console.log(form);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    const formularioModificado = { ...form, rating: newRating };
    setForm(formularioModificado);
  };



  return (
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
              <label
                htmlFor="title"
                className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
              >
                Título del Libro
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Ej: Rayuela"
                value={form.title}
                onChange={handleControlFormulario}
                className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
              />
            </div>

            {/* Campo Autor */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="author"
                className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
              >
                Autor / Escritor
              </label>
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Julio Cortázar"
                value={form.author}
                onChange={handleControlFormulario}
                className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
              />
            </div>

            {/* Campo Portada (File) */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="image"
                className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
              >
                Imagen de Portada
              </label>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Link"
                value={form.image}
                onChange={handleControlFormulario}
                className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
              />
            </div>

            {/* Campo Comentarios */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="comments"
                className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
              >
                Observaciones
              </label>
              <textarea
                name="comments"
                id="comments"
                rows="3"
                placeholder="Notas sobre la edición..."
                value={form.comments}
                onChange={handleControlFormulario}
                className="bg-[#faf7f2] border border-[#d7ccc8] p-3 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif resize-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="status"
                className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
              >
                Estado de Lectura
              </label>
              <select
                name="status"
                id="status"
                value={form.status}
                onChange={handleControlFormulario}
                className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif cursor-pointer appearance-none"
              >
                <option value="por-leer">Por leer</option>
                <option value="en-lectura">En lectura</option>
                <option value="finalizado">Finalizado</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold">
                Estrellas
              </p>
              <StarRating
                id="stars"
                dimension={15}
                isHalfRatingEnabled={true}
                initialRating={initialValue}
                onRatingChange={(cal) => {
                  handleRatingChange(cal);
                }}
              ></StarRating>
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
  );
}

export default FromCRUD;
