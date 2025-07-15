import React from 'react'

const Cards = ({ cardSet, setCardSet, setClickCards, clickCards, iconMap }) => {
    return (
        <div className='w-full h-full flex justify-center items-center mt-5 md:mt-0'>
            <div className={`grid ${(cardSet.length === 36) ? 'grid-cols-6 grid-rows-6 gap-2 md:gap-5 lg:gap-3' : 'grid-cols-4 grid-rows-4 gap-3 md:gap-10'}`}>
                {
                    (cardSet)
                        ? cardSet.map((card, i) => (
                            <div
                                key={i}
                                className={`flex justify-center items-center 
                                    ${(card.isMatched)
                                        ? 'bg-butterscotch text-eerieBlack'
                                        : (card.isFlipped)
                                            ? 'bg-butterscotch/10 '
                                            : (card.isMatched)
                                                ? 'bg-butterscotch text-eerieBlack'
                                                : 'bg-eerieBlack hover:bg-butterscotch/10'
                                    }  p-2 md:p-3 aspect-square rounded-lg  cursor-pointer`}
                                onClick={() => {
                                    if (clickCards.length === 2 || card.isFlipped || card.isMatched) return;

                                    setCardSet((prevCards) =>
                                        prevCards.map((c) =>
                                            c.id === card.id ? { ...c, isFlipped: true } : c
                                        )
                                    );

                                    setClickCards([...clickCards, card]);
                                }}
                            >
                                {
                                    (typeof (card.value) === 'number')
                                        ? <p
                                            className={`
                                                ${(cardSet.length === 16)
                                                    ? 'text-4xl md:text-6xl'
                                                    : 'text-xl md:text-4xl'
                                                }
                                                ${(card.isFlipped === false)
                                                    ? 'invisible'
                                                    : 'visible'
                                                }
                                                `}
                                        >
                                            {(parseInt(card.value) < 10)
                                                ? `0${card.value}`
                                                : card.value
                                            }
                                        </p>
                                        : <p
                                            className={`
                                                ${(cardSet.length === 16)
                                                    ? 'text-4xl md:text-7xl'
                                                    : 'text-2xl md:text-5xl'
                                                }
                                                ${(card.isFlipped === false)
                                                    ? 'invisible'
                                                    : 'visible'
                                                }
                                                `}
                                        >
                                            {iconMap[card.value]}
                                        </p>
                                }
                            </div>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default Cards