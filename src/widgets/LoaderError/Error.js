import React from 'react';
import { Layout } from '../../ui';

const ERROR = {
	default: 'Произошла ошибка, зайдите позже',
};

// шо за запись)
export default function ErrorText({ errorText }) {
	if (!errorText) {
		return null;
	} else {
		return <Layout extraClass="container listBooks">{ERROR['default']}</Layout>;
	}
}
