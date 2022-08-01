import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({image, title, amount, price, id}) => {

    const [cart, setCart] = useContext(CartContext);

    const handleDelete = (e) => {

        e.preventDefault();

        const filterItems = cart.filter(prod => prod.id !== id);

        setCart(filterItems);
        localStorage.setItem('cart', JSON.stringify(filterItems));
    }

  return (
    <tr className='cart--item'>
        <th className='cart--item__image'>{<img src={image} alt={title} />}</th>
        <th className='cart--item__text'>{title}</th>
        <th className='cart--item__text'>{amount}</th>
        <th className='cart--item__text'>${price.toLocaleString('pt-BR')}</th>
        <th className='cart--item__delete' onClick={handleDelete}>
            <button className='cart--item__button'>X</button>
        </th>
    </tr>
  )
}

export default CartItem;