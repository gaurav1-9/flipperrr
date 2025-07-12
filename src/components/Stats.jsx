import React from 'react'
import Timer from './Timer'

const Stats = ({ minutes, seconds, formattedMoves }) => {

  return (
    <div className="w-full h-fit p-3 text-butterscotch flex flex-col justify-center items-start font-montserratAlt font-semibold">
      <div className="hidden lg:flex flex-col">
        <Timer minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} />
        <div className="w-full h-1 bg-butterscotch/30 mt-5"></div>
      </div>
    </div>
  )
}

export default Stats