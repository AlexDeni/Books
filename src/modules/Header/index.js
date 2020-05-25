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

const Header = ({ onHomeClick, onShopClick }) => {
	const [statusMenu, setStatus] = useState(false);
	const changeStatusMenu = () => {
		setStatus(!statusMenu);
	};

	return (
		<header>
			{/*menu mobile*/}
			<label>
				<FontAwesomeIcon
					color="#F57904"
					icon={faBars}
					onClick={changeStatusMenu}
				/>
			</label>

			{/*Не используй тернарные выражение в рендере, выноси в отдельный компонент на верх и там через if*/}
			{statusMenu ? (
				<nav className="hidden-menu">
					<FontAwesomeIcon
						color="white"
						icon={faTimes}
						onClick={changeStatusMenu}
					/>
					{/*У тебя много дублирований - создай себе конфиг и через мап просто подставляй сюда данные*/}
					<NavLink exact onClick={changeStatusMenu} to="/">
						<FontAwesomeIcon color="white" icon={faHome} />
						Главная
					</NavLink>
					<NavLink onClick={changeStatusMenu} to="/all">
						<FontAwesomeIcon color="white" icon={faBookOpen} />
						Все Книги
					</NavLink>
					<NavLink onClick={changeStatusMenu} to="/news">
						<FontAwesomeIcon color="white" icon={faNewspaper} />
						Новости
					</NavLink>
					{/*По сюда промапь конфиг*/}
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
			) : (
				''
			)}
			{/*menu global*/}
			<Layout
				extraClass="container header"
				direction="row"
				justify="space-around"
				align="center"
			>
				<NavLink to="/">
					{/* Не надо делать {' '} - делай стилями отступы, это не валидно*/}
					<Logo />{' '}
				</NavLink>
				<nav className="nav_header">
					<NavLink to="/all">Все Книгии</NavLink>
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
		</header>
	);
};

export { Header };
