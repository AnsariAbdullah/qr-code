import React from 'react';
import './button.scss';

const Button = ({ classname, btnText, clickFunc }) => {
	return (
		<button
			className={classname}
			onClick={clickFunc}
		>
			{btnText}
		</button>
	);
}

export default Button;