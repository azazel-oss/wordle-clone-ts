import WordRow from "./components/WordRow";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentGuess, setCurrentGuess] = useState(0);
  const [guessList, setGuessList] = useState<string[]>(new Array(6).fill(""));
  const keyPressHandler = (event: KeyboardEvent) => {
    if (event.key.match(/^[a-zA-Z]$/)) {
      if (guessList[currentGuess].length < 5) {
        setGuessList((prevList) => {
          const updatedList = [...prevList];
          updatedList[currentGuess] += event.key.toLowerCase();
          return updatedList;
        });
      }
    }
  };
  useEffect(() => {
    console.log("bad things happening");
    document.body.addEventListener("keydown", keyPressHandler);

    return () => {
      document.body.removeEventListener("keydown", keyPressHandler);
    };
  }, [guessList]);
  return (
    <main className="App">
      <h1>Wordle</h1>

      {guessList.map((guess, idx) => (
        <WordRow key={idx} word={guess} />
      ))}
    </main>
  );
}

export default App;
