import React, { useState } from 'react'
import Title from './Title'
import Settings from './Settings'

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
    return (
        <div className='flex flex-col lg:flex-row pt-6 h-fit lg:h-full gap-4'>
            <div className="px-8 lg:pl-15 xl:pl-25 lg:pr-0 flex-1/4">
                <Title />
                <Settings settings={settings} setSettings={setSettings} generatingGame={generatingGame} startGame={startGame} />
            </div>
            <div className=" bg-green-100 flex-2/5">
                d
            </div>
            <div className="bg-purple-500 flex-1/4">
                d
            </div>
        </div>
    )
}

export default Layout