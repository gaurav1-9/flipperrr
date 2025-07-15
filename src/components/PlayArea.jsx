import React from 'react'
import Timer from './Timer'
import GameTimer from './GameTimer'
import PlayAreaMsg from './PlayAreaMsg'
import Cards from './Cards'

const PlayArea = ({ minutes, seconds, formattedMoves, cardSet, generatingGame, setClickCards, clickCards, iconMap, setCardSet }) => {
  return (
    <div className='border-butterscotch w-full h-fit md:aspect-square p-4 border-4 rounded-lg text-butterscotch font-montserratAlt flex flex-col justify-start items-center font-semibold'>
      <p className='text-2xl text-start mb-2'>play area</p>
      <div className="flex justify-start w-full lg:hidden">
        <Timer minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} />
      </div>
      <div className='w-full h-full'>
        {
          (generatingGame && cardSet)
            ? <GameTimer />
            : (!cardSet.length)
              ? <PlayAreaMsg />
              : <Cards cardSet={cardSet} setClickCards={setClickCards} clickCards={clickCards} iconMap={iconMap} setCardSet={setCardSet}/>
        }
      </div>
    </div>
  )
}

export default PlayArea