import React from 'react';
import FooterButton from '../FooterButton/FooterButton';
import contactIcon from '../../assets/contacto.svg';
import consultantIcon from '../../assets/consultor.svg';
import corebizLogo from '../../assets/site-logo-corebiz-preto-cinza.svg';
import vtexLogo from '../../assets/VTEX_white_RGB.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <h4 className='footer--title'>Ubicación</h4>
        <ul className='footer--information'>
          <li className='footer--information__item'>Avenida Andrómeda, 2000. Bloco 6 e 8</li>
          <li className='footer--information__item'>Alphavile SP</li>
          <li className='footer--information__item'>brasil@corebiz.ag</li>
          <li className='footer--information__item'>+55 11 3090 1039</li>
        </ul>
      </div>
      <div className='footer--buttons'>
        <FooterButton icon={contactIcon} text="Contáctanos" />
        <FooterButton icon={consultantIcon} text="Habla con un consultor" />
      </div>
      <div className='footer--brands'>
        <div className='brand footer--corebiz'>
          <a href='https://www.corebiz.ag/en/' target='_blank' rel='noreferrer'>
            <img src={corebizLogo} alt="Corebiz" className='brand--image' />
          </a>
        </div>
        <div className='brand footer--vtex'>
          <a href='https://developers.vtex.com/' target='_blank' rel='noreferrer'>
            <img src={vtexLogo} alt="Vtex" className='brand--image' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;