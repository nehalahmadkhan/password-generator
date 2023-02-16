import React from "react";
import { useGeneratorContext } from "../Generator";
import ResetIcon from "../assets/icons/reset";

const NumbersControl: React.FC = () => {
  const { includeNumbers, setIncludeNumbers, numbers, setNumbers, advance } = useGeneratorContext();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const chars: string = e.target.value;
    const uniqueChar: string = Array.from(new Set(chars)).join("");
    const onlyNumbers: string = uniqueChar.replace(/\D+/g, "");
    setNumbers(onlyNumbers);
  };
  const reset: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    setNumbers("0123456789");
  };

  return (
    <div>
      <div className="form-check d-flex align-items-center gap-1">
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
          id="number-control-check"
          className="form-check-input mb-1"
        />
        <label htmlFor="number-control-check">
          Numbers
          <span className="form-text"> (0-9)</span>
        </label>
        {advance && (
          <button className="btn btn-sm ms-auto py-0 px-1" onClick={reset} title="Reset">
            <ResetIcon />
          </button>
        )}
      </div>
      {advance && (
        <input
          type="text"
          maxLength={10}
          value={numbers}
          onChange={handleChange}
          className="form-control form-control-sm mb-2"
          disabled={!includeNumbers}
        />
      )}
    </div>
  );
};

export default NumbersControl;
