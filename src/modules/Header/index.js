import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import {Layout} from "../../ui/Layout";
import {Logo} from "../../ui/Logo";
import ShopEmblem from "../../widgets/ShopBasket.js/ShopEmblem";
import { faHome, faBars, faTimes, faBookOpen, faNewspaper, faUserAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Description} from "../../ui/Description";

class Header extends Component{
    constructor() {
        super();
        this.state = {
            statusMenu: false
        };
        this.changeStatusMenu = this.changeStatusMenu.bind(this)
    }
    changeStatusMenu(){
        this.setState({
            statusMenu: !this.state.statusMenu
        })
    }
    render() {
        const {onHomeClick, onShopClick} = this.props;
        const {statusMenu} = this.state;
        return(
            <header>
                {/*menu mobile*/}
                <label>
                    <FontAwesomeIcon color="#F57904" icon={faBars} onClick={this.changeStatusMenu} />
                </label>
                {statusMenu ?
                    <nav className="hidden-menu">
                        <FontAwesomeIcon color="white" icon={faTimes} onClick={this.changeStatusMenu} />
                        <NavLink exact  onClick={this.changeStatusMenu} to='/'><FontAwesomeIcon color="white" icon={faHome} />Главная</NavLink>
                        <NavLink onClick={this.changeStatusMenu} to='/all'><FontAwesomeIcon color="white" icon={faBookOpen} />Все Книги</NavLink>
                        <NavLink onClick={this.changeStatusMenu} to='/news'><FontAwesomeIcon color="white" icon={faNewspaper} />Новости</NavLink>
                        <Layout extraClass="header_phone">
                            <Description color='dark' size='m'><FontAwesomeIcon size="1x" color="#f57904" icon={faPhoneAlt}/> 380634576844</Description>
                            <Description color='dark' size='m'><FontAwesomeIcon size="1x" color="#f57904" icon={faPhoneAlt}/> 380634576844</Description>
                        </Layout>
                        <div className="hidden-menu_btn">
                            <FontAwesomeIcon size="2x" color="white" onClick={() => onHomeClick(true)} icon={faUserAlt}/>
                            <ShopEmblem size="2x" color="white" colorCount="white" onShopClick={onShopClick}/>
                        </div>
                    </nav>
                    : ''
                }
                {/*menu global*/}
                <Layout extraClass='container header' direction='row' justify='space-around' align="center">
                    <NavLink to='/'><Logo/> </NavLink>
                    <nav className='nav_header'>
                        <NavLink to='/all'>Все Книги</NavLink>
                        <NavLink to='/news'>Новости</NavLink>
                    </nav>
                    <Layout extraClass="header_phone">
                        <Description color='dark' size='m'><FontAwesomeIcon size="1x" color="#f57904" icon={faPhoneAlt}/> 380634576844</Description>
                        <Description color='dark' size='m'><FontAwesomeIcon size="1x" color="#f57904" icon={faPhoneAlt}/> 380634576844</Description>
                    </Layout>
                    <Layout direction='row' extraClass="header_btn">
                        <FontAwesomeIcon size="2x"  color="#113d54"  onClick={() => onHomeClick(true)} icon={faUserAlt} />
                        <ShopEmblem color="#113d54" colorCount="dark" size="2x" onShopClick={onShopClick} />
                    </Layout>
                </Layout>
            </header>
        )
    }
}

export {Header}