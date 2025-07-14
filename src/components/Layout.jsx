import React, { useEffect, useState } from 'react'
import Title from './Title'
import Settings from './Settings'
import PlayArea from './PlayArea'
import Stats from './Stats'
import { useStopwatch } from 'react-timer-hook'
import { GiWaveSurfer, GiCamelHead, GiCirclingFish, GiCutLemon, GiGlassCelebration, GiKoala, GiPartyPopper, GiSadCrab, GiTreeBranch } from "react-icons/gi";
import { BiSolidCookie, BiMeteor, BiSolidCat, BiSolidInvader, BiSolidYinYang, BiSolidZap, BiWind, BiSolidMagicWand, BiFingerprint } from "react-icons/bi";

const Layout = () => {
    const [settings, setSettings] = useState({
        theme: 0,
        grid: 0
    })
    const availableIcons = [
        <GiWaveSurfer />, <GiCamelHead />,
        <GiCirclingFish />, <GiCutLemon />,
        <GiGlassCelebration />, <GiKoala />,
        <GiPartyPopper />, <GiSadCrab />,
        <GiTreeBranch />, <BiSolidCookie />,
        <BiMeteor />, <BiSolidCat />,
        <BiSolidInvader />, <BiSolidYinYang />,
        <BiSolidZap />, <BiWind />,
        <BiSolidMagicWand />, <BiFingerprint />,
    ]
    const availableNumbers = [19, 11, 1, 3, 5, 2, 45, 32, 54, 8, 41, 7, 25, 50, 99, 67, 83, 4]
    const [cardSet, setCardSet] = useState([])
    const [generatingGame, setGeneratingGame] = useState(false)

    const cardSetter = () => {
        const cardPairs = (settings.grid === 0) ? 8 : 18
        if (settings.theme === 0) {
            const fullShuffledNumbers = [...availableNumbers].sort(() => Math.random() - 0.5)
            const selectedNumbers = fullShuffledNumbers.slice(0, cardPairs)
            const duplicatedNumber = [...selectedNumbers, ...selectedNumbers].map((value, idx) => ({
                id: idx,
                value,
                isFlipped: false,
                isMatched: false,
            }))
            setCardSet(duplicatedNumber.sort(() => Math.random() - 0.5))
        }
        else {
            const fullShuffledIcons = [...availableIcons].sort(() => Math.random() - 0.5)
            const selectedIcons = fullShuffledIcons.slice(0, cardPairs)
            const duplicateIcons = [...selectedIcons, ...selectedIcons].map((value, idx) => ({
                id: idx,
                value,
                isFlipped: false,
                isMatched: false,
            }))
            setCardSet(duplicateIcons.sort(() => Math.random() - 0.5))
        }
    }

    const stopwatch = useStopwatch({ autoStart: true })
    const minutes = stopwatch.minutes < 10 ? `0${stopwatch.minutes}` : `${stopwatch.minutes}`
    const seconds = stopwatch.seconds < 10 ? `0${stopwatch.seconds}` : `${stopwatch.seconds}`
    const [moves, setMoves] = useState(0)
    const formattedMoves = moves < 10 ? `0${moves}` : `${moves}`
    const [statistics, setStatistics] = useState([
        // {
        //     time:{
        //         min:'01',
        //         sec: '03'
        //     },
        //     moves:5,
        //     grid: 0
        // },
    ])

    const startGame = () => {
        setGeneratingGame(true)

        cardSetter()

        setTimeout(() => {
            setGeneratingGame(false)
        }, 5000);
        console.log(settings)
    }
    useEffect(() => {
        console.log("CardSet updated:", cardSet)
    }, [cardSet])

    
    return (
        <div className='flex flex-col lg:flex-row pt-6 h-fit gap-6'>
            <div className="px-8 lg:pl-15 xl:pl-25 lg:pr-0 flex-1/4">
                <Title />
                <Settings settings={settings} setSettings={setSettings} generatingGame={generatingGame} startGame={startGame} />
            </div>
            <div className="px-8 lg:px-0 flex-2/5">
                <PlayArea minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} cardSet={cardSet} />
            </div>
            <div className="px-8 lg:pr-15 xl:pr-25 lg:pl-0 flex-1/4 mb-5 lg:mb-0">
                <Stats minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} statistics={statistics} />
            </div>
        </div>
    )
}

export default Layout