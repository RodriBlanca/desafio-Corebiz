import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import emptyStar from '../../assets/red-empty-star.png';
import fullStar from '../../assets/red-full-star.png';

const ProductCard = ({title, price, image, stars, installments, listPrice, id}) => {

    const [cart, setCart] = useContext(CartContext);
    const [amount, setAmount] = useState(0);
    const defaultStars = [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar]

    useEffect(() => {
        const starsElement = document.getElementById(`card-${id}`).children[1].children[1].childNodes;
        if(stars) {
            for(let i = 0; i < stars; i++) {
                const star = starsElement[i];
                star.src = fullStar;
            }
        }
    }, [cart]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if(savedCart) {
            setCart(JSON.parse(savedCart));
        }
      }, []);
    
    const handleAdd = (e) => {
        e.preventDefault();

        setAmount(amount + 1);
        
        const product = {
            image,
            title,
            stars,
            price,
            id,
            amount
        }

        if(cart.length < 1) {
            const updatedCart = [...cart, {...product, amount: 1}];
            setCart([...cart, {...product, amount: 1}]);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            const uniqueProduct = cart.find(prod => prod.id === product.id);
            if(uniqueProduct) {
                const updatedCart = cart.map(prod => prod.id === product.id ? {...uniqueProduct, amount: uniqueProduct.amount + 1} : prod);
                setCart(updatedCart);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            } else {
                const updatedCart = [...cart, {...product, amount: 1}];
                setCart([...cart, {...product, amount: 1}]);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }
        } 
    }

  return (
    <div className='card' id={`card-${id}`}>
        <div className='card--image'>
            <img src={`${image}`} alt={title} />
        </div>
        <div className='card--information'>
            <p className='card--information__title'>{title}</p>
            <div className='card--information__stars'>
                {defaultStars.map(star => <img 
                                        key={star.id}
                                        src={star}
                                        alt="stars"
                                        className='star'
                                    />)}
            </div>
            <div>
                {
                    listPrice?
                    <span className='card--information__list'>{`de ${listPrice.toLocaleString('pt-BR')}`}</span>
                    :
                    null
                }
                <p className='card--information__price'>por ${price.toLocaleString('pt-BR')}</p>
                {
                    installments? 
                    <span className='card--information__installments'>{`ou em ${installments.quantity} de R$ ${installments.value.toLocaleString('pt-BR')}`}</span>
                    :
                    null
                }
            </div>
            <div className='card--buttons'>
                <button className='card--buttons__button' onClick={handleAdd} >COMPRAR</button>
            </div>
        </div>

    </div>
  )
}

export default ProductCard;