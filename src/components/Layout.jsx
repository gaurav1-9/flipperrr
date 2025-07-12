import React, { useState } from 'react'
import Title from './Title'
import Settings from './Settings'
import PlayArea from './PlayArea'
import Stats from './Stats'
import { useStopwatch } from 'react-timer-hook'

const Layout = () => {
    const [settings, setSettings] = useState({
        theme: 0,
        grid: 0
    })
    const [generatingGame, setGeneratingGame] = useState(false)
    const startGame = () => {
        setGeneratingGame(true)

        setTimeout(() => {
            setGeneratingGame(false)
        }, 5000);
        console.log(settings)
    }

    const stopwatch = useStopwatch({ autoStart: true })
    const minutes = stopwatch.minutes < 10 ? `0${stopwatch.minutes}` : `${stopwatch.minutes}`
    const seconds = stopwatch.seconds < 10 ? `0${stopwatch.seconds}` : `${stopwatch.seconds}`
    const [moves, setMoves] = useState(0)
    const formattedMoves = moves < 10 ? `0${moves}` : `${moves}`
    const [statistics, setStatistics] = useState([
        {
            time:{
                min:'01',
                sec: '03'
            },
            moves:5,
            grid: 0
        },
        {
            time:{
                min:'02',
                sec: '43'
            },
            moves:15,
            grid: 1
        },
        {
            time:{
                min:'01',
                sec: '03'
            },
            moves:5,
            grid: 0
        },
        {
            time:{
                min:'02',
                sec: '43'
            },
            moves:15,
            grid: 1
        },
        {
            time:{
                min:'02',
                sec: '43'
            },
            moves:15,
            grid: 1
        },
    ])

    return (
        <div className='flex flex-col lg:flex-row pt-6 h-fit gap-4'>
            <div className="px-8 lg:pl-15 xl:pl-25 lg:pr-0 flex-1/4">
                <Title />
                <Settings settings={settings} setSettings={setSettings} generatingGame={generatingGame} startGame={startGame} />
            </div>
            <div className="px-8 lg:px-0 flex-2/5">
                <PlayArea minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} />
            </div>
            <div className="px-8 lg:pr-15 xl:pr-25 lg:pl-0 flex-1/4 mb-5 lg:mb-0">
                <Stats minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} statistics={statistics}/>
            </div>
        </div>
    )
}

export default Layout