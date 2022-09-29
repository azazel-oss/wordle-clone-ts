import WordRow from "./components/WordRow";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessList, setGuessList] = useState(new Array(6).fill(""));
  const keyPressHandler = (event: KeyboardEvent) => {};
  useEffect(() => {
    document.body.addEventListener("keydown", keyPressHandler);

    return () => {
      document.body.removeEventListener("keydown", keyPressHandler);
    };
  }, []);
  return (
    <main className="App">
      <h1>Wordle</h1>

      {guessList.map((guess, idx) => (
        <WordRow key={idx} />
      ))}
    </main>
  );
}

export default App;
