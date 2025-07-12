const Settings = ({ settings, setSettings, generatingGame, startGame }) => {
    return (
        <div className="w-full h-fit p-3 border-4 border-dashed rounded-xl border-butterscotch text-butterscotch flex flex-col justify-center items-center font-montserratAlt font-semibold mt-5 lg:mt-10">
            <p className='text-2xl '>settings</p>

            <div className='w-full mt-5'>
                <p className='text-lg text-start mb-2'>select theme</p>
                <div className="flex gap-2 md:gap-6 lg:gap-2">
                    <div
                        className={`w-1/2 flex justify-center items-center
                         ${(settings.theme === 0)
                                ? 'bg-butterscotch text-eerieBlack'
                                : 'bg-eerieBlack text-white/50 hover:bg-eerieBlack/50'
                            }
                          rounded-2xl cursor-pointer py-1`}
                        onClick={() => {
                            if (generatingGame === false) setSettings(prev => ({ ...prev, theme: 0 }))
                        }}
                        title="Cards will have numbers written on them"
                    >
                        <p>number</p>
                    </div>
                    <div className={`w-1/2 flex justify-center items-center
                         ${(settings.theme === 1)
                            ? 'bg-butterscotch text-eerieBlack'
                            : 'bg-eerieBlack text-white/50 hover:bg-eerieBlack/50'
                        }
                          rounded-2xl cursor-pointer py-1`}
                        onClick={() => {
                            if (generatingGame === false) setSettings(prev => ({ ...prev, theme: 1 }))
                        }}
                        title="Cards will have icons drawn on them"
                    >
                        <p>icons</p>
                    </div>
                </div>
            </div>

            <div className='w-full mt-5'>
                <p className='text-lg text-start mb-2'>select grid</p>
                <div className="flex gap-2 md:gap-6 lg:gap-2">
                    <div
                        className={`w-1/2 flex justify-center items-center
                         ${(settings.grid === 0)
                                ? 'bg-butterscotch text-eerieBlack'
                                : 'bg-eerieBlack text-white/50 hover:bg-eerieBlack/50'
                            }
                          rounded-2xl cursor-pointer py-1`}
                        onClick={() => {
                            if (generatingGame === false) setSettings(prev => ({ ...prev, grid: 0 }))
                        }}
                        title={`Total ${4 * 4} cards`}
                    >
                        <p>4&times;4</p>
                    </div>
                    <div className={`w-1/2 flex justify-center items-center
                         ${(settings.grid === 1)
                            ? 'bg-butterscotch text-eerieBlack'
                            : 'bg-eerieBlack text-white/50 hover:bg-eerieBlack/50'
                        }
                          rounded-2xl cursor-pointer py-1`}
                        onClick={() => {
                            if (generatingGame === false) setSettings(prev => ({ ...prev, grid: 1 }))
                        }}
                        title={`Total ${6 * 6} cards`}
                    >
                        <p>6&times;6</p>
                    </div>
                </div>
            </div>

            <button
                className="w-7/10 bg-eerieBlack py-2 rounded-md mt-8 mb-2.5 cursor-pointer shadow-[6px_6px_0_rgb(218,149,75)] duration-100"
                title="click to play"
                onClick={startGame}
                disabled={generatingGame}
            >
                <p className="text-xl">start game</p>
            </button>
        </div>
    )
}

export default Settings