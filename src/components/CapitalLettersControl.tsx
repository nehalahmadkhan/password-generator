import React from "react";
import { useGeneratorContext } from "../Generator";
import ResetIcon from "../assets/icons/reset";

const CapitalLettersControl: React.FC = () => {
  const { includeCapitalLetters, setIncludeCapitalLetters, capitalLetters, setCapitalLetters, advance } =
    useGeneratorContext();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const chars: string = e.target.value.toUpperCase();
    const uniqueChar: string = Array.from(new Set(chars)).join("");
    const onlySmallLetters: string = uniqueChar.replace(/[^A-Z]+/g, "");
    setCapitalLetters(onlySmallLetters);
  };
  const reset: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    setCapitalLetters("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  };
  return (
    <div>
      <div className="form-check d-flex align-items-center gap-1">
        <input
          type="checkbox"
          checked={includeCapitalLetters}
          onChange={(e) => setIncludeCapitalLetters(e.target.checked)}
          id="capitalLetter-control-check"
          className="form-check-input mb-1"
        />
        <label htmlFor="capitalLetter-control-check">
          Capital Letters
          <span className="form-text"> (A-Z)</span>
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
          maxLength={26}
          value={capitalLetters}
          onChange={handleChange}
          className="form-control form-control-sm mb-2"
          disabled={!includeCapitalLetters}
        />
      )}
    </div>
  );
};

export default CapitalLettersControl;
