import { useCallback, useEffect, useState } from "react";
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

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters])



  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
    <div className="flex flex-col items-center gap-8 max-w-3xl border-2 border-indigo-500 p-2 mx-auto">
      <p className="text-3xl text-center">
        {isWinner && "Winner! - Refresh to play again"}
        {isLoser && "Nice try - Refresh to play again"}
      </p>
      <HangmanDrawing incorrectGuesses={incorrectLetters.length} />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <Alphabet 
        correctLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        incorrectLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  )
}

export default App
