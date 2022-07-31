import React from 'react';
import banner from '../../assets/banner-mobile.jpg';

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <img src={banner} alt="banner" />  
      </div>
      <div className='banner--text'>
        <p>¡Hola! ¿Qué es lo que buscas?</p>
        <h1>Crear o migrar tu comercio electrónico?</h1>
      </div>
    </>
  )
}

export default Banner;