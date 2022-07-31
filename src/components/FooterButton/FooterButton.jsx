import React from 'react';

const FooterButton = ({icon, text}) => {
  return (
    <button className='footer--buttons__button'>
        <img src={icon} alt={text}/>
        {text}
    </button>
  )
}

export default FooterButton;