import React, { useContext } from 'react';
import cartIcon from '../../assets/cart.png';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

  const [cart,] = useContext(CartContext);

  return (
    <>
      <input type={'checkbox'} className="cart--toggle" id='cart--button' />
      <label htmlFor='cart--button' className='cart--label'>
        <img src={cartIcon} alt="Carrito de compras" className='cart--label__image' />
        <span className='cart--label__amount'>{cart.length}</span>
      </label>
      <div className='cart--container'>
        {
          cart.length === 0 ?
          <p>¡Tu carrito de compras está vacío!<br/>Prueba agregando algún producto</p>
          :
          <div className='table-container'>
            <table className='table'>
              <thead className='table--head'>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className='table--body'>
                {cart.map(item => {
                  return(
                    <CartItem 
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      amount={item.amount}
                      price={item.price}
                      id={item.id}
                    />
                  )
                })}
              </tbody>
            </table>
          </div>
        }
      </div>
    </>
  )
}

export default Cart;