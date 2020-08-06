import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Logo, Description } from '../../ui';
import ShopEmblem from '../../widgets/ShopBasket.js/ShopEmblem';
import {MenuMobile} from "./MenuMob"
import {
	faUserAlt,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuGlobal = ({onHomeClick, onShopClick}) => {
	return (
		<Layout
			extraClass="container header"
			direction="row"
			justify="space-around"
			align="center"
		>
			<NavLink to="/" className="logo_link">
				<Logo />
			</NavLink>
			<nav className="nav_header">
				<NavLink to="/all">Все Книги</NavLink>
				<NavLink to="/news">Новости</NavLink>
			</nav>
			<Layout extraClass="header_phone">
				<Description color="dark" size="m">
					<FontAwesomeIcon size="1x" color="#f57904" icon={faPhoneAlt} />{' '}
					380634576844
				</Description>
				<Description color="dark" size="m">
					<FontAwesomeIcon size="1x" color="#f57904" icon={faPhoneAlt} />{' '}
					380634576844
				</Description>
			</Layout>
			<Layout direction="row" extraClass="header_btn">
				<FontAwesomeIcon
					size="2x"
					color="#113d54"
					onClick={() => onHomeClick(true)}
					icon={faUserAlt}
				/>
				<ShopEmblem
					color="#113d54"
					colorCount="dark"
					size="2x"
					onShopClick={onShopClick}
				/>
			</Layout>
		</Layout>
	)
}



const Header = ({ onHomeClick, onShopClick }) => {

	return (
		<header>
			<MenuMobile
				onHomeClick={onHomeClick}
				onShopClick={onShopClick}
			/>
			<MenuGlobal
				onShopClick={onShopClick}
				onHomeClick={onHomeClick}
			/>
		</header>
	);
};

export { Header };
