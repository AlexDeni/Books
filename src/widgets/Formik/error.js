import React from 'react';
import { ErrorMessage } from 'formik';

const Error = ({ touched, message, name }) => {
	if (!touched) {
		return <div className="form-message invalid">&nbsp;</div>;
	}
	if (message) {
		return (
			<div className="form-message invalid">
				<ErrorMessage name={name} />
			</div>
		);
	}
	return <div className="form-message valid">all good</div>;
};

export default Error;
