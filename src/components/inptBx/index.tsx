import React from 'react';
import './input.scss'

type InptBxProps = {
	inputType: string,
	placeholderText: string
}

const InptBx = ({ inputType, placeholderText }: InptBxProps) => {
	return (
		<input
			type={inputType}
			placeholder={placeholderText}
		/>
	);
}

export default InptBx;