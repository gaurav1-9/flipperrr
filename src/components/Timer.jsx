import React from 'react'

const Timer = ({ minutes, seconds, formattedMoves }) => {
    return (
        <div className='w-full'>
            <div className={`flex flex-wrap justify-between lg:flex-col`}>
                <div className="flex gap-3 justify-center items-center">
                    <p className={`text-base md:text-lg lg:text-3xl `}>timer:</p>
                    <div className="flex gap-1">
                        <p className='text-xs md:text-base lg:text-3xl rounded-md bg-eerieBlack w-8 lg:w-10 aspect-square flex justify-center items-center'>{minutes[0]}</p>
                        <p className='text-xs md:text-base lg:text-3xl rounded-md bg-eerieBlack w-8 lg:w-10 aspect-square flex justify-center items-center'>{minutes[1]}</p>
                        <p className='text-xl lg:text-4xl rounded-md flex pb-1'>:</p>
                        <p className='text-xs md:text-base lg:text-3xl rounded-md bg-eerieBlack w-8 lg:w-10 aspect-square flex justify-center items-center'>{seconds[0]}</p>
                        <p className='text-xs md:text-base lg:text-3xl rounded-md bg-eerieBlack w-8 lg:w-10 aspect-square flex justify-center items-center'>{seconds[1]}</p>
                    </div>
                </div>

                <div className="flex gap-3 justify-start items-center mt-1 md:mt-0 lg:mt-2">
                    <p className={`text-base md:text-lg lg:text-3xl `}>moves:</p>
                    <div className="flex gap-1">
                        <p className='text-xs md:text-base lg:text-3xl rounded-md bg-eerieBlack w-8 lg:w-10 aspect-square flex justify-center items-center'>{formattedMoves[0]}</p>
                        <p className='text-xs md:text-base lg:text-3xl rounded-md bg-eerieBlack w-8 lg:w-10 aspect-square flex justify-center items-center'>{formattedMoves[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer