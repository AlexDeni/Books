import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Logo, Description } from '../../ui';
import ShopEmblem from '../../widgets/ShopBasket.js/ShopEmblem';
import {
	faHome,
	faBars,
	faTimes,
	faBookOpen,
	faNewspaper,
	faUserAlt,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from './config.json';


const MobileMenu = ({changeStatusMenu, onHomeClick, onShopClick, statusMenu}) => {
	if(statusMenu) {
		return (
			<nav className="hidden-menu">
				<FontAwesomeIcon
					color="white"
					icon={faTimes}
					onClick={changeStatusMenu}
				/>
				{config.mobileMenu.map((menu)=>{
						const { color, key, icon, name, path, exact } = menu;
						return(
							<NavLink key={key} exact={exact} onClick={changeStatusMenu} to={path}>
								<FontAwesomeIcon color={color} icon={icon}/>
								{name}
							</NavLink>
						)
					})
				}
				<Layout extraClass="header_phone">
					<Description color="dark" size="m">
						<FontAwesomeIcon size="1x" color="#f57904" icon={faPhoneAlt}/>{' '}
						380634576844
					</Description>
					<Description color="dark" size="m">
						<FontAwesomeIcon size="1x" color="#f57904" icon={faPhoneAlt}/>{' '}
						380634576844
					</Description>
				</Layout>
				<div className="hidden-menu_btn">
					<FontAwesomeIcon
						size="2x"
						color="white"
						onClick={() => onHomeClick(true)}
						icon={faUserAlt}
					/>
					<ShopEmblem
						size="2x"
						color="white"
						colorCount="white"
						onShopClick={onShopClick}
					/>
				</div>
			</nav>
		)
	}
	else return ''
}

const MenuGlobal = ({onHomeClick, onShopClick}) => {
	return (
		<Layout
			extraClass="container header"
			direction="row"
			justify="space-around"
			align="center"
		>
			<NavLink to="/">
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
	const [statusMenu, setStatus] = useState(false);
	const changeStatusMenu = () => {
		setStatus(!statusMenu);
	};

	return (
		<header>
			<label>
				<FontAwesomeIcon
					color="#F57904"
					icon={faBars}
					onClick={changeStatusMenu}
				/>
			</label>
			<MenuGlobal
				onShopClick={onShopClick}
				onHomeClick={onHomeClick}
			/>
			<MobileMenu
				statusMenu={statusMenu}
				changeStatusMenu={changeStatusMenu}
				onHomeClick={onHomeClick}
				onShopClick={onShopClick}
			/>
		</header>
	);
};

export { Header };
