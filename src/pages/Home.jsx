import React from 'react';
// Components
import Banner from '../components/Banner/Banner';
import Newsletter from '../components/Newsletter/Newsletter';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer';

const Home = ({data}) => {
  return (
    <main className='home'>
        <Banner />
        <ProductsContainer data={data} />
        <Newsletter />
    </main>
  )
}

export default Home;