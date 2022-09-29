import WordRow from "./components/WordRow";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [answer, setAnswer] = useState("fleet");
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentGuess, setCurrentGuess] = useState(0);
  const [guessList, setGuessList] = useState<string[]>(new Array(6).fill(""));
  const [cellStyles, setCellStyles] = useState(new Array(6).fill("WWWWW"));

  const updateRowStyles = (guess: string) => {
    let styleArray = new Array(5).fill("");
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        styleArray[i] = "E"; // Exact Match
      } else if (
        answer.includes(guess[i]) &&
        styleArray[answer.lastIndexOf(guess[i])] !== "E"
      ) {
        styleArray[i] = "P"; // Partial Match
      } else {
        styleArray[i] = "N"; // No match
      }
    }
    if (styleArray.join("") === "EEEEE") {
      setIsGameOver(true);
    }
    setCellStyles((prevStyles) => {
      let updatedStyles = [...prevStyles];
      updatedStyles[currentGuess] = styleArray.join("");
      return updatedStyles;
    });
  };

  const keyPressHandler = (event: KeyboardEvent) => {
    if (currentGuess > 5) setIsGameOver(true);
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
      updateRowStyles(guessList[currentGuess]);
      setCurrentGuess((prevGuess) => prevGuess + 1);
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", keyPressHandler);

    if (isGameOver) {
      document.body.removeEventListener("keydown", keyPressHandler);
    }
    return () => {
      document.body.removeEventListener("keydown", keyPressHandler);
    };
  }, [guessList, currentGuess, isGameOver]);
  return (
    <main className="App">
      <h1>Wordle</h1>

      {guessList.map((guess, idx) => (
        <WordRow key={idx} word={guess} rowStyle={cellStyles[idx]} />
      ))}
    </main>
  );
}

export default App;
