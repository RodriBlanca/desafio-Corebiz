import React from 'react';

const Menu = () => {
  return (
    <>
      <input className='menu' type='checkbox' id='menu'/>
      <label className='menu--label' htmlFor='menu'></label>
      <nav className='menu--container'>
        <ul>
          {/* Agregar clase a los links luego de importarlos */}
          <li>Inicio</li>
          <li>Productos</li>
          <li>Sobre Nosotros</li>
        </ul>
      </nav>
    </>
  )
}

export default Menu;