import React from 'react'
import {NavLink} from "react-router-dom";
import {Layout} from "../../ui/Layout";
import {Logo} from "../../ui/Logo";
import home from '../../static/home.png'
import ShopEmblem from "../../widgets/ShopBasket.js/ShopEmblem";

function Header({onHomeClick, onShopClick}) {
    return(
        <header>
            <input type="checkbox" name="toggle" id="toggle"/>
            <label htmlFor="toggle"><div className="bars"/></label>
            <Layout extraClass='container header' direction='row' justify='space-around' align="center">
                <NavLink to='/'><Logo/> </NavLink>
                <nav className='nav_header'>
                    <NavLink to='/all'>Все Книги</NavLink>
                    <NavLink to='/news'>Новости</NavLink>
                </nav>
                <div className="header_btn">
                    <img src={home} onClick={() => onHomeClick(true)}  alt='home'/>
                    <ShopEmblem onShopClick={onShopClick} />
                </div>
            </Layout>
        </header>
    )
}

export {Header}