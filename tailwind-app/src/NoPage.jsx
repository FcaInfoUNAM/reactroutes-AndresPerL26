// src/components/NoPage.jsx
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
      <p className="mt-4">La ruta a la que intentas acceder no existe.</p>
      <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NoPage;