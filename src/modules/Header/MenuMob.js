import React, { useState, useRef, useEffect } from "react";
import {NavLink} from "react-router-dom";

export const MenuButton = ({handleClick, isMenuOpen}) => {
    const handle = () => {
        return isMenuOpen
    }
    return(
        <div id="header_menu_icon"
             className={isMenuOpen ? 'active' : ''}
             onClick={() => { handleClick(handle())}}
        >
            <span/>
            <span/>
            <span/>
        </div>
    )
}

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return null;
            }
            handler();
        };
        document.addEventListener('mousedown', listener);
    }, [ref, handler]);
};


export const MenuMobile = ({onHomeClick, onShopClick}) => {
    const [isMenuBlock, toggleBlock] = useState(false);
    const node = useRef();

    const toggleMenu = (value) => {
        toggleBlock(!value)
    }

    useOnClickOutside(node, () => {
        if (isMenuBlock) {
            toggleMenu(true)
        }
    });

    return(
        <div ref={node}>
            <MenuButton handleClick={toggleMenu} isMenuOpen={isMenuBlock} />
            <div className={isMenuBlock ? 'open_menu' : 'close_menu'}>
                <NavLink onClick={toggleMenu} to="/" >Главная</NavLink>
                <NavLink onClick={toggleMenu} to="/all">Все Книги</NavLink>
                <NavLink onClick={toggleMenu} to="/news">Новости</NavLink>
                <a onClick={() => {onHomeClick(true); toggleMenu(true)}}>Ввойти</a>
                <a onClick={() => {onShopClick(true); toggleMenu(true)}}>Корзина</a>
            </div>
        </div>
    )
}