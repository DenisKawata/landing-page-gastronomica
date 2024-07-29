import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> 
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white"><Link to="/">Bienvenida</Link></a>
          <a className="mr-5 hover:text-white"><Link to="/catalog">Catálogo</Link></a>
          <a className="mr-5 hover:text-white"><Link to="/contact">Contacto</Link></a>
        </nav>
      </div> 
    </header>
  );
};

export default Navbar;
