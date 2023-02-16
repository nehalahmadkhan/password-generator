import React, { useState } from "react";
import { useGeneratorContext } from "../Generator";
import Notification from "./Notification";
import CopyIcon from "../assets/icons/copy";

const Output: React.FC = () => {
  const [showNotification, setShowNotification] = useState<number>(0);
  const { result } = useGeneratorContext();
  const copySingle = (e: React.MouseEvent<HTMLButtonElement>, value: string): void => {
    navigator.clipboard.writeText(value);
    setShowNotification((current) => current + 1);
  };
  const copyAll = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigator.clipboard.writeText(result.join("\n"));
    setShowNotification((current) => current + 1);
  };
  return (
    <section className="p-3 rounded-3 position-relative output">
      {result.length <= 0 && <p className="m-0 text-center text-secondary">Click on generate button.</p>}
      <ul className="output-list list-unstyled m-0">
        {result.map((r, i) => (
          <li>
            <button
              key={i}
              className="btn btn-sm password w-100 text-start text-truncate"
              onClick={(e) => copySingle(e, r)}
            >
              {r}
            </button>
          </li>
        ))}
      </ul>
      {result.length > 1 && (
        <button className="position-absolute top-0 start-0 btn btn-sm p-0 copy-all-btn" onClick={copyAll}>
          <span className="ms-1">
            <CopyIcon />
          </span>
          <span className="label ms-1">Copy All</span>
        </button>
      )}
      <Notification show={showNotification} setShow={setShowNotification} />
    </section>
  );
};

export default Output;
