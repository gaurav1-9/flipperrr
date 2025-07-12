import React from 'react'
import Timer from './Timer'

const Stats = ({ minutes, seconds , formattedMoves }) => {
  
  return (
    <div className="w-full h-fit p-3 text-butterscotch flex flex-col justify-center items-start font-montserratAlt font-semibold">
      <div className="hidden lg:flex">
        <Timer minutes={minutes} seconds={seconds} formattedMoves={formattedMoves}/>
      </div>
    </div>
  )
}

export default Stats