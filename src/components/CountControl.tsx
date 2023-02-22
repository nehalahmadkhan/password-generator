import React from "react";
import { useGeneratorContext } from "../Generator";

const CountControl: React.FC = () => {
  const { count, setCount, advance } = useGeneratorContext();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const value: string = e.target.value;
    const n: number = Number(value);
    setCount(Math.min(Math.max(n, 1), 50));
  };
  return advance ? (
    <div>
      <div className="d-flex justify-content-between">
        <label htmlFor="count-control-input">Count</label>
        <input
          type="number"
          value={count}
          onChange={handleChange}
          min={1}
          max={128}
          id="count-control-input"
          className="form-control form-control-sm w-auto"
        />
      </div>
      <input
        type="range"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        min={1}
        max={50}
        step={1}
        name="count"
        id="count-control-slider"
        className="form-range"
      />
    </div>
  ) : (
    <></>
  );
};

export default CountControl;
