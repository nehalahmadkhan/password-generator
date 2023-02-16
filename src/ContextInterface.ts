export default interface context {
  advance: boolean;
  setAdvance: React.Dispatch<React.SetStateAction<boolean>>;

  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;

  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;

  includeNumbers: boolean;
  setIncludeNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  numbers: string;
  setNumbers: React.Dispatch<React.SetStateAction<string>>;

  includeSmallLetters: boolean;
  setIncludeSmallLetters: React.Dispatch<React.SetStateAction<boolean>>;
  smallLetters: string;
  setSmallLetters: React.Dispatch<React.SetStateAction<string>>;

  includeCapitalLetters: boolean;
  setIncludeCapitalLetters: React.Dispatch<React.SetStateAction<boolean>>;
  capitalLetters: string;
  setCapitalLetters: React.Dispatch<React.SetStateAction<string>>;

  includeSpacialCharacters: boolean;
  setIncludeSpacialCharacters: React.Dispatch<React.SetStateAction<boolean>>;
  spacialCharacters: string;
  setSpacialCharacters: React.Dispatch<React.SetStateAction<string>>;

  generate: () => void;
  result: string[];
}
