import WordRow from "./components/WordRow";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentGuess, setCurrentGuess] = useState(0);
  const [guessList, setGuessList] = useState<string[]>(new Array(6).fill(""));
  const keyPressHandler = (event: KeyboardEvent) => {
    if (currentGuess > 5) return;
    if (event.key.match(/^[a-zA-Z]$/)) {
      if (guessList[currentGuess].length < 5) {
        setGuessList((prevList) => {
          const updatedList = [...prevList];
          updatedList[currentGuess] += event.key.toLowerCase();
          return updatedList;
        });
      }
    }
    if (event.key === "Backspace" && guessList[currentGuess].length > 0) {
      setGuessList((prevList) => {
        const updatedList = [...prevList];
        updatedList[currentGuess] = updatedList[currentGuess].slice(0, -1);
        return updatedList;
      });
    }
    if (event.key === "Enter" && guessList[currentGuess].length === 5) {
      setCurrentGuess((prevGuess) => prevGuess + 1);
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", keyPressHandler);

    return () => {
      document.body.removeEventListener("keydown", keyPressHandler);
    };
  }, [guessList, currentGuess]);
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
