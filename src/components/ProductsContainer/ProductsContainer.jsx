import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import arrow from '../../assets/arrow-down-sign-to-navigate.png';

const ProductsContainer = ({data}) => {
  return (
    <div className='products-container'>
        <div className='slider'>
          <p className='products-container--title'>Más Vendidos</p>
          <button className='slider--control__arrow previous'><img src={arrow} alt="flecha de previo" /></button>
          <button className='slider--control__arrow next'><img src={arrow} alt="flecha de siguiente" /></button>
          <div className='products-container--products'>
            {data?.map((product) => {
              return(<ProductCard 
                        key={product.productId}
                        title={product.productName} 
                        price={product.price}
                        image={product.imageUrl}
                        stars={product.stars}
                        installments={product.installments[0]}
                        listPrice={product.listPrice}
                        id={product.productId}
                    />);
            })}
          </div>
          <div className='slider--controls'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    </div>
  )
}

export default ProductsContainer;