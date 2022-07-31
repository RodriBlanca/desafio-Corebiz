import React, { useEffect, useState } from 'react';
// Pages
import Home from './pages/Home';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Contexts
import { CartContextProvider } from './contexts/CartContext';

const Corebiz = () => {

  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((response) => response.json())
      .catch((err) => console.log(err))
      .then((data) => setData(data))
  }, [])

  return (
    <div className='corebiz'>
        <CartContextProvider>
          <Header />
          <Home data={data} />
          <Footer />
        </CartContextProvider>
    </div>
  )
}

export default Corebiz;