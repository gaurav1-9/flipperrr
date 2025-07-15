import React, { useEffect, useRef, useState } from 'react'
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
    const playAreaRef = useRef(null)
    const iconMap = {
        GiWaveSurfer: <GiWaveSurfer />,
        GiCamelHead: <GiCamelHead />,
        GiCirclingFish: <GiCirclingFish />,
        GiCutLemon: <GiCutLemon />,
        GiGlassCelebration: <GiGlassCelebration />,
        GiKoala: <GiKoala />,
        GiPartyPopper: <GiPartyPopper />,
        GiSadCrab: <GiSadCrab />,
        GiTreeBranch: <GiTreeBranch />,
        BiSolidCookie: <BiSolidCookie />,
        BiMeteor: <BiMeteor />,
        BiSolidCat: <BiSolidCat />,
        BiSolidInvader: <BiSolidInvader />,
        BiSolidYinYang: <BiSolidYinYang />,
        BiSolidZap: <BiSolidZap />,
        BiWind: <BiWind />,
        BiSolidMagicWand: <BiSolidMagicWand />,
        BiFingerprint: <BiFingerprint />
    };
    const availableIcons = [
        'GiWaveSurfer', 'GiCamelHead', 'GiCirclingFish', 'GiCutLemon',
        'GiGlassCelebration', 'GiKoala', 'GiPartyPopper', 'GiSadCrab',
        'GiTreeBranch', 'BiSolidCookie', 'BiMeteor', 'BiSolidCat',
        'BiSolidInvader', 'BiSolidYinYang', 'BiSolidZap', 'BiWind',
        'BiSolidMagicWand', 'BiFingerprint'
    ];
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
                value: value,
                isFlipped: false,
                isMatched: false,
            }))
            setCardSet(duplicateIcons.sort(() => Math.random() - 0.5))
        }
    }

    const stopwatch = useStopwatch({ autoStart: false })
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

    const [showHint, setShowHint] = useState({})

    const startGame = () => {
        setGeneratingGame(true)
        setShowHint({
            visibility: true,
            content: `hint`,
            subContent: `3 sec`
        })
        stopwatch.pause()
        setTimeout(() => {
            if (playAreaRef.current) {
                playAreaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }, 10);
        setTimeout(() => {
            cardSetter()
            setGeneratingGame(false)
            stopwatch.reset(new Date(0), true)
            setMoves(0)
            setShowHint({
                visibility: false,
                content: `hint`,
                subContent: `5 sec`
            })
        }, 5000);
    }

    const [clickCards, setClickCards] = useState([])
    const gameLogic = () => {
        if (clickCards.length === 2) {
            const [firstCard, secondCard] = clickCards
            if (firstCard.value === secondCard.value && firstCard.id !== secondCard.id) {
                setCardSet((prevCards) =>
                    prevCards.map((card) =>
                        card.id === firstCard.id || card.id === secondCard.id
                            ? { ...card, isMatched: true }
                            : card
                    )
                );
            }
            else {
                setTimeout(() => {
                    setCardSet((prevCards) =>
                        prevCards.map((card) =>
                            card.id === firstCard.id || card.id === secondCard.id
                                ? { ...card, isFlipped: false }
                                : card
                        )
                    );
                }, 500);
            }
            setMoves(moves + 1)
            setClickCards([])
        }
    }

    useEffect(() => {
        if (clickCards.length > 0)
            gameLogic()
    }, [clickCards])

    const [hintTimer, setHintTimer] = useState(null)
    const hint = () => {
        stopwatch.pause()
        setShowHint({
            visibility: false,
            content: '5'
        });
        setHintTimer(5)
        setCardSet((prevCards) =>
            prevCards.map((card) => ({
                ...card,
                isFlipped: true
            }))
        )
        setTimeout(() => {
            setShowHint((prev) => (
                {
                    ...prev,
                    visibility: true
                }
            ))
            setCardSet((prevCards) =>
                prevCards.map((card) => {
                    if (card.isMatched) return card
                    else return {
                        ...card,
                        isFlipped: false
                    }
                })
            )
            stopwatch.start()
        }, 5000);
    }
    useEffect(() => {
        if (hintTimer > 0) {
            const timer = setTimeout(() => {
                let count = hintTimer - 1
                setHintTimer(count)
                setShowHint((prev) => ({
                    ...prev,
                    content: count,
                    subContent: null
                }))
            }, 1000)

            return () => clearTimeout(timer)
        }
        else return
    }, [hintTimer])

    return (
        <div className='flex flex-col lg:flex-row pt-6 h-fit gap-4 lg:gap-6'>
            <div className="px-8 lg:pl-15 xl:pl-25 lg:pr-0 flex-1/4">
                <Title />
                <Settings settings={settings} setSettings={setSettings} generatingGame={generatingGame} startGame={startGame} />
            </div>
            <div ref={playAreaRef} className="scroll-mt-10 px-8 lg:px-4 flex-2/5 relative">
                <PlayArea minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} cardSet={cardSet} setCardSet={setCardSet} generatingGame={generatingGame} setClickCards={setClickCards} clickCards={clickCards} iconMap={iconMap} hint={hint} showHint={showHint} />
            </div>
            <div className="px-8 lg:pr-15 xl:pr-25 lg:pl-0 flex-1/4 mb-5 lg:mb-0">
                <Stats minutes={minutes} seconds={seconds} formattedMoves={formattedMoves} statistics={statistics} />
            </div>
        </div>
    )
}

export default Layout