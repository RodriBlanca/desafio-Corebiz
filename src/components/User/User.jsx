import React from 'react';
import user from '../../assets/user.png';

const User = () => {
  return (
    <div className='user'>
        <img src={user} alt="My acount" className='user--image' />
        <p className='user--text'>Mi cuenta</p>
    </div>
  )
}

export default User;