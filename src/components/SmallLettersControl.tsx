import React from "react";
import { useGeneratorContext } from "../Generator";
import ResetIcon from "../assets/icons/reset";

const SmallLettersControl: React.FC = () => {
  const { includeSmallLetters, setIncludeSmallLetters, smallLetters, setSmallLetters, advance } = useGeneratorContext();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const chars: string = e.target.value.toLocaleLowerCase();
    const uniqueChar: string = Array.from(new Set(chars)).join("");
    const onlySmallLetters: string = uniqueChar.replace(/[^a-z]+/g, "");
    setSmallLetters(onlySmallLetters);
  };
  const reset: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    setSmallLetters("abcdefghijklmnopqrstuvwxyz");
  };
  return (
    <div>
      <div className="form-check d-flex align-items-center gap-1">
        <input
          type="checkbox"
          checked={includeSmallLetters}
          onChange={(e) => setIncludeSmallLetters(e.target.checked)}
          id="smallLetter-control-check"
          className="form-check-input mb-1"
        />
        <label htmlFor="smallLetter-control-check">
          Small Letters
          <span className="form-text"> (a-z)</span>
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
          value={smallLetters}
          onChange={handleChange}
          className="form-control form-control-sm mb-2"
          disabled={!includeSmallLetters}
        />
      )}
    </div>
  );
};

export default SmallLettersControl;
