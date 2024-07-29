import React from 'react';
import Producto1 from '../assets/img/img-1.webp'
import Producto2 from '../assets/img/img-4.webp'
import Producto3 from '../assets/img/img-5.webp'
import Producto4 from '../assets/img/img-6.webp'

const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', img: Producto1 },
  { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', img: Producto2 },
  { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', img: Producto3 },
  { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', img: Producto4 },  
  // Agrega más productos según sea necesario
];

const Catalog = () => {
  return (
    <section className="px-5 py-10 mx-auto flex flex-col text-center w-full text-gray-400 bg-gray-900">
      <h2 className="text-2xl font-medium title-font mb-4 text-white">Catálogo de Productos</h2>
      <ul className="flex-col items-center sm:justify-start justify-center text-center sm:text-left mt-4 grid grid-cols-2 gap-4">
        {products.map(product => (
          <li key={product.id} className="container px-5 py-5 mx-auto flex flex-wrap bg-white bg-opacity-5 rounded shadow">
            <img alt={product.name} src={product.img} class="rounded-lg w-48 h-60 object-cover object-center sm:mb-0 mb-4"></img> 
            <h3 className="flex-grow sm:pl-8 title-font font-medium text-lg text-white">{product.name}</h3>
            <p className="flex-grow sm:pl-8 text-gray-500 mb-4">{product.description}</p>   
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catalog;

