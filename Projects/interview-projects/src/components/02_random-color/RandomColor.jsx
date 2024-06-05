import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const selectHexColor = () => {
    setColorType("hex");
  };

  const selectRgbColor = () => {
    setColorType("rgb");
  };

  const generateHexColor = () => {
    let patterns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += patterns[Math.floor(Math.random() * patterns.length)];
    }
    setColor(hexColor);
  };
  const generateRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        padding: "10px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={selectHexColor}>Select hex color</button>
        <button onClick={selectRgbColor}>Select rgb color</button>
        <button
          onClick={colorType === "hex" ? generateHexColor : generateRgbColor}
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "150px",
        }}
      >
        <h1>{colorType} color</h1>
        <p>{color}</p>
      </div>
    </div>
  );
}
