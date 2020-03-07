import React from 'react'
import {Link} from "react-router-dom";
import {Layout} from "../../ui/Layout";
import {Description} from "../../ui/Description";
import {Button} from "../../ui/Button";
import {Basket} from "../../widgets/Basket.js/Basket";

function Header({onButtonClick}) {
    return(
        <Layout extraClass='header'>
            <Layout extraClass='container'>
                <Layout direction='row' justify='spaceAround' align='center'>
                    <Description extraClass='logo'><Link to='/'>Горький</Link></Description>
                        <nav >
                            <ul className='nav-header'>
                                <li><Link to='/all'>Все Книги</Link></li>
                                <li><Link to='/news'>Новости</Link></li>
                                <li><Link to='/login'>Регистрация</Link></li>
                            </ul>
                        </nav>
                    <Button onClick={() => onButtonClick(true)}>Ввойти</Button>
                    <Basket/>
                </Layout>
            </Layout>
        </Layout>
    )
}

export {Header}