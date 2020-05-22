import React from 'react';
import { Layout } from '../../ui';
import './style.scss';

const Loader = () => {
	return (
		<Layout align="center">
			<div className="loader-ring" />
		</Layout>
	);
};

export { Loader };
