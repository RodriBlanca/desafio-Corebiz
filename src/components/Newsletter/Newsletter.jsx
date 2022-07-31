import React from 'react';
import NewsletterForm from '../NewsletterForm/NewsletterForm';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h3 className='newsletter--title'>¡Únete a nuestras novedades y promociones!</h3>
        <NewsletterForm />
    </div>
  )
}

export default Newsletter;