import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Layout, Button, Description } from '../../ui';
import cx from 'classnames';

const Modal = ({
	children,
	title,
	isModalOpen,
	onModalClick,
	size,
	extraClass,
}) => {
	if (!isModalOpen) {
		return null;
	}

	const className = cx('modal_body', `modal_body__size_${size}`, extraClass);

	return (
		<Layout justify="center" align="center">
			<div className="modal">
				<div className={className}>
					<Layout extraClass="modal_header" direction="row">
						<Description color="dark" size="l">
							{title}
						</Description>
						<Button
							bStyle="none"
							onClick={() => onModalClick(false)}
							extraClass="modal_close_icon"
						/>
					</Layout>
					<Layout extraClass="modal_item" align="center" justify="center">
						{children}
					</Layout>
				</div>
			</div>
		</Layout>
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	isModalOpen: PropTypes.bool,
	size: PropTypes.oneOf(['s', 'm']),
	title: PropTypes.node.isRequired,
	extraClass: PropTypes.string,
};

Modal.defaultProps = {
	isModalOpen: false,
	title: '',
	size: 's',
};

export { Modal };
