import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

/**
 * Componente de registro de usuario.
 * @param {object} props - Propiedades del componente.
 * @param {function} props.onRegister - Función para manejar el registro del usuario y pasar el nombre.
 */
const Register = ({ onRegister }) => {
  // Estado para cada campo del formulario
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    // Verifica que los campos no estén vacíos antes de llamar a onRegister
    if (userName && email && password) {
      navigate("/home");
    } else {
      console.log("Por favor, completa todos los campos.");
    }
  };

  
  return (
    <div className="flex items-center justify-center min-h-screen py-12">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-zinc-900">
        <h2 className="text-2xl font-bold text-center">Regístrate</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300">Nombre de Usuario</label>
            <input
              type="text"
              className="block w-full px-3 py-2 mt-1 text-white rounded-md bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ej. usuario123"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Correo Electrónico</label>
            <input
              type="email"
              className="block w-full px-3 py-2 mt-1 text-white rounded-md bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Contraseña</label>
            <input
              type="password"
              className="block w-full px-3 py-2 mt-1 text-white rounded-md bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Contraseña segura"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-bold text-black transition duration-200 bg-green-500 rounded-md hover:bg-green-600"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
