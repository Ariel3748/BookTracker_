import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import fetchHandler from "../../utils/fetch";
import Swal from "sweetalert2";

function Login() {
  const [form, setForm] = useState({ user: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.user || !form.password) {
      return Swal.fire({
        title: "Campos incompletos",
        text: "Por favor completá todos los campos.",
        icon: "warning",
        confirmButtonColor: "#4a3728",
      });
    }
    setLoading(true);
    try {
      const resp = await fetchHandler("http://localhost:3000/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (resp) {
        await Swal.fire({
          title: "¡Bienvenido!",
          text: "Sesión iniciada correctamente.",
          icon: "success",
          confirmButtonColor: "#4a3728",
          confirmButtonText: "Continuar",
        });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Email o contraseña incorrectos.",
        icon: "error",
        confirmButtonColor: "#4a3728",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#fdfaf6] border-2 border-[#d7ccc8] p-8 shadow-xl rounded-sm relative overflow-hidden">

        {/* Borde superior decorativo */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#4a3728]"></div>

        {/* Encabezado */}
        <div className="mb-8 border-b border-[#e5d3b3] pb-4">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#a1887f] font-bold mb-1">
            Acceso al sistema
          </p>
          <h2 className="font-serif text-2xl text-[#4a3728] italic font-bold">
            Iniciar Sesión
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="user"
              className="font-sans text-xs uppercase tracking-widest text-[#8b5a2b] font-bold"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              name="user"
              id="user"
              placeholder="usuario@mail.com"
              value={form.user}
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

          {/* Botón submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-[#4a3728] text-[#fdfaf6] py-3 font-sans text-sm uppercase tracking-[0.3em] font-bold hover:bg-[#2c241e] transition-all shadow-md active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Verificando..." : "Ingresar"}
          </button>

          {/* Link a registro */}
          <p className="text-center font-serif text-sm text-[#a1887f] italic">
            ¿No tenés cuenta?{" "}
            <NavLink
              to="/register"
              className="text-[#8b5a2b] underline underline-offset-2 hover:text-[#4a3728] transition-colors not-italic font-bold"
            >
              Registrate aquí
            </NavLink>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;
