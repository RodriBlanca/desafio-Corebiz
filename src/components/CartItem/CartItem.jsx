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
        <td className='cart--item__image'>{<img src={image} alt={title} />}</td>
        <td className='cart--item__text'>{title}</td>
        <td className='cart--item__text'>{amount}</td>
        <td className='cart--item__text'>${price.toLocaleString('pt-BR')}</td>
        <td className='cart--item__delete' onClick={handleDelete}>
            <button className='cart--item__button'>X</button>
        </td>
    </tr>
  )
}

export default CartItem;