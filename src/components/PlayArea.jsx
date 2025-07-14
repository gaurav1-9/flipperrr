import React from 'react'
import Timer from './Timer'

const PlayArea = ({ minutes, seconds, formattedMoves, cardSet }) => {
  return (
    <div className='border-butterscotch w-full h-fit md:aspect-square p-4 border-4 rounded-lg text-butterscotch font-montserratAlt flex flex-col justify-center items-center font-semibold'>
      <p className='text-2xl text-start mb-2'>play area</p>
      <div className="flex justify-start w-full lg:hidden">
        <Timer minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} />
      </div>
      <div className={`flex flex-wrap ${(cardSet.length === 36) ? 'gap-8' : 'gap-20'} justify-center`}>
        {
          (cardSet)
            ? cardSet.map((card, i) => (
              (typeof(card.value) === 'number')
                ? <div className='text-6xl flex'>{(parseInt(card.value) < 10) ? `0${card.value}` : card.value}</div>
                : <div className='text-6xl flex'>{card.value}</div>
            ))
            : null
        }
      </div>
    </div>
  )
}

export default PlayArea