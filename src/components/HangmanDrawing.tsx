const head = (
  <div className="w-14 h-14 rounded-full absolute top-12 -right-6 border-8 border-black"/>
)

const body = (
  <div className="w-2 h-24 bg-black absolute right-0 top-24" />
)

const right_arm = (
  <div className="w-24 h-2 bg-black absolute -right-23 top-32 -rotate-30 origin-bottom-left" />
)

const left_arm = (
  <div className="w-24 h-2 bg-black absolute right-1 top-32 rotate-30 origin-bottom-right" />
)

const right_leg = (
  <div className="w-24 h-2 bg-black absolute -right-22 top-46 rotate-60 origin-bottom-left" />
)

const left_leg = (
  <div className="w-24 h-2 bg-black absolute right-0 top-46 -rotate-60 origin-bottom-right" />
)

const HangmanDrawing = () => {
  return (
    <div className="relative">
      {head}
      {body}
      {right_arm}
      {left_arm}
      {right_leg}
      {left_leg}
      <div className="h-12 w-2 bg-black absolute top-0 right-0" />
      <div className="h-2 w-48 bg-black ml-29" />
      <div className="h-90 w-2 ml-29 bg-black" />
      <div className="h-2 w-60 bg-black" />
    </div>
  )
}

export default HangmanDrawing