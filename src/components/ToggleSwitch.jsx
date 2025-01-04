import React, { useState } from "react";
import "./ToggleSwitch.css"; // Import the CSS file

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState("$"); // State for toggle value

  return (
    <div className="toggle-container">
      {/* Display Values */}
      <span className="currency-text">{toggle} 0.00</span>
      <span className="divider"> / </span>
      <span className="percentage-text">{toggle} 0.00</span>

      {/* Toggle Switch */}
      <div className="toggle-switch">
        <button
          className={`toggle-button ${toggle === "$" ? "active" : ""}`}
          onClick={() => setToggle("$")}
        >
          $
        </button>
        <button
          className={`toggle-button ${toggle === "%" ? "active" : ""}`}
          onClick={() => setToggle("%")}
        >
          %
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
