import { useRef, useState } from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
  const [inputs, setInput] = useState("");
  const qrValue = useRef();

  const handleQR = () => {
    setInput(qrValue.current.value);
    // qrValue.current.value = "";
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label>Input your text:</label>
      <input type="text" ref={qrValue} />
      <button onClick={handleQR}>Generate QR</button>
      <QRCode value={inputs} />
    </div>
  );
}
