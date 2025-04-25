
const HangmanWord = () => {
  const word = "testing";
  const guessedLetters = ["t", "i"];

  return (
    <div className="flex gap-4 text-7xl font-bold uppercase font-mono">
      {word.split("").map((letter, index) => (
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