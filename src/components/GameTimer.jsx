import React, { useEffect, useState } from 'react'

const GameTimer = () => {
    const [counter, setCounter] = useState(5)

    useEffect(() => {
        if (counter > 0) {
            const timer = setTimeout(() => {
                setCounter(counter - 1)
            }, 1000)

            return () => clearTimeout(timer)
        }
    }, [counter])

    return (
        <div className='flex justify-center items-center h-full  mt-10 md:mt-0'>
            <div className="border-4 border-dashed border-butterscotch rounded-xl bg-butterscotch/10 px-6 py-8 text-center shadow-lg gap-2 flex flex-col">
                <p className='text-xl'>game starts in</p>
                <p className='font-rampartOne text-8xl'>{counter}</p>
            </div>
        </div >
    )
}

export default GameTimer