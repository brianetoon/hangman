const head = (
  <div key="head" className="w-7 h-7 sm:w-14 sm:h-14 rounded-full absolute top-6 -right-3 sm:top-12 sm:-right-6 border-4 sm:border-8 border-black"/>
)

const body = (
  <div key="body" className="w-1 h-12 sm:w-2 sm:h-24 bg-black absolute right-0 top-12 sm:top-24" />
)

const right_arm = (
  <div key="right_arm" className="w-12 h-1 sm:w-24 sm:h-2 bg-black absolute -right-11.5 top-16 sm:-right-23 sm:top-32 -rotate-30 origin-bottom-left" />
)

const left_arm = (
  <div key="left_arm" className="w-12 h-1 sm:w-24 sm:h-2 bg-black absolute right-0.5 top-16 sm:right-1 sm:top-32 rotate-30 origin-bottom-right" />
)

const right_leg = (
  <div key="right_leg" className="w-12 h-1 sm:w-24 sm:h-2 bg-black absolute -right-11 top-23 sm:-right-22 sm:top-46 rotate-60 origin-bottom-left" />
)

const left_leg = (
  <div key="left_leg" className="w-12 h-1 sm:w-24 sm:h-2 bg-black absolute right-0 top-23 sm:top-46 -rotate-60 origin-bottom-right" />
)

const body_parts = [head, body, right_arm, left_arm, right_leg, left_leg]

type HangmanDrawingProps = {
  incorrectGuesses: number
}

const HangmanDrawing = ({ incorrectGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {body_parts.slice(0, incorrectGuesses)}

      <div className="h-6 w-1 sm:h-12 sm:w-2 bg-black absolute top-0 right-0" />
      <div className="h-1 w-24 sm:h-2 sm:w-48 ml-29 bg-black" />
      <div className="h-45 w-1 sm:h-90 sm:w-2 ml-29 bg-black" />
      <div className="h-1 w-30 ml-14.5 sm:h-2 sm:w-60 sm:ml-1 bg-black" />
    </div>
  )
}

export default HangmanDrawing