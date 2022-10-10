import React, { useState } from 'react';
import QRCode from 'qrcode';
import DwldBtn from './components/dwldBtn';

{/* add debounce */ }

const App = () => {
	const [enteredString, setEnteredString] = useState('')
	const [qrLink, setQrLink] = useState('')
	const [hideQR, setHideQR] = useState(true)

	const handleChange = (e) => {
		setEnteredString(e.target.value);
		console.log(enteredString)
	}

	const handleClick = (e) => {
		e.preventDefault();
		if (enteredString !== '') {
			QRCode.toDataURL(enteredString)
			.then(url => {
				setQrLink(url)
			})
			.catch(err => {
				alert(err)
			})
			setHideQR(false)
		} else {
			alert('enter text please')
		}
	}

	const generateNew = (e) => {
		e.preventDefault();
		setHideQR(true)
		setQrLink('');
		setEnteredString('')
	}

	return (
		<div className='qr-controll-wrapper'>
			{hideQR ?
				// input block
				<div>
					<input 
						type='text'
						onChange={e => handleChange(e)}
					/>					
					<button
						onClick={e => handleClick(e)}
					>
						Generate QR
					</button>
				</div> :

				// QR block
				<div>
					{qrLink !== '' ?
						<>
							<img src={qrLink} /> 
							<DwldBtn link={qrLink} />
						</>
						: null
					}
					<button
						className='cancel-btn'
						onClick={e => generateNew(e)}
					>
						Generate another QR
					</button>
				</div>
			}
		</div>
	);
}

export default App;