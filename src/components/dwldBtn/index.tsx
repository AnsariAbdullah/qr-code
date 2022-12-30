import React from 'react';
import './dwldBtn.scss'

type DwldBtnProps = {
	link: string
}

const DwldBtn = ({ link }: DwldBtnProps) => {
	const download = () => {
		let ele = document.createElement('a')
		let file = new Blob(
			[link], { type: 'image/*' }
		)
		ele.href = URL.createObjectURL(file)
		ele.download = 'qr.jpg';
		ele.click()
	}
	return (
		<div className='dld-btn'>
			<a
				href={link}
				download
				onClick={() => download}
			>
				Download your QR
			</a>
		</div>
	)
}

export default DwldBtn;