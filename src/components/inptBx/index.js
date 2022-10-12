import React from 'react';
import './input.scss'

const InptBx = ({ inputType, placeholderText }) => {
	return (
		<input
			type={inputType}
			placeholder={placeholderText}
		/>
	);
}

export default InptBx;