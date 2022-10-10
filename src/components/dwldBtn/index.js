import React from 'react';

const DwldBtn = ({ link }) => {
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
				Click here to download your QR
			</a>
		</div>
	);
}

export default DwldBtn;