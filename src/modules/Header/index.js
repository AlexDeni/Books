import React from 'react'
import {NavLink} from "react-router-dom";
import {Layout} from "../../ui/Layout";
import {Logo} from "../../ui/Logo";
import ShopEmblem from "../../widgets/ShopBasket.js/ShopEmblem";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header({onHomeClick, onShopClick}) {
    return(
        <header>
            <input type="checkbox" name="toggle" id="toggle"/>
            <label htmlFor="toggle"><FontAwesomeIcon  size="2x" icon={faBars} /></label>
            <Layout extraClass='container header' direction='row' justify='space-around' align="center">
                <NavLink to='/'><Logo/> </NavLink>
                <nav className='nav_header'>
                    <NavLink className="mainLink" to='/'>Главная</NavLink>
                    <NavLink to='/all'>Все Книги</NavLink>
                    <NavLink to='/news'>Новости</NavLink>
                </nav>
                <div className="header_btn">
                    <FontAwesomeIcon size="3x"  color="#113d54"  onClick={() => onHomeClick(true)} icon={faHome} />
                    <ShopEmblem onShopClick={onShopClick} />
                </div>
            </Layout>
        </header>
    )
}

export {Header}