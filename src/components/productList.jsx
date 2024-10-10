import React, { useEffect } from 'react';
import './ProductList.css'; // Importa los estilos personalizados

const ProductList = () => {
  useEffect(() => {
    // Insertar el contenedor de Ecwid en el div
    const ecwidScript = document.createElement('script');
    ecwidScript.type = 'text/javascript';
    ecwidScript.src = 'https://app.ecwid.com/script.js?109051751&data_platform=code&data_date=2024-10-08';
    ecwidScript.charset = 'utf-8';
    ecwidScript.setAttribute('data-cfasync', 'false');

    document.body.appendChild(ecwidScript);

    ecwidScript.onload = () => {
      // Ejecutar la función de Ecwid para cargar la tienda
      if (window.xProductBrowser) {
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "id=my-store-109051751"
        );
      }
    };

    return () => {
      // Limpiar el script si el componente se desmonta
      document.body.removeChild(ecwidScript);
    };
  }, []);

  return (
    <div className='container'>
      {/* Contenedor para la tienda de Ecwid */}
      <div id="my-store-109051751"></div>
    </div>
  );
};

export default ProductList;
