import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';
import DwldBtn from './components/dwldBtn';
import Heading from './components/heading';

{/* add debounce */ }

const App = () => {
	const [enteredString, setEnteredString] = useState('')
	const [qrLink, setQrLink] = useState('')
	const [hideQR, setHideQR] = useState(true)

	const inputBox = useRef(null)

	// on page load useEffect to bring textbox into focus
	useEffect(()=>{
		inputBox.current.focus()
	}, [])

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
		e.preventDefault()
		setHideQR(true)
		setQrLink('');
		setEnteredString('')
	}

	return (
		<>
			<Heading />
			<div className='app'>
				{hideQR ?
					// input block
					<div className='input-block card'>
						<input
							type='text'
							placeholder='Enter the URL'
							onChange={e => handleChange(e)}
							ref={inputBox}
							onKeyUp={e => {
								if (e.key === 'Enter' || e.key === 13) {
									handleClick(e)
								}
							}}
						/>
						<button
							className='primary-btn'
							onClick={e => handleClick(e)}
						>
							Generate QR
						</button>
					</div> :

					// QR block
					<div className='qr-block-wrapper card'>
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
		</>
	);
}

export default App;