import React from 'react';
import { connect } from 'react-redux';
import { Description, Layout } from '../../../ui';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShopEmblem = ({ count, onShopClick, color, size, colorCount }) => {
	return (
		<Layout extraClass="shop_emblem" align="center">
			<FontAwesomeIcon
				size={size}
				color={color}
				onClick={() => onShopClick(true)}
				icon={faShoppingBasket}
			/>
			<Description size="l" color={colorCount} extraClass="countCart">
				{count}
			</Description>
		</Layout>
	);
};

function mapStateToProps(state) {
	return {
		count: state.orderBooks.count,
	};
}

export default connect(mapStateToProps)(ShopEmblem);
