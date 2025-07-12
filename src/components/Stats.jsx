import React from 'react'
import Timer from './Timer'
import GameStat from './GameStat'

const Stats = ({ minutes, seconds, formattedMoves, statistics }) => {

  return (
    <div className="w-full h-fit px-3 text-butterscotch flex flex-col justify-center items-start font-montserratAlt font-semibold">
      <div className="hidden lg:flex flex-col">
        <Timer minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} />
        <div className="w-full h-1 bg-butterscotch/30 my-5"></div>
      </div>
      <div className='flex flex-col w-full gap-2'>
        <p className={`text-2xl lg:text-3xl mb-3`}>your stats...</p>
        {
          (!statistics.length)
          ? <p className='font-light lowercase'>Let's play a game to unlock some stats!</p>
          : <GameStat statistics={statistics} />
        }
      </div>
    </div>
  )
}

export default Stats