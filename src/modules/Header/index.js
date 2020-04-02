import React from 'react'
import {NavLink} from "react-router-dom";
import {Layout} from "../../ui/Layout";
import {Description} from "../../ui/Description";
import {Button} from "../../ui/Button";
import ShoppingCart from "../../widgets/ShoppingCart.js";

function Header({onButtonClick}) {
    return(
        <header>
            <Layout extraClass='container'>
                <Layout direction='row' justify='space-around' align="center">
                    <Description extraClass='logo'><NavLink to='/'>Горький</NavLink></Description>
                    <nav className='nav_header'>
                        <NavLink to='/all'>Все Книги</NavLink>
                        <NavLink to='/news'>Новости</NavLink>
                    </nav>
                    <Button onClick={() => onButtonClick(true)}>Ввойти</Button>
                    <ShoppingCart/>
                </Layout>
            </Layout>
        </header>
    )
}

export {Header}