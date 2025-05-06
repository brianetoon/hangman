import { useState } from "react";
import words from "./words.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Alphabet from "./components/Alphabet";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => {
    return !wordToGuess.includes(letter)
  })

  return (
    <div className="flex flex-col items-center gap-8 max-w-3xl border-2 border-indigo-500 p-2 mx-auto">
      <p className="text-3xl text-center">Win or Lose</p>
      <HangmanDrawing incorrectGuesses={incorrectLetters.length} />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <Alphabet />
    </div>
  )
}

export default App
