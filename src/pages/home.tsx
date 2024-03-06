import { useEffect, useState } from 'react';
import '../styles/globals.css'

const Home = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          console.log("Token:", storedToken);
        }
      }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">BIENVENIDO A CUIDADO CON EL PERRO:</h1>
        <span className='token'>{token}</span>
        <p className="text-gray-600 mb-4 mt-4">¡Hola! Gracias por ser parte de nosotros. Aquí encontrarás todo lo que necesitas.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Usuarios</h2>
            <p className="text-gray-600">Administra los usuarios de tu aplicación.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Configuración</h2>
            <p className="text-gray-600">Personaliza la configuración de tu cuenta.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Estadísticas</h2>
            <p className="text-gray-600">Visualiza estadísticas y métricas importantes.</p>
          </div>
        </div>
      </div>
      <iframe
          width="100%"
          height="560"
          src="https://www.youtube.com/embed/vWaeF9V3dyk?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
    </div>
  );
};

export default Home;
