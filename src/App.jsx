import React, { useState } from 'react';
import QRCode from 'qrcode';

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const generateQRCode = () => {
    QRCode.toDataURL(url, {
      margin: 2,
      width: 800,
      color: {
        dark: '#000000ff',
        light: '#ffffffff'
      }
    }, (err, url) => {
      if (err) return console.error(err);
      console.log(url);
      setQrcode(url);
    });
  };

  return (
    <div className="app">
      <h1>Hi there! <br />This is a QR code generator app designed by Abraham Ajetomobi.</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrcode && <>
        <img src={qrcode} alt="Generated QR Code" />
        <a href={qrcode} download="qrcode.png">Download QR Code</a>
      </>}
    </div>
  );
}

export default App;