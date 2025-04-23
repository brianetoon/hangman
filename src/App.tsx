import { useState } from "react";
import words from "./words.json";

function App() {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  console.log(word)

  return (
    <h1>Hangman</h1>
  )
}

export default App
