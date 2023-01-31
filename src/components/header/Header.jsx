import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import logo from '../../assets/dafiti.png'
import './Header.css'

function Header() {
    return (
        <div className="header">

            <div>
                <MenuIcon />
            </div>
            <div className='logo'>
                <img src={logo} alt='logo' width={'20%'} />
            </div>
            <FavoriteIcon />
            <Badge badgeContent={1} color="primary">
                <ShoppingCartIcon />
            </Badge>

        </div>

    )
}

export default Header