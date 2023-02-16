import React from "react";
import { useGeneratorContext } from "../Generator";

interface props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Title: React.FC<props> = ({ darkMode, setDarkMode }) => {
  const { advance, setAdvance } = useGeneratorContext();
  return (
    <header className="d-flex justify-content-between align-items-center mb-4">
      <h1 className="display-6">Password Generator</h1>
      <div>
        <div className="form-check form-check-reverse form-switch">
          <label className="form-check-label" htmlFor="advanceSwitch">
            Advance
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="advanceSwitch"
            checked={advance}
            onChange={(e) => setAdvance(e.target.checked)}
          />
        </div>
        <div className="form-check form-check-reverse form-switch">
          <label className="form-check-label" htmlFor="themeSwitch">
            Dark
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="themeSwitch"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        </div>
      </div>
    </header>
  );
};

export default Title;
