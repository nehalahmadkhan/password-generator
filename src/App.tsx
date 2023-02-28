import { Generator } from "./Generator";
import GenerateButton from "./components/GenerateButton";
import LengthControl from "./components/LengthControl";
import Output from "./components/Output";
import NumbersControl from "./components/NumbersControl";
import SmallLettersControl from "./components/SmallLettersControl";
import CapitalLettersControl from "./components/CapitalLettersControl";
import SpacialCharactersControl from "./components/SpacialCharactersControl";
import CountControl from "./components/CountControl";
import Title from "./components/Title";
import BottomBar from "./components/BottomBar";

import bg1 from "./assets/images/pawel-czerwinski-0erga2weEwI-unsplash.jpg";
import bg9 from "./assets/images/pexels-giovanni-vardan-13371419.jpg";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <Generator>
      <main
        className={`app d-flex flex-column justify-content-center align-items-center p-3 gap-3 ${
          darkMode ? "dark-mode" : "light-mode"
        }`}
        style={{
          backgroundImage: `url("${darkMode ? bg1 : bg9}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="main glass p-4 p-md-5 d-flex flex-column gap-2">
          <Title darkMode={darkMode} setDarkMode={setDarkMode} />
          <LengthControl />
          <CountControl />
          <NumbersControl />
          <SmallLettersControl />
          <CapitalLettersControl />
          <SpacialCharactersControl />
          <GenerateButton />
          <Output />
        </div>
        <BottomBar />
      </main>
    </Generator>
  );
}

export default App;
