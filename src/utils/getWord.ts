import words from "../words.json";

export const getWord = (): string => {
  return words[Math.floor(Math.random() * words.length)]
}
