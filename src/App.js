import './App.css';

import { useState } from "react";

function App() {
  const [pass, setPass] = useState("");

  const [len, setLen] = useState(10);

  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [digits, setDigits] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);
  const [spaces, setSpaces] = useState(false);

  const generatePassword = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    const digit = "0123456789";
    const special = "@$!%*?&#";
    const spacing = "_";

    // checks which requirements have been selected
    let req = "";
    if (lowercase) req += lower;
    if (uppercase) req += upper;
    if (digit) req += digit;
    if (specialChars) req += special;
    if (spaces) req += spacing;

    if (!req) return setPass(""); // if none have been checked, return password as-is

    // length recognition + generation 
    let passLength = "";
    for (let l = 0; l < len; l++) {
      passLength += req[Math.floor(Math.random() * req.length)];
    }

    setPass(passLength);
  }
  

  return (
    <div className="container">
      <section className="input-container">

        <div className="input-display-container">
          <input 
            type="text"
            value={pass}
            readOnly
          />
        </div>
       

        <div className="range-slider-container">
          <input
            type="range"
            min={10}
            max={30}
            value={len}
            onChange={(e) => setLen(e.target.value)}
          />
          {len}
        </div>

        <div className="checkbox-fields">
          <label htmlFor="lowercase">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
            Lowercase (a-z)
          </label>

           <label htmlFor="uppercase">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            Uppercase (A-Z)
          </label>

          <label htmlFor="digits">
            <input
              type="checkbox"
              checked={digits}
              onChange={(e) => setDigits(e.target.checked)}
            />
            Digits (0-9)
          </label>

          <label htmlFor="symbols">
            <input
              type="checkbox"
              checked={specialChars}
              onChange={(e) => setSpecialChars(e.target.checked)}
            />
            Special Characters (@$!%*?&#)
          </label>

          <label htmlFor="spaces">
            <input
              type="checkbox"
              checked={spaces}
              onChange={(e) => setSpaces(e.target.checked)}
            />
            Spaces (_)
          </label>
        </div>
          <button className="generate-btn" type="button" onClick={generatePassword}>Generate Password</button>
      </section>
    
    </div>
  );
}

export default App;
