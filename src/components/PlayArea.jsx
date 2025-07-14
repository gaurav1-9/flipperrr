import React from 'react'
import Timer from './Timer'
import GameTimer from './GameTimer'
import PlayAreaMsg from './PlayAreaMsg'

const PlayArea = ({ minutes, seconds, formattedMoves, cardSet, generatingGame }) => {
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
              : <div className='w-full h-full flex justify-center items-center mt-5 md:mt-0'>
                <div className={`grid ${(cardSet.length === 36) ? 'grid-cols-6 grid-rows-6 gap-2 md:gap-5' : 'grid-cols-4 grid-rows-4 gap-3 md:gap-10'}`}>
                  {
                    (cardSet)
                      ? cardSet.map((card, i) => (
                        <div
                          key={i}
                          className={`flex justify-center items-center bg-eerieBlack p-2 md:p-3 aspect-square rounded-lg hover:bg-butterscotch/10 cursor-pointer`}
                        >
                          {
                            (typeof (card.value) === 'number')
                              ? <p
                                className={
                                  (cardSet.length === 16)
                                    ? `text-4xl md:text-6xl`
                                    : `text-xl md:text-4xl`
                                }
                              >
                                {(parseInt(card.value) < 10) ? `0${card.value}` : card.value}
                              </p>
                              : <p
                                className={
                                  (cardSet.length === 16)
                                    ? `text-4xl md:text-7xl`
                                    : `text-2xl md:text-5xl`
                                }
                              >
                                {card.value}
                              </p>
                          }
                        </div>
                      ))
                      : null
                  }
                </div>
              </div>
        }
      </div>
    </div>
  )
}

export default PlayArea