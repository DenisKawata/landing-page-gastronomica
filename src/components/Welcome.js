import React from 'react';
import Portada from '../assets/img/portada.webp'

const Welcome = () => {
  return (
    <section className="relative mx-auto flex md:flex-row flex-col sm:flex-row items-center text-center">
      <div className="absolute top-1/3 p-10 bg-black bg-opacity-70 rounded">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-yellow-500">Bienvenidos</h1>
        <p className="py-4 text-white">Disfruta de la mejor comida en la ciudad</p>
      </div>
      <img className="bg-image h-screen w-screen object-cover " alt="imagen plato portada" src={Portada}></img>
    </section>
  );
};

export default Welcome;
