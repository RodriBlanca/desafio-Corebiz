import React, { useState, useRef } from 'react';
import NewsletterFormInput from '../NewsletterFormInput/NewsletterFormInput';

const NewsletterForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const mailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [sended, setSended] = useState(false);
  const nameInput = useRef();
  const emailInput = useRef();

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const resetForm = () => {
    setName('');
    setEmail('');
  }

  const handleNewsletter = (e) => {
    e.preventDefault();

    // Validar
    if(name.length > 0 && email.length > 0) {
      if(mailValidation.test(email)) {
        const newSuscriber = {
          name,
          email
        }

        fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
          method: 'POST',
          body: JSON.stringify(newSuscriber),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
        resetForm();
        nameInput.current.setAttribute("focused", "false");
        emailInput.current.setAttribute("focused", "false");

        setSended(true);

        setTimeout(() => {
          setSended(false);
      }, 5000)
      } else {
        console.log('Aun falta validar')
      }
    } else {
      console.log('todos los campos son obligatorios');
    }
  }

  return (
    <form className='newsletter--form' onSubmit={handleNewsletter}>
      <NewsletterFormInput 
        name="name"
        placeholder="Ingresa tu nombre"
        type="text"
        value={name}
        className="newsletter--form__input"
        id="name-input"
        reference={nameInput}
        sended={sended}
        pattern='^[A-Za-z]{3,16}$'
        errorMessage="Debe tener al menos 3 caracteres"
        onChange={handleName}
      />
      <NewsletterFormInput
        name="email"
        placeholder="Ingresa tu mail"
        type="text"
        value={email}
        className="newsletter--form__input"
        id="name-input"
        reference={emailInput}
        sended={sended}
        errorMessage="El email no es válido"
        onChange={handleEmail}
        pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"}
      />
        <div className='newsletter--button-container'>
            <button type='submit' className='newsletter--form__button' onClick={handleNewsletter} >Suscribirme</button>
            {sended && <p className='form--success-message'>El mensaje fue enviado exitosamente</p>}
        </div>
    </form>
  )
}

export default NewsletterForm;