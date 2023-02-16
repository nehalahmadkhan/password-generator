import React, { createContext, useContext, useState } from "react";
import ContextInterface from "./ContextInterface";
import cryptoRandomString from "crypto-random-string";

const GeneratorContext = createContext<ContextInterface | null>(null);
const defaultNumbers = "0123456789";
const defaultSmallLetters = "abcdefghijklmnopqrstuvwxyz";
const defaultCapitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const defaultSpacialCharacters = "!#$%&\"'()*+,-./:;<=>?@[\\]^_`{|}~";

const Generator: React.FC<React.PropsWithChildren> = (prop) => {
  const [advance, setAdvance] = useState<boolean>(false);
  const [length, setLength] = useState<number>(8);

  const [count, setCount] = useState(1);

  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<string>(defaultNumbers);

  const [includeSmallLetters, setIncludeSmallLetters] = useState<boolean>(true);
  const [smallLetters, setSmallLetters] = useState<string>(defaultSmallLetters);

  const [includeCapitalLetters, setIncludeCapitalLetters] = useState<boolean>(false);
  const [capitalLetters, setCapitalLetters] = useState<string>(defaultCapitalLetters);

  const [includeSpacialCharacters, setIncludeSpacialCharacters] = useState<boolean>(false);
  const [spacialCharacters, setSpacialCharacters] = useState<string>(defaultSpacialCharacters);

  const [result, setResult] = useState<string[]>([]);

  const generate = (): void => {
    let characters: string = "";
    if (includeNumbers) {
      characters += advance ? numbers : defaultNumbers;
    }
    if (includeSmallLetters) {
      characters += advance ? smallLetters : defaultSmallLetters;
    }
    if (includeCapitalLetters) {
      characters += advance ? capitalLetters : defaultCapitalLetters;
    }
    if (includeSpacialCharacters) {
      characters += advance ? spacialCharacters : defaultSpacialCharacters;
    }

    const res: string[] = [];
    for (let i = 0; i < (advance ? count : 1); i++) {
      const tempRes = cryptoRandomString({ length, characters });
      res.push(tempRes);
    }
    setResult(res);
  };

  const value: ContextInterface = {
    advance,
    setAdvance,
    length,
    setLength,

    count,
    setCount,

    includeNumbers,
    setIncludeNumbers,
    numbers,
    setNumbers,

    includeSmallLetters,
    setIncludeSmallLetters,
    smallLetters,
    setSmallLetters,

    includeCapitalLetters,
    setIncludeCapitalLetters,
    capitalLetters,
    setCapitalLetters,

    includeSpacialCharacters,
    setIncludeSpacialCharacters,
    spacialCharacters,
    setSpacialCharacters,

    generate,
    result,
  };

  return <GeneratorContext.Provider value={value}>{prop.children}</GeneratorContext.Provider>;
};

const useGeneratorContext = (): ContextInterface => useContext(GeneratorContext) as ContextInterface;
export { Generator, useGeneratorContext };
