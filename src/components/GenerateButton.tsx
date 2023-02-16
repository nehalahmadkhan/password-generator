import React from "react";
import { useGeneratorContext } from "../Generator";

const GenerateButton: React.FC = () => {
  const { generate } = useGeneratorContext();

  return (
    // <section>
    <button className="btn btn-primary w-100" onClick={generate}>
      Generate
    </button>
    // </section>
  );
};

export default GenerateButton;
