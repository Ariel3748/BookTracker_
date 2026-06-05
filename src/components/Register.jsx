import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import fetchHandler from "../../utils/fetch";
import Swal from "sweetalert2";

function Register() {
  const formInicial = {
    nombre: "",
    apellido: "",
    nickname: "",
    email: "",
    password: "",
    confirmarPassword: "",
  };

  const [form, setForm] = useState(formInicial);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validarForm = () => {
    if (!form.nombre) return "El nombre es obligatorio";
    if (!form.apellido) return "El apellido es obligatorio";
    if (!form.nickname) return "El nickname es obligatorio";
    if (!form.email) return "El email es obligatorio";
    if (!form.password) return "La contraseña es obligatoria";
    if (form.password !== form.confirmarPassword)
      return "Las contraseñas no coinciden";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validarForm();
    if (err) {
      return Swal.fire({
        title: "Error de validación",
        text: err,
        icon: "warning",
        confirmButtonColor: "#4a3728",
      });
    }

    // No mandamos confirmarPassword al backend
    const { confirmarPassword, ...datosAEnviar } = form;

    setLoading(true);
    try {
      const resp = await fetchHandler("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosAEnviar),
      });
      if (resp) {
        await Swal.fire({
          title: "¡Registro exitoso!",
          text: "Tu cuenta fue creada. Podés iniciar sesión.",
          icon: "success",
          confirmButtonColor: "#4a3728",
          confirmButtonText: "Ir al login",
        });
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo crear la cuenta. Intentá de nuevo.",
        icon: "error",
        confirmButtonColor: "#4a3728",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#fdfaf6] border-2 border-[#d7ccc8] p-8 shadow-xl rounded-sm relative overflow-hidden">

        {/* Borde superior decorativo */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#4a3728]"></div>

        {/* Encabezado */}
        <div className="mb-8 border-b border-[#e5d3b3] pb-4">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#a1887f] font-bold mb-1">
            Nuevo lector
          </p>
          <h2 className="font-serif text-2xl text-[#4a3728] italic font-bold">
            Crear Cuenta
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Nombre y Apellido en fila */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="nombre"
                className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
              >
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Juan"
                value={form.nombre}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="apellido"
                className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
              >
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                id="apellido"
                placeholder="Pérez"
                value={form.apellido}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
              />
            </div>
          </div>

          {/* Nickname */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="nickname"
              className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
            >
              Nickname
            </label>
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="juanp123"
              value={form.nickname}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="juan@mail.com"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
            />
          </div>

          {/* Contraseña */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
            />
          </div>

          {/* Confirmar contraseña */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirmarPassword"
              className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmarPassword"
              id="confirmarPassword"
              placeholder="••••••••"
              value={form.confirmarPassword}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-[#d7ccc8] py-2 focus:border-[#4a3728] outline-none transition-colors text-[#2c241e] font-serif placeholder:text-[#d7ccc8]/80"
            />
          </div>

          {/* Botón submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-[#4a3728] text-[#fdfaf6] py-3 font-sans text-sm uppercase tracking-[0.3em] font-bold hover:bg-[#2c241e] transition-all shadow-md active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Creando cuenta..." : "Registrarme"}
          </button>

          {/* Link a login */}
          <p className="text-center font-serif text-sm text-[#a1887f] italic">
            ¿Ya tenés cuenta?{" "}
            <NavLink
              to="/login"
              className="text-[#8b5a2b] underline underline-offset-2 hover:text-[#4a3728] transition-colors not-italic font-bold"
            >
              Iniciá sesión
            </NavLink>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Register;
