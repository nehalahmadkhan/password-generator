import React from "react";
import { useGeneratorContext } from "../Generator";
import ResetIcon from "../assets/icons/reset";

const SpacialCharactersControl: React.FC = () => {
  const { includeSpacialCharacters, setIncludeSpacialCharacters, spacialCharacters, setSpacialCharacters, advance } =
    useGeneratorContext();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const chars: string = e.target.value.toUpperCase();
    const uniqueChar: string = Array.from(new Set(chars)).join("");
    const onlySpacialCharacters: string = uniqueChar.replace(/[^!#$%&\"'()*+,\-./:;<=>?@[\\\]^_`{|}~]+/g, "");
    setSpacialCharacters(onlySpacialCharacters);
  };
  const reset: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    setSpacialCharacters("!#$%&\"'()*+,-./:;<=>?@[\\]^_`{|}~");
  };
  return (
    <div>
      <div className="form-check d-flex align-items-center gap-1">
        <input
          type="checkbox"
          checked={includeSpacialCharacters}
          onChange={(e) => setIncludeSpacialCharacters(e.target.checked)}
          id="spacialCharacter-control-check"
          className="form-check-input mb-1"
        />
        <label htmlFor="spacialCharacter-control-check">
          Spacial Characters
          <span className="form-text"> (!#$%&@...)</span>
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
          value={spacialCharacters}
          onChange={handleChange}
          className="form-control form-control-sm mb-2"
          disabled={!includeSpacialCharacters}
        />
      )}
    </div>
  );
};

export default SpacialCharactersControl;
