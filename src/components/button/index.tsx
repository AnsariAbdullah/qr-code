import React, { MouseEventHandler } from 'react';
import './button.scss';

type ButtonProps = {
	classname: string,
	btnText: string,
	clickFunc: MouseEventHandler
}

const Button = ({ classname, btnText, clickFunc }: ButtonProps) => (
	<button onClick={clickFunc} className={classname}>
		{btnText}
	</button>
)

export default Button;