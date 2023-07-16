import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
function Header() {
  return (
    <div className='header'>
        <Link to="/">
        <img className="header__logo"
        src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" 
        alt=""
        />
        </Link>
        
        <div className='header__search'>
            <input type="text" className='header__searchInput' placeholder='Search Amazon'/>
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <div className='header__option'>
                    <span className='header_optionLineOne'>Hello</span>
                <span className='header_optionLineTwo'>Sign in</span>
            </div>
            <div className='header__option'>
                    <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
                    <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            <Link to="/checkout">
            <div className='header__basketIcon'>
                <ShoppingBasketIcon />
                <span className='header_optionLineTwo header__basketCount'>0</span>
            </div>
            </Link>

        </div>
    </div>
  )
}

export default Header