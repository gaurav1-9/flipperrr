import React from 'react'

const GameStat = ({statistics}) => {
    return (
        <>
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
        </>
    )
}

export default GameStat