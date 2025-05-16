type HangmanWordProps = {
  wordToGuess: string
  guessedLetters: string[]
  reveal?: boolean
}

const HangmanWord = ({ wordToGuess, guessedLetters, reveal = false }: HangmanWordProps) => {
  return (
    <div className="flex gap-4 text-3xl sm:text-5xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-4" key={index}>
          <span className={`
            ${guessedLetters.includes(letter) || reveal ? 
              "visible" :
              "invisible"}
            ${!guessedLetters.includes(letter) && reveal ? "text-red-500" : ""}
          `}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord