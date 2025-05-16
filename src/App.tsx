import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Alphabet from "./components/Alphabet";
import { getWord } from "./utils/getWord";

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => {
    return !wordToGuess.includes(letter)
  })

  const restartGame = () => {
    console.log("restart game")
    setGuessedLetters([])
    setWordToGuess(getWord())
  }

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])



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
    <div className="flex flex-col items-center gap-8 max-w-3xl p-2 mx-auto">
           
      <p className="text-3xl font-bold">
        {isWinner && "Winner!"}
        {isLoser && "Nice try!"}
      </p>

      <button 
        onClick={restartGame}
        className="border-2 rounded-sm uppercase font-bold py-1 px-2 cursor-pointer text-xl focus:bg-blue-400 hover:bg-blue-400"
      >
        New Game
      </button>
      
      <HangmanDrawing incorrectGuesses={incorrectLetters.length} />
      <HangmanWord 
        wordToGuess={wordToGuess} 
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      <Alphabet 
        correctLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        incorrectLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isWinner || isLoser}
      />
    </div>
  )
}

export default App
