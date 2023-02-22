import React from "react";
import { useGeneratorContext } from "../Generator";

const LengthControl: React.FC = () => {
  const { length, setLength } = useGeneratorContext();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const value: string = e.target.value;
    const n: number = Number(value);
    setLength(Math.min(Math.max(n, 1), 128));
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <label htmlFor="length-control-input">Length</label>
        <input
          type="number"
          value={length}
          onChange={handleChange}
          min={1}
          max={128}
          id="length-control-input"
          className="form-control form-control-sm w-auto"
        />
      </div>
      <input
        type="range"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        min={1}
        max={128}
        step={1}
        name="length"
        id="length-control-slider"
        className="form-range custom-range"
      />
    </div>
  );
};

export default LengthControl;
