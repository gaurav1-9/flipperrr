import React from 'react'
import Timer from './Timer'
import GameTimer from './GameTimer'
import PlayAreaMsg from './PlayAreaMsg'
import Cards from './Cards'
import { HiOutlineLightBulb } from "react-icons/hi";

const PlayArea = ({ minutes, seconds, formattedMoves, cardSet, generatingGame, setClickCards, clickCards, iconMap, setCardSet, hint, showHint }) => {
  return (
    <div className='relative border-butterscotch w-full h-fit md:aspect-square p-4 border-4 rounded-lg text-butterscotch font-montserratAlt flex flex-col justify-start items-center font-semibold'>
      <p className='text-2xl text-start mb-2'>play area</p>
      <div
        className={`bg-eerieBlack absolute top-13 md:top-4 md:right-4 flex-col w-20 md:w-fit md:flex-row justify-center items-center px-4 py-1 rounded-md gap-1 lg:gap-1.5 hover:bg-eerieBlack/60 cursor-pointer ${(!showHint.visibility && cardSet.length)
          ? 'flex'
          : 'hidden'
          } min-[375px]:scale-70 min-[375px]:right-0 md:scale-100`}
        onClick={() => { if (generatingGame === false && cardSet) hint() }}
      >
        <HiOutlineLightBulb className='text-2xl' />
        <p className='text-sm'>{showHint.content}</p>
        {
          showHint.subContent && <p className='text-xs leading-1 md:leading-normal pb-3 md:pb-0'>({showHint.subContent})</p>
        }
      </div>
      <div className="flex justify-start w-full lg:hidden mt-2">
        <Timer minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} />
      </div>
      <div className='w-full h-full'>
        {
          (generatingGame && cardSet)
            ? <GameTimer />
            : (!cardSet.length)
              ? <PlayAreaMsg />
              : <Cards cardSet={cardSet} setClickCards={setClickCards} clickCards={clickCards} iconMap={iconMap} setCardSet={setCardSet} />
        }
      </div>
    </div>
  )
}

export default PlayArea