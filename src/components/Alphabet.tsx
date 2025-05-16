const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type AlphabetProps = {
  correctLetters: string[]
  incorrectLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
}

const Alphabet = ({ correctLetters, incorrectLetters, addGuessedLetter, disabled }: AlphabetProps) => {
  return (
    <div className="self-stretch grid grid-cols-(--my-grid-cols) gap-2">
      {letters.map(letter => {
        const isCorrect = correctLetters.includes(letter)
        const isIncorrect = incorrectLetters.includes(letter)

        return (
          <button 
            className={`border-2 rounded-sm uppercase font-bold text-3xl aspect-square p-2 cursor-pointer  disabled:cursor-not-allowed [&:not(:disabled):hover]:bg-blue-400 [&:not(:disabled):focus]:bg-blue-400 
              ${isCorrect ? "bg-green-400" : ""} 
              ${isIncorrect ? "bg-red-400" : ""}`}
            disabled={isCorrect || isIncorrect || disabled}
            key={letter}
            onClick={() => addGuessedLetter(letter)}
          >
          {letter}
        </button>
        )
      })}
    </div>
  )
}

export default Alphabet