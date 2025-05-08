
type HangmanWordProps = {
  wordToGuess: string
  guessedLetters: string[]
}

const HangmanWord = ({ wordToGuess, guessedLetters }: HangmanWordProps) => {
  return (
    <div className="flex gap-4 text-5xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-4" key={index}>
          <span className={
            guessedLetters.includes(letter) ? 
              "visible" :
              "invisible" 
          }>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord