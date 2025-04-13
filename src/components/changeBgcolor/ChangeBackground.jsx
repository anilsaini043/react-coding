import { useState } from "react";

const ChangeBackgroundColor = () => {
    const [color, setColor] = useState("#ffffff");

    const handleBgColor = () => {
        document.body.style.backgroundColor = color
    }

    return (
        <div className="bg-section">
            <h1>Project - 2 (Change background color)</h1>
            <label htmlFor="selectColor">Selected color : {color}</label>
            <input type="color" name="selectColor" value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={handleBgColor}>Change background</button>
        </div>
    )
}

export default ChangeBackgroundColor;