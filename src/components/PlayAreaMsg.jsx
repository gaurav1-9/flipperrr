import React from 'react'

const PlayAreaMsg = () => {
  return (
    <div className="flex justify-center items-center h-full mt-10 md:mt-0 md:mx-30">
      <div className="border-4 border-dashed border-butterscotch rounded-xl bg-butterscotch/10 px-6 py-8 text-center shadow-lg">
        <p className="text-butterscotch text-2xl font-extrabold tracking-wide">
          Ready to flip some cards?
        </p>
        <p className="text-butterscotch text-md mt-4 italic opacity-80">
          Hit that <span className="underline underline-offset-4">Start Game</span> button to begin your memory challenge!
        </p>
      </div>
    </div>
  )
}

export default PlayAreaMsg
