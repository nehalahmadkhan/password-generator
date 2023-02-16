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

import bg1 from "./assets/images/pawel-czerwinski-0erga2weEwI-unsplash.jpg";
// import bg2 from "./assets/images/pawel-czerwinski-3kzmA3438Ao-unsplash.jpg";
// import bg3 from "./assets/images/pawel-czerwinski-7FqOISWr5V0-unsplash.jpg";
// import bg4 from "./assets/images/pawel-czerwinski-C7lsAjG15GM-unsplash.jpg";
// import bg5 from "./assets/images/pawel-czerwinski-Cj1TH1cTW5w-unsplash.jpg";
// import bg6 from "./assets/images/pawel-czerwinski-F0yDf-GBjMQ-unsplash.jpg";
// import bg7 from "./assets/images/pawel-czerwinski-fTGe45Yy70c-unsplash.jpg";
// import bg8 from "./assets/images/pawel-czerwinski-keVhq8uU23M-unsplash.jpg";
import bg9 from "./assets/images/pexels-giovanni-vardan-13371419.jpg";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <Generator>
      <main
        className={`app d-flex justify-content-center align-items-center ${darkMode ? "dark-mode" : "light-mode"}`}
        style={{
          backgroundImage: `url("${darkMode ? bg1 : bg9}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="main glass p-4 p-md-5 d-flex flex-column gap-2 m-3">
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
      </main>
    </Generator>
  );
}

export default App;
