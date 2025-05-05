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

const Alphabet = () => {
  return (
    <div className="self-stretch grid grid-cols-(--my-grid-cols) gap-2">
      {letters.map(letter => (
        <button 
          className="border-2 rounded-sm uppercase font-bold text-3xl aspect-square p-2 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed [&:not(:disabled):hover]:bg-blue-400 [&:not(:disabled):focus]:bg-blue-400"
          disabled={false}
          key={letter}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default Alphabet