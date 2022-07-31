import React from 'react';
// Components
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';
import Search from '../Search/Search';
import User from "../User/User";

const Header = () => {
  return (
    <header className='header'>
        <div className='header--options'>
            <Menu />
            <Logo />
            <Search />
            <div className='header--icons'>
              <User />
              <Cart />
            </div>
        </div>
        
    </header>
  )
}

export default Header;