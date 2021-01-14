import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import QrGenerator from './Components/QrGenerator';
import './App.css';

function App() {
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
    <>
    <header>
      header - styles to be taken from QDMS
    </header>
		<div className="qrscan-container">
			<div className="qrscan">
				{result?
				<>
					<QrGenerator qrCode={result} />
					<p>{result}</p>
					<span>
						<button className="test-button" onClick={()=>setResult(null)}>Rescan</button>
						<button className="test-button" onClick="#">Go to product page</button>
					</span>
				</>
				:
				<QrReader delay={300} onError={handleError} onScan={handleScan}  />
				}
			</div>
		</div>
    </>
	);
}

export default App;
