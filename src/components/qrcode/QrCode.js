import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import QrGenerator from './QrGenerator';
import './QrCode.css';

function QrCode() {
	const [ result, setResult ] = useState(null);
	const handleScan = (data) => {
		if (data) {
			setResult(data);
		}
	};
	const handleError = (err) => {
		console.error(err);
	};

	return (
		<div className={"qrscanContainer"}>
			<div className={"qrscan"}>
				{result?
				<>
					<QrGenerator qrCode={result} />
					<p className="codeScanResult">{result?result:'Please use your scan device to scan the QR code on the package for identifying.'}</p>
					<span className={"scanButtons"}>
						<button onClick={()=>setResult(null)}>Rescan</button>
						<button onClick="#">Go to product page</button>
					</span>
				</>
				:
				<>
					<QrReader delay={300} onError={handleError} onScan={handleScan}  />
					<p className="codeScanResult">{result?result:'Please use your scan device to scan the QR code on the package for identifying.'}</p>
				</>
				}
			</div>
		</div>
    
	);
}

export default QrCode;
