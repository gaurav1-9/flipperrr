import React from 'react'
import Timer from './Timer'

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
          statistics.map((stat, idx) => (
            <div key={idx} className="flex bg-eerieBlack p-3 px-4 rounded-lg justify-between items-center">
              <div className="flex flex-col">
                <p className='flex gap-1.5 items-center'>
                  <span className='text-xl'>{`${stat.time.min}:${stat.time.sec}`}</span>
                  <span className='font-light pt-0.5'>seconds</span>
                </p>
                <p className='flex gap-1.5 items-center'>
                  <span className='text-xl'>
                    {
                      (stat.moves < 10)
                        ? `0${stat.moves}`
                        : stat.moves
                    }
                  </span>
                  <span className='font-light pt-0.5'>moves</span>
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className='text-lg'>
                  {
                    (stat.grid === 0)
                      ? '4×4'
                      : '6×6'
                  }
                </p>
                <p className='font-light text-2xl leading-4 pb-2'>grid</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Stats